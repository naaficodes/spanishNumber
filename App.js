import React from 'react';
import {Text,View,StyleSheet,ScrollView,Image, StatusBar,TouchableOpacity} from 'react-native';
import Sound from 'react-native-sound';

const SoundList=[
  require('./assets/one.wav'),
  require('./assets/two.wav'),
  require('./assets/three.wav'),
  require('./assets/four.wav'),
  require('./assets/five.wav'),
  require('./assets/six.wav'),
  require('./assets/seven.wav'),
  require('./assets/eight.wav'),
  require('./assets/nine.wav'),
  require('./assets/ten.wav')
];

const App=()=>{
  
  const playSound=sound=>{
    const soundVar = new Sound(sound, Sound.MAIN_BUNDLE, (error) => {
      if(error){
        console.log("Not able to play sound");
      }
    });

    setTimeout(()=>{soundVar.play();},1000)

    soundVar.release();
  }

  return (
    <ScrollView style={styles.container}>
      <StatusBar backgroundColor={styles.container.backgroundColor}/>
      <Image style={styles.logo} source={require('./assets/logo.png')} />
      <View style={styles.gridContainer}>
          {SoundList.map((sound,index)=>{
            return(
              <TouchableOpacity key={sound} style={styles.box} onPress={()=>{playSound(sound)}}>
                <Text style={styles.text}>{index+1}</Text>
              </TouchableOpacity>
            )
          })}
      </View>
    </ScrollView>
  )
}

export default App;

const styles=StyleSheet.create({
  container:{
      flex:1,
      backgroundColor:"#1b262c",

  },
  logo:{
    alignSelf:'center',
    marginTop:20
  },
  gridContainer:{
    flex:1,
    margin:5,
    flexDirection:"row",
    flexWrap:"wrap",
    alignItems:"flex-start",
    justifyContent:"space-around"
  },
  box:{
    height:110,
    alignItems:"center",
    justifyContent:"center",
    width:"45%",
    marginVertical:6,
    backgroundColor:"#0f4c75",
    borderRadius:5,
    shadowColor:"#393e46",
    elevation:5

  },
  text:{
    fontSize:50,
    color:"#ff4301"
  }
})