import { StyleSheet } from 'react-native'

export default styles = StyleSheet.create({
    card: {
      backgroundColor: '#171C24',
      padding: 10,
      marginBottom: 20,
      borderRadius: 10,
      width: 150
    },
    wrap_img: {
      position: 'relative'
    },
    wrap_tag: {
        flexDirection: 'row',
        marginBottom: 10
    },
    row: {
      flexDirection: 'row',
      gap: 5,
      alignItems: 'center'
    },
    header: {
      color: "#fff",
      fontSize: 20,
      fontWeight: "bold",
    },
    body: {
      color: "rgba(255, 255, 255, 0.5)",
      fontSize: 16,
      marginTop: 10
    },
    image: {
      width: '100%',
      borderRadius: 10
    }
  })