import React from 'react';
import { View, Text, Button, Image, TouchableOpacity, ScrollView } from 'react-native';

import { ThemeContext } from '../../../context/ThemeContext';
import { ThemeColors } from 'react-navigation';

import Icon from 'react-native-vector-icons/AntDesign'

const NewBaggageStep2 = ({ navigation }) => {
  return (
    <View style={{ backgroundColor: ThemeColors.dark.body, height: '100%' }}>
      <Button title="Voltar" onPress={() => navigation.goBack()} />
      <Text style={{color: '#fff', fontSize: 24, fontWeight: 'bold', paddingHorizontal: 20, marginTop: 35}}>Etapa 2</Text>
      <Text style={{fontSize: 16, color: '#CDCECF', padding: 20 }}>Hora de tirar fotos das suas malas!</Text>
      <Text style={{fontSize: 16, color: '#CDCECF', padding: 20, fontStyle: 'italic', paddingTop: 0 }}>Lembre-se: essas etapas garantem a sua segurança  para eventuais infortúnios. Dessa forma, garantimos que sua viagem seja mágica do princípio ao fim!</Text>

      <View style={{display: 'flex', flexDirection: 'row', gap: 10, flexWrap: 'nowrap', margin: 20}}>
        <View style={{ width: 150 }}>
          <Image source={require('../../../../assets/mala2.png')} 
            style={{width: '100%', height: 100, borderRadius: 10}} />     
        </View>

        <TouchableOpacity style={{ width: 150, backgroundColor: '#28303E', borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
          <Icon name="plus" size={50} color="#fff" />    
        </TouchableOpacity>
      </View>

      <TouchableOpacity 
        onPress={() => navigation.navigate('NewBaggageStep3')} 
        style={{backgroundColor: '#7FB3E2', padding: 15, borderRadius: 35, alignSelf: 'flex-end', marginRight: 20}}>
        <Icon name="arrowright" size={30} />
      </TouchableOpacity>
    </View>
  );
};

export default NewBaggageStep2;
