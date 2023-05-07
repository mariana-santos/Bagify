import React from 'react';
import { View, Text, Button } from 'react-native';

// import { Container } from './styles';

const NewBaggageStep4 = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Voltar" onPress={() => navigation.goBack()} />
      <Text>NewBaggageStep3</Text>
      <Button
        title="Próximo"
        onPress={() => navigation.navigate('NewBaggageStep4')}
      />
    </View>
  );
};

export default NewBaggageStep4;
