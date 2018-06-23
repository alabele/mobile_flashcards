import React from 'react'
import { View, TextInput, StyleSheet, Text } from 'react-native'
import { gray } from '../utils/colors'

export default function TitleInput ({ value, onChange }) {
  return (
    <View style={styles.row}>
      <View style={styles.metricCounter}>
        <Text style={{fontSize: 34, textAlign: 'center'}}>Create a New Deck!</Text>
        <Text style={{fontSize: 24, color: gray}}>Deck Name:</Text>
         <TextInput
          //style={{backgroundColor:gray, height: 30,}}
          value={value}
          onValueChange={onChange}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },
  metricCounter: {
    justifyContent: 'center',
    alignItems: 'center'
  },
})