import styles from "./styles"

import { View, Text } from 'react-native'
import { Touchable } from 'react-native'

export default function Tag( props ){
    const { texto, isSelected, cor = '#171C24' } = props;

    return(
        <Touchable style={{  }}>{texto}</Touchable>
    )
}