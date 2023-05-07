import React from 'react';
import { Button, Text, View } from 'react-native';

// import { Container } from './styles';

const Settings = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings</Text>
      <Button
        title="Segurança e privacidade"
        onPress={() => navigation.navigate('SecurityAndPrivacy')}
      />
    </View>
  );
};

export default Settings;
