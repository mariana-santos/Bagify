import { ScrollView, View, SafeAreaView } from 'react-native';
import Header from '../../components/Header';

import styles from './styles';
import Card from '../../components/Card';
import { USER_MOCK } from '../../mock/user';

export default function Travels() {
  return (
    <SafeAreaView>
      <Header nome={USER_MOCK.name} />
      <ScrollView style={styles.container}>
        <View style={styles.cards}>
          <Card id={1} status={0} descricao="Negócios em Frankfurt." />
          <Card id={2} status={2} descricao="Negócios em Frankfurt." />
          <Card id={3} status={1} descricao="Negócios em Frankfurt." />
          <Card id={4} status={0} descricao="Negócios em Frankfurt." />
          <Card id={5} status={0} descricao="Negócios em Frankfurt." />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
