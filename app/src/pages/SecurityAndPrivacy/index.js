import React from 'react';
import { Button, Text, View } from 'react-native';

// import { Container } from './styles';

const SecurityAndPrivacy = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>SecurityAndPrivacy</Text>
      <Button
        title="Editar algo, aqui passa o componente"
        onPress={() => navigation.navigate('EditSomeData')}
      />
    </View>
  );
};

export default SecurityAndPrivacy;
