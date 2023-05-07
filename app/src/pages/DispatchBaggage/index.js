import React from 'react';
import { View, Text, Button } from 'react-native';

// import { Container } from './styles';

const DispatchBaggage = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Voltar" onPress={() => navigation.goBack()} />
      <Text>DispatchBaggage</Text>
      <Button
        title="Nova mala para despacho"
        onPress={() => navigation.navigate('NewBaggageStep1')}
      />
    </View>
  );
};

export default DispatchBaggage;
