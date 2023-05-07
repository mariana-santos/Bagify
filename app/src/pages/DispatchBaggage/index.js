import React, { useContext } from 'react';
import {
  ScrollView,
  Text,
  Button,
  TouchableOpacity,
  View,
  SafeAreaView,
} from 'react-native';
import styles from '../TravelDetails/styles';

import Card from '../../components/CardMala';

import { ThemeContext } from '../../context/ThemeContext';
import { ThemeColors } from 'react-navigation';

const DispatchBaggage = ({ navigation }) => {
  return (
    <SafeAreaView>
      <ScrollView
        style={{ backgroundColor: ThemeColors.dark.body }}
        contentContainerStyle={{
          paddingVertical: 50,
        }}
      >
        <Text style={styles.header}>
          Caso queira reutilizar a imagem de uma mala já cadastrada, selecione abaixo
          ou cadastre uma nova mala.
        </Text>

        <Text style={{ fontSize: 16, color: '#CDCECF', padding: 20 }}>
          Malas cadastradas anteriormente:
        </Text>

        <View
          style={{ padding: 20, flexDirection: 'row', flexWrap: 'wrap', gap: 10 }}
        >
          <Card status={0} descricao="Mala da Diane" cor="branco" corRgb="#fff" />

          <Card
            status={0}
            descricao="Mala da Juliana"
            cor="laranja"
            corRgb="#E85602"
          />

          <Card
            status={0}
            descricao="Mala de remédios"
            cor="azul"
            corRgb="#4E5FFC"
          />

          <Card
            status={2}
            descricao="Mala de presentes"
            cor="verde"
            corRgb="#28CD39"
          />

          <Card
            status={2}
            descricao="Mala do Roberto"
            cor="vermelho"
            corRgb="#920A0A"
          />

          <Card status={2} descricao="Mala do Pedro" cor="prata" corRgb="#4D5661" />
        </View>

        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('NewBaggageStep1')}
        >
          <Text style={styles.btn_text}>Nova mala para despacho</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DispatchBaggage;
