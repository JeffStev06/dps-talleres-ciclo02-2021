import React, { useEffect, useState } from "react";
import { View, Text, TextInput, StyleSheet, Button, ToastAndroid } from "react-native";

export default function ExerciseFour() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [x, setX] = useState(0);

  const validar = (setNumber, valor) => {
	  if (valor == "") {
      setNumber(parseInt(0));
    } else {
      setNumber(parseInt(valor));
    }
  };
  
  const showToast = () => {
    ToastAndroid.show("No es posible dividir entre cero", ToastAndroid.SHORT);
  };

  const response = () => {
    if (b == 0) {
      showToast();
      setX("⛔");
    } else {
      setX(a / b);
    }
  };

  return (
    <View style={{ backgroundColor: "white", flex: 1, alignItems: "center" }}>
      <View style={{ padding: 20 }}>
        <Text style={{ fontSize: 16 }}>División de dos números</Text>
      </View>
      <View style={{ paddingLeft: 10 }}>
        <TextInput
          keyboardType="numeric"
          placeholder="Primer número"
          style={styles.input}
          onChangeText={(num) => validar(setA, num)}
        />
        <TextInput
          keyboardType="numeric"
          placeholder="Segundo número"
          style={styles.input}
          onChangeText={(num) => validar(setB, num)}
        />
      </View>
      <View>
        <Button title="Calcular" color="#841584" onPress={response} />
      </View>
      <Text style={{ fontSize: 16, paddingTop: 40 }}>
        Resultado de la División:
      </Text>
      <View style={{ paddingTop: 40, fontWeigth: "bold" }}>
        <Text style={{ fontSize: 16 }}>
          {a} / {b} = {x}
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
