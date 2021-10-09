import React, { useState, useEffect } from 'react'
import { View, Text,TextInput,Button,StyleSheet} from 'react-native'

export default function ExerciseOne() {
  const [name, setName] = useState('')
  const [salaryB, setSalaryB] = useState(0)
  const [salaryN, setSalaryN] = useState(0)
  const [isss, setIsss] = useState(0)
  const [afp, setAfp] = useState(0)
  const [renta, setRenta] = useState(0)


  useEffect(() => {

    setIsss(salaryB * 0.03)
    setAfp(salaryB * 0.04)
    setRenta(salaryB * 0.05)

  }, [salaryB])

  const response=()=>{
    
    let s = salaryB - isss - afp - renta

    setSalaryN(s)

  }

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text style={{fontWeigth: 'bold', fontSize:16}}>Ingresa tu Nombre y tu Salario</Text>
        <TextInput 
          type='name' 
          style={styles.input}
          keyboardType='default' 
          placeholder="Tu Nombre" 
          onChangeText={(val) => setName(val)}
          value={name}
        />
        <TextInput 
          style={styles.input} 
          keyboardType='numeric' 
          placeholder="Tu Salario" 
          onChangeText={(val) => setSalaryB(val)}
          value={salaryB}
        />
        <Button
          style={styles.button}
          title="Calcular"
          color="#841584"
          onPress={response}
        />
      </View>
      <View style={styles.divider} />
      <View style={styles.containerResult}>
        <Text style={{fontSize: 24}}>Salario de: {name}</Text>
        <Text style={styles.texto}>$ {salaryB} -</Text>
        <Text style={styles.texto}>$ {isss}</Text>
        <Text style={styles.texto}>$ {afp}</Text>
        <Text style={styles.texto}>$ {renta}</Text>
        <Text style={styles.result}> = $ {salaryN}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  form: {
    padding: 25,
  },
  containerResult: {
    padding: 25,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10
  },
  button: {
    margin: 12
  },
  texto: {
    fontSize: 20,
    marginBottom: 5,
    marginTop: 5
  },
  result:{
    borderTopColor: 'gray',
    borderTopWidth: 1,
    fontSize: 20,
    paddingTop: 10,
    marginTop: 10
  },
  divider: {
    height: 1, 
    backgroundColor: '#ccc',
    marginTop: 20,
    marginBottom: 15
  }
});
