import React, { useEffect, useState } from 'react'
import { View, Text, TextInput,Image,StyleSheet,Button,ToastAndroid} from 'react-native'

export default function ExerciseOne() {
  const [a,setA]=useState(0);
  const [b,setB]=useState(0);
  const [x,setX]=useState(0);

  const validar=(setNumber, valor)=>{  
    if (valor == "") {
      setNumber(parseInt(0))
    }else{      
      setNumber(parseInt(valor))
    }
  }

  const response=() =>{
    
    setX(a*b)

  }
  
  return (
    <View style={{backgroundColor:'white', flex: 1, alignItems: 'center'}} >
      <View style={{padding:20}}>
        <Text style={{fontSize:16}} >Multiplicación de dos números</Text>
      </View>
     <View style={{paddingLeft:10}}>        
        <TextInput keyboardType='numeric' placeholder="Primer número" style={styles.input}  
                  onChangeText={(num)=> validar(setA,num)} />
        <TextInput keyboardType='numeric' placeholder="Segundo número" style={styles.input} 
                  onChangeText={(num)=> validar(setB,num)} />
      </View>
      <View>      
        <Button
          title="Calcular"
          color="#841584"
          onPress={response}
          />
      </View>
      <Text style={{fontSize:16,paddingTop:40}} >Resultado de la Multiplicación:</Text>
      <View style={{paddingTop:40,fontWeigth:'bold'}}>      
        <Text style={{fontSize:16}} >{a} x {b} = {x}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width:200
  },
  formula:{
    height:150,
    width:300
  }
});