import React from 'react';
import { View, Text, Button, Image, TouchableOpacity, ScrollView } from 'react-native';

import { StackActions } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/AntDesign'
import { ThemeColors } from 'react-navigation';

const NewBaggageStep4 = ({ navigation }) => {
  return (
    <View style={{ backgroundColor: ThemeColors.dark.body, height: '100%' }}>
      <Button title="Voltar" onPress={() => navigation.goBack()} />
      <Text style={{color: '#fff', fontSize: 24, fontWeight: 'bold', paddingHorizontal: 20, marginTop: 35}}>Etapa 4</Text>
      <Text style={{fontSize: 16, color: '#CDCECF', padding: 20 }}>E por último, fotos dos tickets da companhia aérea!</Text>

      <View style={{display: 'flex', flexDirection: 'row', gap: 10, flexWrap: 'nowrap', margin: 20}}>
        <View style={{ width: 150 }}>
          <Image source={require('../../../../assets/ticket.jpg')} 
            style={{width: '100%', height: 100, borderRadius: 10}} />     
        </View>

        <TouchableOpacity style={{ width: 150, backgroundColor: '#28303E', borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
          <Icon name="plus" size={50} color="#fff" />    
        </TouchableOpacity>
      </View>

      <TouchableOpacity 
        onPress={() => navigation.dispatch(StackActions.pop(6))}
        style={{backgroundColor: '#7FB3E2', padding: 15, borderRadius: 35, margin: 20}}>
        <Text style={{textAlign: 'center', fontWeight: 'bold' }}>Salvar e finalizar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NewBaggageStep4;