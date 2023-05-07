import React, { useContext, useState } from 'react';
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  Image,
  TextInput,
  Alert,
} from 'react-native';

import themedStyles from './styles';

import { UserContext } from '../../context/UserContext';
import { ThemeContext } from '../../context/ThemeContext';

import { isFirstAccess } from '../../../App';
import { SafeAreaView } from 'react-navigation';

const Login = ({ navigation }) => {
  const { theme } = useContext(ThemeContext);
  const { user } = useContext(UserContext);
  const styles = themedStyles(theme);

  const [email, setEmail] = useState('j.herman@fiap.com.br');
  const [password, setPassword] = useState('Fiap123!');

  const handleLogin = () => {
    if (user.password !== password || user.email !== email.toLowerCase()) {
      Alert.alert('Nenhum usuário encontrado');
      return;
    }

    if (isFirstAccess) {
      navigation.navigate('Step1');
    } else {
      navigation.navigate('Home');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.brand}>
        <Image
          source={require('../../../assets/vertical-brand.png')}
          style={styles.image}
        />
      </View>

      <View style={styles.form}>
        <Text style={styles.title}>BOAS VINDAS AO BAGIFY.</Text>

        <Text style={styles.label}>E-mail</Text>
        <TextInput style={styles.input} value={email} onChangeText={setEmail} />

        <Text style={styles.label}>Senha</Text>
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <TouchableOpacity
          style={styles.btn}
          onPress={handleLogin}
          onChangeText={setPassword}
        >
          <Text style={styles.btn_text}>Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;
