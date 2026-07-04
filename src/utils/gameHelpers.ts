/**
   * Returns the winning player.
   * @returns Winner or `null` for a draw.
   */
export function getWinner(
  scoreBlue: number,
  scoreOrange: number,
): "blue" | "orange" | null {
  if (scoreBlue > scoreOrange) return "blue";
  if (scoreOrange > scoreBlue) return "orange";
  return null;
}