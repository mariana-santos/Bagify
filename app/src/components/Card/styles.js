import { StyleSheet } from 'react-native';
import { ColorPalette } from '../../theme';

export default themedStyles = (theme) => {
  const colorPalette = new ColorPalette(theme);

  return StyleSheet.create({
    card: {
      backgroundColor: colorPalette.container,
      padding: 16,
      marginBottom: 20,
      borderRadius: 10,
    },
    header: {
      color: colorPalette.title,
      fontSize: 20,
      fontWeight: 'bold',
    },
    body: {
      color: colorPalette,
      fontSize: 16,
      marginTop: 10,
    },
    wrap_tag: {
      flexDirection: 'row',
      marginBottom: 8,
      alignSelf: 'flex-start',
    },
  });
};
