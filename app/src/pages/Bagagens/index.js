import { Text, ScrollView, View } from "react-native";
import Header from "../../components/Header";

import styles from './styles'
import Card from "../../components/CardMala";

export default function Bagagens(){
    return(
        <ScrollView style={styles.container}>
            <Text style={styles.titulo}>Minhas bagagens</Text>

            <View style={styles.cards}>
                <Card
                    status={0}
                    descricao="Mala da Diane"
                    cor="branco"
                    corRgb="#fff"
                />

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

                <Card 
                    status={2}
                    descricao="Mala do Pedro"
                    cor="prata"
                    corRgb="#4D5661"
                />
            </View>
        </ScrollView>
    )
}