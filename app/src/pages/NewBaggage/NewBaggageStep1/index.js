import React, { useContext } from 'react';
import { View, Text, Button, TextInput, TouchableOpacity } from 'react-native';

import { ThemeContext } from '../../../context/ThemeContext';
import { ThemeColors } from 'react-navigation';

import Icon from 'react-native-vector-icons/AntDesign'

const NewBaggageStep1 = ({ navigation }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <View style={{ backgroundColor: ThemeColors.dark.body, height: '100%' }}>
      <Button title="Voltar" onPress={() => navigation.goBack()} />
      <Text style={{color: '#fff', fontSize: 24, fontWeight: 'bold', paddingHorizontal: 20, marginTop: 35}}>Etapa 1</Text>
      <Text style={{fontSize: 16, color: '#CDCECF', padding: 20 }}>Especificações da mala:</Text>

      <Text style={{ fontSize: 18, color: '#4D5661', paddingHorizontal: 20}}>Peso em (KG)</Text>
      <TextInput style={{ backgroundColor: '#171C24', borderRadius: 5, padding: 10, margin: 20, marginBottom: 30}} />

      <Text style={{ fontSize: 18, color: '#4D5661', paddingHorizontal: 20}}>Descrição (opcional)</Text>
      <TextInput style={{ backgroundColor: '#171C24', borderRadius: 5, padding: 10, margin: 20, marginBottom: 30}} />

      <Text style={{ fontSize: 18, color: '#4D5661', paddingHorizontal: 20}}>Cor predominante</Text>
      <TextInput style={{ backgroundColor: '#171C24', borderRadius: 5, padding: 10, margin: 20, marginBottom: 30}} />

      <TouchableOpacity 
        onPress={() => navigation.navigate('NewBaggageStep2')} 
        style={{backgroundColor: '#7FB3E2', padding: 15, borderRadius: 35, alignSelf: 'flex-end', marginRight: 20}}>
        <Icon name="arrowright" size={30} />
      </TouchableOpacity>
    </View>
  );
};

export default NewBaggageStep1;
