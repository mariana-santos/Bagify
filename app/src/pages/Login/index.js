import React, { useContext } from 'react';
import { View, Text, Button } from 'react-native';

// import { Container } from './styles';

import { ThemeContext } from '../../context/ThemeContext';

import { isFirstAccess } from '../../../App';

const Login = ({ navigation }) => {
  const { theme } = useContext(ThemeContext);

  const handleLogin = () => {
    if (isFirstAccess) {
      navigation.navigate('Step1');
    } else {
      navigation.navigate('Home');
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Login</Text>

      <Text>{JSON.stringify(theme)}</Text>
      <Text>{theme?.accent}</Text>

      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default Login;
