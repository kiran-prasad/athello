export function makeMove(row, col) {
  return {
    type: 'MAKE_MOVE',
    row,
    col
  }
}

export function skipMove(currentPlayer) {
  return {
    type: 'SKIP_MOVE',
    currentPlayer

  }
}