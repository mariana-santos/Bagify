import styles from './styles';

import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Card(props) {
  const { status = 0, descricao, cor, corRgb } = props;
  const navigation = useNavigation();

  let status_desc = '';
  let cor_tag = '';

  switch (status) {
    case 0:
      status_desc = 'Em trânsito';
      cor_tag = '#F09E00';
      break;
    case 1:
      status_desc = 'Despachada';
      cor_tag = '#F06500';
      break;
    default:
      status_desc = 'Entregue';
      cor_tag = '#007DF0';
  }

  const styleTag = {
    borderRadius: 40,
    color: cor_tag,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: cor_tag,
    paddingVertical: 5,
    paddingHorizontal: 10,
    fontSize: 8,
    backgroundColor: '#372400',
    position: 'absolute',
    top: -90,
    left: 10,
  };

  const styleCor = {
    borderRadius: 40,
    color: corRgb,
    backgroundColor: corRgb,
    width: 10,
    height: 10,
  };

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('Viagem')}
    >
      <View style={styles.wrap_img}>
        <Image source={require('../../../assets/mala2.png')} style={styles.image} />
        <View style={styles.wrap_tag}>
          <Text style={styleTag}>{status_desc}</Text>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styleCor}></View>
        <Text style={styles.header}>{cor}</Text>
      </View>
      <Text style={styles.body}>{descricao}</Text>
    </TouchableOpacity>
  );
}
