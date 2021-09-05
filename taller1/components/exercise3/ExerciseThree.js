import React, { useState } from 'react'
import { StyleSheet, View, Text, TextInput, Button, ToastAndroid } from 'react-native'


function ExerciseThree() {

  const [num1, setNum1] = useState({num: null, color: 'black'});
  const [num2, setNum2] = useState({num: null, color: 'black'});
  const [num3, setNum3] = useState({num: null, color: 'black'});
  const [num4, setNum4] = useState({num: null, color: 'black'});
  const [numbers,setNumbers] = useState([]);
  const [menor,setMenor] = useState(0);
  const [mayor,setMayor] = useState(0);
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
    let errores = 0
    if (isCorrect) {
      errores = 0
      setNumbers([num1.num,num2.num,num3.num,num4.num])
      
      numbers.map(num => { !num ? errores++ : null })
      
      if (errores == 0) {
        setMenor(Math.min.apply(null, numbers))
        setMayor(Math.max.apply(null, numbers))
        if (menor > 10) {
          setMayor(mayor + 10)
        } 
        if (mayor < 50) {
          setMenor(menor - 5)
        }
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
        />
      </View>
      <View style={styles.divider} />
      <Text>
        <Text style={{fontSize:16}}>Números ingresados </Text>
        <Text>{ numbers.map((num) => num).join(' , ') }</Text>
      </Text>
      <Text>{num1.num}</Text>
      <View style={styles.divider} />
      <View style={styles.resultContainer}>
        <Text style={{fontSize:20}}>Menor: {menor}</Text>
        <Text style={{fontSize:20}}>Mayor: {mayor}</Text>
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