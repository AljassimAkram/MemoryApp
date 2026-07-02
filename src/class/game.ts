import type { GameConfig } from "../types/types.ts";
import { HeaderTemplate } from "../templates/headerTemplate.ts";
import { CardTemplate } from "../templates/cardTemplate.ts";
import {
  gameOverScoreTemplate,
  gameOverWinnerTemplate,
} from "../templates/gameOverTemplate.ts";
import confetti from "canvas-confetti";
import { THEMES } from "../data/themes.ts";
import { exitDialogTemplate } from "../templates/exitDialogTemplate.ts";
import { shuffle } from '../utils/shuffle';

export class MemoryGame {
  private config: GameConfig;
  private gridElement: HTMLElement;
  private flippedCards: HTMLElement[] = [];
  private isLocked: boolean = false;
  private scoreBlue: number = 0;
  private scoreOrange: number = 0;
  private currentPlayer: "blue" | "orange" = "blue";
  private matchedPairs: number = 0;
  private totalPairs: number = 0;

  constructor(config: GameConfig) {
    this.config = config;
    this.totalPairs = config.cardCount / 2;
    this.currentPlayer = config.startingPlayer;
    const selector = config.gridSelector ?? "#field";
    const element = document.querySelector(selector);
    if (!element) throw new Error(`Element ${selector} nicht gefunden`);

    this.gridElement = element as HTMLElement;
    this.init();
  }

  private init(): void {
    this.updateGridSize();
    this.generateBoard();
    this.addEventListeners();
  }

  /** Updates the grid column count. */
  private updateGridSize(): void {
    const gridMapping: Record<number, number> = {
      16: 4,
      24: 6,
      36: 6,
    };
    const columns = gridMapping[this.config.cardCount] || 4;
    this.gridElement.style.setProperty("--grid-cols", columns.toString());
  }

  /** Renders the game header. */
  private renderUI(): void {
    const headerContainer = document.querySelector("#game-header");
    if (headerContainer) {
      headerContainer.innerHTML = HeaderTemplate({
        scoreBlue: this.scoreBlue,
        scoreOrange: this.scoreOrange,
        currentPlayer: this.currentPlayer,
      });

      const exitBtn = headerContainer.querySelector(".game-header__exit-btn");
      exitBtn?.addEventListener("click", () => this.showExitDialog());
    }
  }

  /** Shows the exit confirmation dialog. */
  private showExitDialog(): void {
    const dialog = document.createElement("div");
    dialog.innerHTML = exitDialogTemplate();
    const box = dialog.firstElementChild as HTMLElement;
    document.body.appendChild(box);

    box
      .querySelector(".exit-dialog__btn--back")
      ?.addEventListener("click", () => box.remove());
    box
      .querySelector(".exit-dialog__btn--exit")
      ?.addEventListener("click", () => {
        document.dispatchEvent(new CustomEvent("game:exit"));
        box.remove();
      });
  }

  /**
   * Creates and shuffles the symbols for the game board.
   * @returns Shuffled symbol list.
   */
  private getGameSymbols(): string[] {
    const symbols = [...(THEMES[this.config.theme] || THEMES["codeVibes"])];
    shuffle(symbols);
    const selected = symbols.slice(0, this.config.cardCount / 2);
    const gameSet = [...selected, ...selected];
    shuffle(gameSet);
    return gameSet;
  }

  /**
   * Creates a card element.
   * @param imagePath Card image path.
   * @returns Card element.
   */
  private createCard(imagePath: string): HTMLElement {
    const card = document.createElement("button");
    card.classList.add("card");
    card.dataset.symbol = imagePath;
    card.innerHTML = CardTemplate(imagePath);
    return card;
  }

  /** Builds the game board. */
  private generateBoard(): void {
    const fragment = document.createDocumentFragment();
    this.getGameSymbols().forEach((path) =>
      fragment.appendChild(this.createCard(path)),
    );
    this.gridElement.innerHTML = "";
    this.gridElement.appendChild(fragment);
    this.renderUI();
  }

  /** Adds the card click listener. */
  private addEventListeners(): void {
    this.gridElement.addEventListener("click", (e) => {
      const target = e.target as HTMLElement;
      const card = target.closest(".card") as HTMLElement;

      if (
        card &&
        !this.isLocked &&
        !card.classList.contains("is-flipped") &&
        !card.classList.contains("is-matched")
      ) {
        this.handleCardClick(card);
      }
    });
  }

