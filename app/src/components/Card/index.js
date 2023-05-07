import { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import themedStyles from './styles';
import { ThemeContext } from '../../context/ThemeContext';

export default function Card(props) {
  const { id, status = 0, descricao } = props;

  const navigation = useNavigation();
  const { theme } = useContext(ThemeContext);

  const styles = themedStyles(theme);

  const titulo = 'Viagem #' + id;

  let status_desc = '';
  let cor_tag = '';

  switch (status) {
    case 0:
      status_desc = 'Em andamento';
      cor_tag = '#F09E00';
      break;
    case 1:
      status_desc = 'Próximas';
      cor_tag = '#F06500';
      break;
    default:
      status_desc = 'Finalizadas';
      cor_tag = '#007DF0';
  }

  const styleTag = {
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: cor_tag,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 8,
    borderBottom: 16,
  };

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('TravelDetails')}
    >
      <View style={[styles.wrap_tag]}>
        <Text style={{ fontSize: 12, color: cor_tag }}>{status_desc}</Text>
      </View>
      <Text style={styles.header}>{titulo}</Text>
      <Text style={styles.body}>{descricao}</Text>
    </TouchableOpacity>
  );
}
