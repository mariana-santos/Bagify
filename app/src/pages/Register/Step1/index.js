import React from 'react';
import { Button } from 'react-native';
import { View, Text } from 'react-native';

// import { Container } from './styles';

const Step1 = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Voltar" onPress={() => navigation.goBack()} />
      <Text>Step1</Text>
      <Button title="Próximo" onPress={() => navigation.navigate('Step2')} />
    </View>
  );
};

export default Step1;
