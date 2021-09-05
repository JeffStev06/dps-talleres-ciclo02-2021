import React, { useState , useEffect } from 'react'
import { StyleSheet, View, Text, TextInput, Button, ToastAndroid } from 'react-native'


function ExerciseThree() {

  const [num1, setNum1] = useState({num: null, color: 'black'});
  const [num2, setNum2] = useState({num: null, color: 'black'});
  const [num3, setNum3] = useState({num: null, color: 'black'});
  const [num4, setNum4] = useState({num: null, color: 'black'});
  const [menor,setMenor] = useState(0);
  const [mayor,setMayor] = useState(0);
  const [menorReal,setMenorReal] = useState(0);
  const [mayorReal,setMayorReal] = useState(0);
  const [isCorrect, setIsCorrect] = useState(false);

  const validate = (setNum, num) => {
    
    if (num <= 0) {
      setNum({
        num: num,
        color: 'red'
      })
      setIsCorrect(false)
    } else {
      setNum({
        num: num,
        color: 'black'
      })
      setIsCorrect(true)
    }
  }

  const calculate = () => {
    let errores, min, max, maxTemp = 0
    let numbers = []
    console.log("Entraré si: " + isCorrect)
    if (isCorrect) {
      errores = 0
      
      numbers = [num1.num,num2.num,num3.num,num4.num]

      numbers.map(num => { !num ? errores++ : null })

      if (errores == 0) {
        min = Math.min.apply(null, numbers)
        max = Math.max.apply(null, numbers)
        setMayorReal(max)
        setMenorReal(min)
        if (min > 10) {
          console.log("menor > 10 = " + min)
          maxTemp = max + 10
        } else {
          maxTemp = max
        }
        if (max < 50) {
          console.log("mayor < 50 = " + max)
          min = min - 5
        }

        setMayor(maxTemp)
        setMenor(min)

      } else {
        ToastAndroid.show("Debes completar todos los campos", ToastAndroid.SHORT);
      }
    } else {
      ToastAndroid.show("No se permiten 0 o menores", ToastAndroid.SHORT);
    }
  }


  return (
    <View style={styles.container}>
      <Text style={{fontSize:16}}>Ingrese 4 números para su evaluación</Text>
      <View style={styles.inputContainer}>
        <TextInput 
          style={{...styles.input, borderColor: num1.color}}
          onChangeText={(num) => validate(setNum1,num)}
          keyboardType='numeric'
          value={num1.num}
        />
        <TextInput 
          style={{...styles.input, borderColor: num2.color}}
          onChangeText={(num) => validate(setNum2,num)}
          keyboardType='numeric'
          value={num2.num}
        />
        <TextInput 
          style={{...styles.input, borderColor: num3.color}}
          onChangeText={(num) => validate(setNum3,num)}
          keyboardType='numeric'
          value={num3.num}
        />
        <TextInput 
          style={{...styles.input, borderColor: num4.color}}
          onChangeText={(num) => validate(setNum4,num)}
          keyboardType='numeric'
          value={num4.num}
        />
      </View>
      <View>
        <Button
          title='Aceptar'
          style={styles.button}
          onPress={calculate}
          color="#841584"
        />
      </View>
      <View style={styles.divider} />
      <View style={styles.resultContainer}>
        <Text style={{fontSize:16}}>Número Mayor Real </Text>
        <Text style={{fontWeight: 'bold'}}>{mayorReal}</Text>
        <Text style={{fontSize:16}}>Número Menor Real </Text>
        <Text style={{fontWeight: 'bold'}}>{menorReal}</Text>
      </View>
      <View style={styles.divider} />
      <View style={styles.resultContainer}>
        <Text>Resultados según condiciones: </Text>
        <Text style={{fontSize:16}}>Mayor (+10)</Text>
        <Text style={{fontWeight: 'bold'}}>{mayor}</Text>
        <Text style={{fontSize:16}}>Menor (-5)</Text>
        <Text style={{fontWeight: 'bold'}}>{menor}</Text>
      </View>
    </View>
  );
}

export default ExerciseThree;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
  },
  inputContainer: {
    flexDirection: 'row',
    marginTop: 10
  },
  resultContainer: {
    
  },
  input: {
    flex: 1,
    justifyContent: 'center',
    borderBottomWidth: 1,
    marginRight: 10,
    height: 40,
    fontSize: 25,
    marginBottom: 25
  },
  button: {
  },
  divider: {
    height: 1, 
    backgroundColor: '#ccc',
    marginTop: 30,
    marginBottom: 30
  }
});