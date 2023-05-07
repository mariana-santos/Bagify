import styles from "./styles"

import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';

export default function Card( props ){
    const { id, status = 0, descricao } = props;
    const navigation = useNavigation();

    const titulo = 'Viagem #' + id;
    
    let status_desc = '';
    let cor_tag = ''

    switch (status) {
        case 0:
            status_desc = 'Em andamento'
            cor_tag = "#F09E00"
            break;
        case 1:
            status_desc = 'Próximas'
            cor_tag = "#F06500"
            break;
        default:
            status_desc = 'Finalizadas'
            cor_tag = "#007DF0"
    }

    const styleTag = {
        'borderRadius': 40,
        'color': cor_tag,
        'borderStyle': 'solid',
        'borderWidth': 1,
        'borderColor': cor_tag,
        'paddingVertical': 5,
        'paddingHorizontal': 10,
        'fontSize': 8 
    }

    return(
        <TouchableOpacity 
            style={styles.card}
            onPress={() => navigation.navigate('Viagem')}>
            <View style={styles.wrap_tag}>
                <Text style={styleTag}>{status_desc}</Text>
            </View>
            <Text style={styles.header}>{titulo}</Text>
            <Text style={styles.body}>{descricao}</Text>
        </TouchableOpacity>
    )
}