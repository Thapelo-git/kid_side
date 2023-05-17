import { StyleSheet, Text, View ,Pressable} from 'react-native'
import React from 'react'

const Course = ({navigation}) => {
  return (
 <View>
      <Pressable   onPress={()=>
     navigation.navigate("QuizScreen")}
    style={{ flexDirection: 'row', alignItems: 'center', borderWidth: 1,
    borderColor: '#00ffff', marginVertical: 20, borderRadius: 10,
    height:80}}>
      <Text>Test</Text>
    </Pressable>
  </View>
  )
}

export default Course

const styles = StyleSheet.create({})