import { exitDialogTemplate } from "../templates/exitDialogTemplate.ts";
/** Shows the exit confirmation dialog. */
  export function showExitDialog(): void {
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
