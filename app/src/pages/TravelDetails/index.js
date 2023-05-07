import {
  ScrollView,
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

import styles from './styles.js';

import Icon from 'react-native-vector-icons/FontAwesome.js';

export default function Viagem({ navigation }) {
  let cor_tag = '#F09E00';

  const styleTag = {
    color: cor_tag,
    borderStyle: 'solid',

    borderColor: cor_tag,
    paddingVertical: 5,
    paddingHorizontal: 10,
    fontSize: 12,
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        <View style={styles.wrap_tag}>
          <Text style={styleTag}>Em andamento</Text>
        </View>

        <Text style={styles.header}>Viagem #01</Text>
        <Text style={styles.body}>Negócios em Madri</Text>

        <View style={styles.container_info}>
          <View style={styles.row}>
            <View style={styles.col}>
              <Text style={styles.lugar}>SP</Text>
              <Text style={styles.lugar_desc}>São Paulo, Brasil</Text>
            </View>

            <View style={styles.col}>
              <Icon name="plane" size={30} color="#28303E" style={styles.icon} />
            </View>

            <View style={styles.col}>
              <Text style={styles.lugar}>ES</Text>
              <Text style={styles.lugar_desc}>Madri, Espanha</Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.col}>
              <Text style={styles.body}>Cia Aérea</Text>
              <Text style={styles.lugar_desc}>GOL</Text>
            </View>

            <View style={styles.col}>
              <Text style={styles.body}>Embarque em</Text>
              <Text style={styles.lugar_desc}>17/05/23 - 16:00</Text>
            </View>
          </View>

          <Image
            source={require('../../../assets/qrcode.png')}
            style={styles.image}
          />
        </View>

        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('DispatchBaggage')}
        >
          <Text style={styles.btn_text}>Despachar malas</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
