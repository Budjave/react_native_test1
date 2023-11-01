import { View, Text } from 'react-native'
import React from 'react'

const FlexExercise = () => {
  return (
    <View style={{flex: 1, flexDirection: 'row', gap: 5}}>
      <View style={{flex: 1, gap: 5}}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'gray' }}>
          <View style={{width: 50, height: 50, backgroundColor: 'yellow'}}></View>
        </View>
        <View style={{flex: 1, gap: 3, flexDirection: 'row'}}>
          <View style={{flex: 1, backgroundColor: 'green'}}></View>
          <View style={{flex: 1, backgroundColor: 'green'}}></View>
          <View style={{flex: 1, backgroundColor: 'green'}}></View>
          <View style={{flex: 1, backgroundColor: 'green'}}></View>
        </View>
      </View>
      <View style={{width: 100, gap: 10}}>
        <View style={{flex: 1, backgroundColor: 'coral'}}></View>
        <View style={{flex: 1, backgroundColor: 'coral'}}></View>
        <View style={{flex: 1, backgroundColor: 'coral'}}></View>
      </View>
    </View>
  )
}

export default FlexExercise