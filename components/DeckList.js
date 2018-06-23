import React, { Component }  from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { connect } from 'react-redux'
import { gray, black } from '../utils/colors'
import { fetchDeckResults } from '../utils/api'
import { receiveEntries} from '../actions'

class DeckList extends Component {
  state = {
    ready: "yanny",
    stuff: [],
  }
  componentDidMount () {
    const { dispatch } = this.props

     fetchDeckResults()
      //.then((data) => console.log(data))
     .then((entries) => dispatch(receiveEntries(entries)))
      .then((responseJson) => this.setState(() => ({ready: "laurel", stuff: responseJson})))
  }

 render() {
    const {ready} = this.state
    const entries = this.props 
    let mydata = entries.entries

    const peopleArray = Object.keys(mydata).map(i => mydata[i])
   /// mydata = this.props.entries
    return (
      
      <View style={styles.deckCard}>
        <View>
          <Text style={{fontSize: 22, color: black}}> </Text>
         </View> 
           <View> 
            //<Text style={{fontSize: 16, color: black}}> 3 HI TERRANCE {JSON.stringify(peopleArray)} </Text>
            <Text style={{fontSize: 16, color: black}}>{peopleArray.map((e) => e.deckname)} </Text>
           </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  deckCard: {
    // flexDirection: 'row',
    marginTop: 12,
    backgroundColor: gray,
    //flex: 1
  },
})

function mapStateToProps (entries) {
  return {
    entries,
  }
}
export default connect(
  mapStateToProps,
)(DeckList)