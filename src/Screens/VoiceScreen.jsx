import { StyleSheet, Text, View,TextInput,Button,StatusBar } from 'react-native'
import React,{useState} from 'react'
import Ionicons from "react-native-vector-icons/Ionicons"
import * as Speech from 'expo-speech'
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import { DATA } from './DATA';
const VoiceScreen = () => {
    const [name,setName]=useState('Daniel Mawasha washinton')
    const [UserAns,setUserAns]=useState('')
    // const listAllVoiceOptions=async()=>{
    //   let voices= await Speech.getAvailableVoicesAsync()
    //   console.log(voices)
    // }
    // React.useEffect(listAllVoiceOptions);
    // const speakGreeting=()=>{
    //   const greeting =`Hi ${name}`
    //   // options ={}
    //   Speech.speak(greeting)
    // }
  return (
    
       <View style={{flex: 1}}>
    <ProgressSteps>
    
        <ProgressStep label='first'>
            <View style={{ alignItems: 'center' }}>
                <Text>ESPLE</Text>
                <View style={{backgroundColor:'lightblue',width:50,height:50,
              borderColor:'blue',justifyContent:'center',alignItems:'center',
              borderWidth:1}}>
                <Text style={{fontWeight:'bold',fontSize:40}}>E</Text>
                </View>
                <View style={{backgroundColor:'lightblue',width:50,height:50,
              borderColor:'blue',justifyContent:'center',alignItems:'center',
              borderWidth:1}}>
                <Text style={{fontWeight:'bold',fontSize:40}}>S</Text>
                </View>
                <View style={{backgroundColor:'lightblue',width:50,height:50,
              borderColor:'blue',justifyContent:'center',alignItems:'center',
              borderWidth:1}}>
                <Text style={{fontWeight:'bold',fontSize:40}}>P</Text>
                </View>
                <View style={{backgroundColor:'lightblue',width:50,height:50,
              borderColor:'blue',justifyContent:'center',alignItems:'center',
              borderWidth:1}}>
                <Text style={{fontWeight:'bold',fontSize:40}}>L</Text>
                </View>
                <View style={{backgroundColor:'lightblue',width:50,height:50,
              borderColor:'blue',justifyContent:'center',alignItems:'center',
              borderWidth:1}}>
                <Text style={{fontWeight:'bold',fontSize:40}}>E</Text>
                </View>

              
                <TextInput placeholder="Answer .."
                     onChangeText={setUserAns}
                     value={UserAns}
                    
                    selectionColor='gainsboro'
                    style={styles.inputText}
                    />
                      {
                      UserAns=='SLEEP'?(
                        <Text>CORRECT</Text>
                      ):(<Text>WRONG</Text>)
                    }
            
            </View>
        </ProgressStep>
        <ProgressStep label="Second Step">
            <View style={{ alignItems: 'center' }}>
                <Text>This is the content within step 2!</Text>
                <Ionicons name="chevron-back-outline" size={30}
            />
            {/* <TextInput onChangeText={setName} value={name}/>
            <Button title='Speech' onPress={speakGreeting}/>
      <StatusBar style="auto" /> */}
            </View>
        </ProgressStep>
        <ProgressStep label="Third Step">
            <View style={{ alignItems: 'center' }}>
                <Text>This is the content within step 3!</Text>
            </View>
        </ProgressStep>
       
    </ProgressSteps>
</View>
   
  )
}

export default VoiceScreen

const styles = StyleSheet.create({
  inputText:{
    fontSize:18,
    textAlignVertical:'center',
    padding:0,
    height:60,
    color:'#000',
    flex:1

},                
})