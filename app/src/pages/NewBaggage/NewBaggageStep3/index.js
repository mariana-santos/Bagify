import React from 'react';
import { View, Text, Button, Image, TouchableOpacity, ScrollView } from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign'
import { ThemeColors } from 'react-navigation';

const NewBaggageStep3 = ({ navigation }) => {
  return (
    <View style={{ backgroundColor: ThemeColors.dark.body, height: '100%' }}>
      <Button title="Voltar" onPress={() => navigation.goBack()} />
      <Text style={{color: '#fff', fontSize: 24, fontWeight: 'bold', paddingHorizontal: 20, marginTop: 35}}>Etapa 3</Text>
      <Text style={{fontSize: 16, color: '#CDCECF', padding: 20 }}>Hora das fotos de seus documentos de identidade!</Text>
      <Text style={{fontSize: 16, color: '#CDCECF', padding: 20, fontStyle: 'italic', paddingTop: 0 }}>Lembre-se: os documentos permitidos são RG, CPF, Carteira de Motorista ou qualquer documento com foto.</Text>

      <View style={{display: 'flex', flexDirection: 'row', gap: 10, flexWrap: 'nowrap', margin: 20}}>
        <View style={{ width: 150 }}>
          <Image source={require('../../../../assets/rg.png')} 
            style={{width: '100%', height: 100, borderRadius: 10}} />     
        </View>

        <TouchableOpacity style={{ width: 150, backgroundColor: '#28303E', borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
          <Icon name="plus" size={50} color="#fff" />    
        </TouchableOpacity>
      </View>

      <TouchableOpacity 
        onPress={() => navigation.navigate('NewBaggageStep4')} 
        style={{backgroundColor: '#7FB3E2', padding: 15, borderRadius: 35, alignSelf: 'flex-end', marginRight: 20}}>
        <Icon name="arrowright" size={30} />
      </TouchableOpacity>
    </View>
  );
};

export default NewBaggageStep3;
