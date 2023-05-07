import React from 'react';
import { View, Text, Button } from 'react-native';

// import { Container } from './styles';

const TravelDetails = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Voltar" onPress={() => navigation.goBack()} />
      <Text>TravelDetails</Text>
      <Button
        title="Despachar"
        onPress={() => navigation.navigate('DispatchBaggage')}
      />
    </View>
  );
};

export default TravelDetails;
