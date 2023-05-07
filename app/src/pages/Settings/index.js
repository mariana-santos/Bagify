import React from 'react';
import { Button, Text, View, TouchableOpacity } from 'react-native';
import { USER_MOCK } from '../../mock/user';

import Icon from 'react-native-vector-icons/Fontisto';
import Icon2 from 'react-native-vector-icons/Foundation';
import Icon3 from 'react-native-vector-icons/AntDesign';

import { ThemeColors } from 'react-navigation';

const Settings = ({ navigation }) => {
  return (
    <View style={{ backgroundColor: ThemeColors.dark.body, height: '100%' }}>
      <Text
        style={{
          color: '#fff',
          fontSize: 24,
          fontWeight: 'bold',
          paddingHorizontal: 20,
          marginTop: 35,
        }}
      >
        Configurações
      </Text>
      <Text
        style={{
          color: '#fff',
          fontSize: 20,
          paddingHorizontal: 20,
          marginTop: 20,
          fontWeight: 'bold',
        }}
      >
        {USER_MOCK.name}
      </Text>
      <Text
        style={{
          color: '#CDCDCD',
          fontSize: 20,
          paddingHorizontal: 20,
          marginTop: 5,
        }}
      >
        {USER_MOCK.phone}
      </Text>

      <Text
        style={{
          color: '#CDCDCD',
          fontSize: 20,
          paddingHorizontal: 20,
          marginTop: 5,
        }}
      >
        {USER_MOCK.email}
      </Text>

      <TouchableOpacity
        style={{
          backgroundColor: '#7FB3E2',
          padding: 15,
          borderRadius: 35,
          margin: 20,
          marginBottom: 48,
        }}
      >
        <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>
          Editar meus dados
        </Text>
      </TouchableOpacity>

      <Text style={{ color: '#fff', paddingHorizontal: 20 }}>
        Precisa de algum cuidado especial para acessar nosso app? Selecione abaixo
      </Text>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: 10,
          flexWrap: 'nowrap',
          margin: 20,
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: '#28303E',
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
            padding: 16,
          }}
        >
          <Text style={{ color: '#CDCDCD', fontSize: 16 }}>Transcrição</Text>
          <Icon3 name="sound" size={24} color="#fff" />
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            backgroundColor: '#28303E',
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
            padding: 16,
          }}
        >
          <Text style={{ color: '#CDCDCD', fontSize: 16 }}>Libras</Text>
          <Icon
            name="fa-american-sign-language-interpreting"
            size={24}
            color="#fff"
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            backgroundColor: '#28303E',
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
            padding: 16,
          }}
        >
          <Text style={{ color: '#CDCDCD', fontSize: 16 }}>Auto-contraste</Text>
          <Icon2 name="contrast" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Settings;
