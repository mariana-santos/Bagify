import React from 'react'
import { View, Text, StyleSheet, Dimensions, Button } from "react-native"
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export const SLIDER_WIDTH = Dimensions.get('window').width + 100
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8)

const renderItem = ({ item }) => (
    <View style={styles.container}>
      <Text style={styles.header}>{item.titulo}</Text>
      <Text style={styles.body}>{item.body}</Text>
    </View>
  );

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(11, 14, 20, 0.8)',
    borderRadius: 8,
    width: ITEM_WIDTH,
    elevation: 7,
    padding: 40,
    color: '#fff'
  },
  header: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
  },
  body: {
    color: "#fff",
    fontSize: 18
  }
})

export default renderItem