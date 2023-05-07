import React from 'react';
import { View, Text, Button } from 'react-native';

// import { Container } from './styles';

const Step4 = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Voltar" onPress={() => navigation.goBack()} />
      <Text>Step4</Text>
      <Button title="Salvar" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

export default Step4;
