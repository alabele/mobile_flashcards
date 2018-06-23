import { AsyncStorage } from 'react-native'
import { setDummyData, DECK_STORAGE_KEY } from './_deck'

export function fetchDeckResults () {
  return AsyncStorage.getItem(DECK_STORAGE_KEY)
    .then(setDummyData)
}

export function submitEntry ({ entry, key }) {
  return AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify({
    [key]: entry
  }))
}

export function removeEntry (key) {
  return AsyncStorage.getItem(DECK_STORAGE_KEY)
    .then((results) => {
      const data = JSON.parse(results)
      data[key] = undefined
      delete data[key]
      AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(data))
    })
}
