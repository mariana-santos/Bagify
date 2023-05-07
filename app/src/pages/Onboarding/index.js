import React from 'react';
import { ImageBackground, View, TouchableOpacity, Text } from 'react-native';
import CarouselCards from '../../components/Carousel/CarouselCards';

import styles from './styles';

const Onboarding = ({ navigation }) => {
  return (
    <ImageBackground
      source={require('../../../assets/onboarding.png')}
      style={styles.container}
    >
      <View>
        <View style={{ height: 400 }}>
          <CarouselCards />

          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate('Login')}
          >
            <Text style={styles.btn_text}>Continuar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Onboarding;
