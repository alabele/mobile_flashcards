import { AsyncStorage } from 'react-native'
import { getMetricMetaInfo, timeToString } from './helper'
import faker from 'faker'
const uuidv1 = require('uuid/v1')

export const DECK_STORAGE_KEY = 'MobileFlashcards:deck'


export function setDummyData() {

  let dummyData = []
  const timestamp = Date.now()

  function buildFakeDeck(i) {
    return {
      deckname: "Deck Name " + faker.lorem.words(),
      id: uuidv1(),
      cards: [ {question: "Question " + i, answer: "Answer " + i }]
    };
  }

for(var i = 0; i < 5; i++) {
  dummyData.push(buildFakeDeck(i))
}

  //for (let i = 0; i < 6; i++) {
    // const time = timestamp + i * 24 * 60 * 60 * 1000
    // const strTime = timeToString(time)
    // dummyData[strTime] = i
    //   ? {
    //       id: uuidv1,
    //       deckname: "My Deck" + i,
    //       //question: "How old are you",
    //       questions:[]
    //     }
    //   : null
  //}

  AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(dummyData))

  return dummyData
}