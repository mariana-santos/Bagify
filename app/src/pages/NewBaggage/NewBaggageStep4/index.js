import React from 'react';
import { View, Text, Button } from 'react-native';

import { StackActions } from '@react-navigation/native';

// import { Container } from './styles';

const NewBaggageStep3 = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Voltar" onPress={() => navigation.goBack()} />
      <Text>NewBaggageStep4</Text>
      <Button
        title="Salvar"
        onPress={() => navigation.dispatch(StackActions.pop(6))}
      />
    </View>
  );
};

export default NewBaggageStep3;