  /**
   * Handles a card click.
   * @param card Clicked card.
   */
  private handleCardClick(card: HTMLElement): void {
    card.classList.add("is-flipped");
    this.flippedCards.push(card);

    if (this.flippedCards.length === 2) {
      this.isLocked = true;
      this.checkMatch();
    }
  }

  /** Checks whether the flipped cards match. */
  private checkMatch(): void {
    const [card1, card2] = this.flippedCards;
    const isMatch = card1.dataset.symbol === card2.dataset.symbol;

    if (isMatch) {
      this.handleMatch(card1, card2);
    } else {
      this.handleMismatch(card1, card2);
    }
  }

  /** Adds one point to the active player. */
  private incrementScore(): void {
    if (this.currentPlayer === "blue") this.scoreBlue++;
    else this.scoreOrange++;
  }

  /** Checks whether the game is finished. */
  private checkGameOver(): void {
    if (this.matchedPairs === this.totalPairs)
      setTimeout(() => this.showWinner(), 500);
  }

  /**
   * Handles a matching pair.
   * @param card1 First card.
   * @param card2 Second card.
   */
  private handleMatch(card1: HTMLElement, card2: HTMLElement): void {
    card1.classList.add("is-matched");
    card2.classList.add("is-matched");
    this.incrementScore();
    this.matchedPairs++;
    this.flippedCards = [];
    this.isLocked = false;
    this.renderUI();
    this.checkGameOver();
  }

  /**
   * Handles a non-matching pair.
   * @param card1 First card.
   * @param card2 Second card.
   */
  private handleMismatch(card1: HTMLElement, card2: HTMLElement): void {
    setTimeout(() => {
      card1.classList.remove("is-flipped");
      card2.classList.remove("is-flipped");
      this.flippedCards = [];

      this.currentPlayer = this.currentPlayer === "blue" ? "orange" : "blue";

      this.isLocked = false;
      this.renderUI();
    }, 1000);
  }

  /**
   * Returns the winning player.
   * @returns Winner or `null` for a draw.
   */
  private getWinner(): "blue" | "orange" | null {
    if (this.scoreBlue > this.scoreOrange) return "blue";
    if (this.scoreOrange > this.scoreBlue) return "orange";
    return null;
  }

  /** Displays the winner screen. */
  private showWinner(): void {
    this.showGameOverScreen(this.getWinner());
  }

  /**
   * Creates the game-over overlay.
   * @returns Overlay element.
   */
  private createOverlay(): HTMLElement {
    const overlay = document.createElement("div");
    overlay.classList.add("game-over");
    document.body.appendChild(overlay);
    return overlay;
  }

  /**
   * Animates a panel into view.
   * @param panel Panel element.
   */
  private slideIn(panel: HTMLElement): void {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => panel.classList.add("is-visible"));
    });
  }

  /**
   * Starts the confetti animation.
   * @param winner Winning player.
   */
  private fireConfetti(winner: "blue" | "orange"): void {
    const prop = `--color-${winner}-player`;
    const color = getComputedStyle(document.documentElement)
      .getPropertyValue(prop)
      .trim();
    confetti({
      particleCount: 150,
      spread: 80,
      origin: { y: 0.4 },
      colors: [color, "#ffffff", "#f0ea6e"],
    });
  }

  /**
   * Displays the winner panel.
   * @param winner Winning player or `null`.
   */
  private showWinnerPanel(winner: "blue" | "orange" | null): void {
    const overlay = this.createOverlay();
    overlay.innerHTML = gameOverWinnerTemplate({
      scoreBlue: this.scoreBlue,
      scoreOrange: this.scoreOrange,
      winner,
    });
    const winnerPanel = overlay.querySelector(
      ".game-over__panel",
    ) as HTMLElement;
    this.slideIn(winnerPanel);
    if (winner) setTimeout(() => this.fireConfetti(winner), 500);
    winnerPanel
      .querySelector(".game-over__restart-btn")
      ?.addEventListener("click", () => {
        document.querySelectorAll(".game-over").forEach((el) => el.remove());
        document.dispatchEvent(new CustomEvent("game:exit"));
      });
  }

  /**
   * Displays the game-over screen.
   * @param winner Winning player or `null`.
   */
  private showGameOverScreen(winner: "blue" | "orange" | null): void {
    const overlay = this.createOverlay();
    overlay.innerHTML = gameOverScoreTemplate({
      scoreBlue: this.scoreBlue,
      scoreOrange: this.scoreOrange,
      winner,
    });
    const scorePanel = overlay.querySelector(
      ".game-over__panel",
    ) as HTMLElement;
    this.slideIn(scorePanel);
    setTimeout(() => this.showWinnerPanel(winner), 5000);
  }
}
