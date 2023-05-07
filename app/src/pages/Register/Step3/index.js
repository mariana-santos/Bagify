import React from 'react';
import { View, Text, Button } from 'react-native';

// import { Container } from './styles';

const Step3 = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Voltar" onPress={() => navigation.goBack()} />
      <Text>Step3</Text>
      <Button title="Próximo" onPress={() => navigation.navigate('Step4')} />
    </View>
  );
};

export default Step3;
