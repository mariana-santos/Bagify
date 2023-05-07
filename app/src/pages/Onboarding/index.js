import React from 'react';
import { StyleSheet, ImageBackground, Button } from 'react-native';
import CarouselCards from '../../components/Carousel/CarouselCards';

const Onboarding = ({ navigation }) => {
  return (
    <ImageBackground
      source={require('../../../assets/onboarding.png')}
      style={styles.container}
    >
      <CarouselCards />
      <Button title="Continuar" onPress={() => navigation.navigate('Login')} />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // height: 100,
    padding: 50,
  },
});

export default Onboarding;
