import React from 'react';
import { Button, View, Text } from 'react-native';

// import { Container } from './styles';

const Travels = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Travels</Text>

      <Button
        title="Detalhes de uma viagem qualquer"
        onPress={() => navigation.navigate('TravelDetails')}
      />
    </View>
  );
};

export default Travels;
