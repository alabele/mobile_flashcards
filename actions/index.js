export const CREATE_DECK = 'CREATE_DECK'
export const RECEIVE_ENTRIES = 'RECEIVE_ENTRIES'

export function createDeck (entry) {
  return {
    type: CREATE_DECK,
    entry,
  }
}


export function receiveEntries (entries) {
  return {
    type: RECEIVE_ENTRIES,
    entries,
  }
}