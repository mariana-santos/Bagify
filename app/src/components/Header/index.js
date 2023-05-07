import { View, Text } from "react-native"
import styles from './styles'

export default function Header( props ){
    const { nome } = props

    return(
        <View style={styles.container}>
            <Text style={styles.header}>Olá, { nome }</Text>
            <Text style={styles.body}>Tenha um bom dia!</Text>
        </View>
    )
}