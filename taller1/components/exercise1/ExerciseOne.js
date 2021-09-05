import React, { useEffect, useState } from 'react'
import { View, Text, TextInput,Image,StyleSheet,Button,ToastAndroid} from 'react-native'

export default function ExerciseOne() {


  const [a,setA]=useState(0);
  const [b,setB]=useState(0);
  const [c,setC]=useState(0);
  const [active,setActive]=useState(false);
  const [x1,setX1]=useState(0);
  const [x2,setX2]=useState(0);
  const validar=(setNumber, valor)=>{
    console.log("este es el valor que llega "+valor)
    setNumber(valor)
  }

  const response=() =>{
    if(a<0){
      ToastAndroid.show("El valor de A no puede ser 0", ToastAndroid.SHORT);
    }else{
        let d=d=b*b-4*a*c;
        if(d>0){
          setX1((-b+(Math.sqrt(d)))/(2*a))
          setX2((-b-(Math.sqrt(d)))/(2*a))
          console.log("termine "+x1+" "+x2)
        }else{
          ToastAndroid.show("Raices Imaginarias, no se puede resolver", ToastAndroid.SHORT);
        }
    } 
  }

  
  return (
    <View style={{backgroundColor:'white', flex: 1, alignItems: 'center'}} >
      <View style={{padding:20}}>
        <Text style={{fontSize:16}} >Resolver Ecuación Cuadratica</Text>
      </View>
      <Image source={require('../../assets/formulaGeneral.png')} style={styles.formula} />
      <View style={{paddingLeft:10}}>        
        <TextInput keyboardType='numeric' placeholder="Valor de a" style={styles.input}  
                  onEndEditing={(num)=> validar(setA,num.nativeEvent.text)} />
        <TextInput keyboardType='numeric' placeholder="Valor de b" style={styles.input} 
                  onEndEditing={(num)=> validar(setB,num.nativeEvent.text)} />
        <TextInput keyboardType='numeric' placeholder="Valor de c" style={styles.input}
                    onEndEditing={(num)=> validar(setC,num.nativeEvent.text)} />
      </View>
      <View>      
        <Button
          title="Calcular"
          color="#841584"
          disabled={active}
          onPress={response}
          />
      </View>
      <Text style={{fontSize:16,paddingTop:40}} >Respuestas:</Text>
      <View style={{paddingTop:40,fontWeigth:'bold'}}>      
        <Text style={{fontSize:16}} >X1 = {x1} </Text>
        <Text style={{fontSize:16}} >X2 = {x2} </Text>
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