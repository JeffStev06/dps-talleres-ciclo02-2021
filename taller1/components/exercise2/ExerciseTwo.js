import React from 'react'
import { View, Text,TextInput,Button} from 'react-native'

export default function ExerciseOne() {
  const response=()=>{

  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View style={{fontWeigth:'Bold',fontSize:16}} >
          <Text>Ingresa tu Nombre y tu Salario</Text>
      </View>
      <View style={{paddingLeft:10}}>        
        <TextInput type='name' keyboardType='default' placeholder="Tu Nombre" style={styles.input}  
                   />
        <TextInput keyboardType='numeric' placeholder="Tu Salario" style={styles.input} 
                   />
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
