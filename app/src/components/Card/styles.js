import { StyleSheet } from 'react-native';
import { ColorPalette } from '../../theme';

export default themedStyles = (theme) => {
  const colorPalette = new ColorPalette(theme);

  return StyleSheet.create({
    card: {
      backgroundColor: colorPalette.background,
      padding: 16,
      marginBottom: 20,
      borderRadius: 10,
    },
    header: {
      color: '#fff',
      fontSize: 20,
      fontWeight: 'bold',
    },
    body: {
      color: 'rgba(255, 255, 255, 0.5)',
      fontSize: 16,
      marginTop: 10,
    },
    wrap_tag: {
      flexDirection: 'row',
      marginBottom: 10,
      borderRadius: 20,
      overflow: 'hidden',
    },
  });
};
