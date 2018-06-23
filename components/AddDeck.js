import React, { Component } from 'react'
import { View, TouchableOpacity, Text, StyleSheet, Platform } from 'react-native'
//import {uuid} from 'react-native-uuid'
import TitleInput from './TitleInput'
import { connect } from 'react-redux'
import { createDeck } from '../actions'
import { purple, white } from '../utils/colors'
import { submitEntry } from '../utils/api'

const uuidv1 = require('uuid/v1');

function SubmitBtn ({ onPress }) {
  return (
    <TouchableOpacity
      style={Platform.OS === 'ios' ? styles.iosSubmitBtn : styles.AndroidSubmitBtn}
      onPress={onPress}>
        <Text style={styles.submitBtnText}>SUBMIT</Text>
    </TouchableOpacity>
  )
}

class AddDeck extends Component {
  state = {
    entry: 'Placeholder Value',

  }

  submit = () => {
    const key = uuidv1();
    const entry = this.state

    this.props.dispatch(createDeck({
      [key]: entry
    }))

    this.setState(() => ({ entry:"WE DID IT"}))

    //this.toHome()

    submitEntry({ key, entry })

   // clearLocalNotification()
     // .then(setLocalNotification)
  }

  render() {

    return (
      <View style={styles.container}>
        <TitleInput
          style={styles.textInput}
            multiline = {true}
           numberOfLines = {4}
           onChangeText={(entry) => this.setState({entry})}
           value={this.state.entry}
        />
        <View style={styles.row}>
          <SubmitBtn onPress={this.submit} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: white
  },
  row: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },
  iosSubmitBtn: {
    backgroundColor: purple,
    padding: 10,
    borderRadius: 7,
    height: 45,
    marginLeft: 40,
    marginRight: 40,
  },
  AndroidSubmitBtn: {
    backgroundColor: purple,
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    height: 45,
    borderRadius: 2,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
  },
  submitBtnText: {
    color: white,
    fontSize: 22,
    textAlign: 'center',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 30,
    marginRight: 30,
  },
  textInput: {
    backgroundColor: purple
   // flex: 1,
    //flexDirection: 'row',
  }
})


function mapStateToProps (state) {
  const key = uuidv1()

  return {
    alreadyLogged: state[key] && typeof state[key].today === 'undefined'
  }
}

export default connect(
  mapStateToProps
)(AddDeck)