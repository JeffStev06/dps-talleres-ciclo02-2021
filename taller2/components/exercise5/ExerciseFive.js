import React, { useState } from 'react'
import { View,Text, StyleSheet, TextInput, Button } from 'react-native'

export default function ExerciseFive() {
  const [f, setF] = useState(0);
  const [res, setRes] = useState(0);
  const [def, setDef] = useState("");

  const calculate = () => {
    let toCalc = f;
    // Si el ingresado es negativo
    if (toCalc < 0) {
      toCalc = toCalc * -1;
    }
    
    let definition = toCalc;
    let response = toCalc;

    if (toCalc != 0) {
      for (let i = (toCalc-1); i > 0; i--) {
        response = response * i;
        definition = definition + " x "+ i;
      }
    } else {
      response = 1;
    }
    setDef(definition);
    setRes(response);
  }

  return (
    <View style={{ backgroundColor: "white", flex: 1, alignItems: "center" }}>
      <View style={{ padding: 20 }}>
        <Text style={{ fontSize: 16 }}>Factorial de un número</Text>
      </View>
      <View style={{ paddingLeft: 10 }}>
        <TextInput
          keyboardType="numeric"
          placeholder="Número"
          style={styles.input}
          onChangeText={(num) => setF(num)}
        />
      </View>
      <View>
        <Button title="Calcular" color="#841584" onPress={calculate} />
      </View>
      <Text style={{ fontSize: 16, paddingTop: 40 }}>
        Resultado del Factorial: { f }!
      </Text>
      <View style={{ paddingTop: 40, fontWeigth: "bold" }}>
        <Text style={{ fontSize: 16 }}>
          { def } = { res }
        </Text>
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
    width: 200,
  },
  formula: {
    height: 150,
    width: 300,
  },
});