import React from 'react'
import { View, Text,TextInput,Button} from 'react-native'

export default function ExerciseOne() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View style={{fontWeigth:'Bold',fontSize=16}} >
          <Text>Ingresa tu Nombre y tu Salario</Text>
      </View>
      <View style={{paddingLeft:10}}>        
        <TextInput type='name' keyboardType='default' placeholder="Tu Nombre" style={styles.input}  
                  onEndEditing={(num)=> validar(setA,num.nativeEvent.text)} />
        <TextInput keyboardType='numeric' placeholder="Tu Salario" style={styles.input} 
                  onEndEditing={(num)=> validar(setB,num.nativeEvent.text)} />
      </View>
      <View>      
        <Button
          title="Calcular"
          color="#841584"
          onPress={response}
          />
      </View>
    </View>
  );
}
