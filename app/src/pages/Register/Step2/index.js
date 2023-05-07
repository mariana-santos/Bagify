import React from 'react';
import { View, Text, Button } from 'react-native';

// import { Container } from './styles';

const Step2 = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Voltar" onPress={() => navigation.goBack()} />
      <Text>Step2</Text>
      <Button title="Próximo" onPress={() => navigation.navigate('Step3')} />
    </View>
  );
};

export default Step2;
