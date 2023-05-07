import { StyleSheet } from 'react-native';
import { ColorPalette } from '../../theme';

export default themedStyles = (theme) => {
  const colorPalette = new ColorPalette(theme);

  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-end',
    },
    btn: {
      backgroundColor: colorPalette.accent,
      padding: 15,
      borderRadius: 35,
      width: '25%',
      marginTop: 8,
    },
    btn_text: {
      fontWeight: 'bold',
      textAlign: 'center',
    },
    brand: {
      paddingVertical: 40,
      alignItems: 'center',
      backgroundColor: '#0C1828',
    },
    form: {
      flex: 1,
      backgroundColor: colorPalette.background,
      padding: 32,
    },
    image: {
      height: 100,
      width: 100,
      resizeMode: 'contain',
    },
    title: {
      textAlign: 'center',
      fontSize: 24,
      color: colorPalette.title,
      paddingHorizontal: 40,
      marginBottom: 24,
    },
    label: {
      fontSize: 16,
      color: colorPalette.text,
      marginBottom: 8,
    },
    input: {
      backgroundColor: colorPalette.container,
      height: 50,
      paddingHorizontal: 16,
      marginBottom: 24,
      borderRadius: 8,
      color: colorPalette.title,
    },
  });
};
