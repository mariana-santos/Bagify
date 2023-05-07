import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  container: {
    backgroundColor: '#0B0E14',
    padding: 20,
  },
  header: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  body: {
    color: 'rgba(255, 255, 255, 0.5)',
    fontSize: 12,
    marginTop: 10,
    textAlign: 'center',
    fontStyle: 'italic',
  },
  wrap_tag: {
    flexDirection: 'row',
    marginBottom: 10,
    justifyContent: 'center',
    marginBottom: 30,
  },
  container_info: {
    backgroundColor: '#28303E',
    borderRadius: 25,
    paddingHorizontal: 30,
    marginTop: 30,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderStyle: 'dotted',
    borderColor: '#CDCECF',
    borderBottomWidth: 1,
    paddingVertical: 30,
  },
  lugar: {
    color: '#fff',
    fontSize: 42,
  },
  lugar_desc: {
    color: '#fff',
    fontSize: 10,
  },
  icon: {
    backgroundColor: '#171C24',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 30,
  },
  image: {
    alignSelf: 'center',
    marginVertical: 35,
  },
  btn: {
    backgroundColor: '#7FB3E2',
    padding: 15,
    borderRadius: 35,
  },
  btn_text: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
