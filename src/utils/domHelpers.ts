/**
   * Creates the game-over overlay.
   * @returns Overlay element.
   */
  export function createOverlay(): HTMLElement {
    const overlay = document.createElement("div");
    overlay.classList.add("game-over");
    document.body.appendChild(overlay);
    return overlay;
  }

   /**
   * Animates a panel into view.
   * @param panel Panel element.
   */
  export function slideIn(panel: HTMLElement): void {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => panel.classList.add("is-visible"));
    });
  }