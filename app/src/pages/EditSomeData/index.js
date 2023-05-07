import React from 'react';
import { Button, Text, View } from 'react-native';

// import { Container } from './styles';

const EditSomeData = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>EditSomeData</Text>
      <Button title="Voltar" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default EditSomeData;
