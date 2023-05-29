import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  txtHeader: {
    marginTop: 15,
    fontSize: 18,
    fontWeight: 'bold'
  },
  item: {
    paddingVertical: 15,
    borderBottomColor: '#E2E2E2',
    borderBottomWidth: 0.5,
    flexDirection: 'row'
  },
  itemImageContainer: {
    width: 100,
    height: 100,
    borderRadius: 100
  },
  itemImage: {
    flex: 1,
    width: undefined,
    height: undefined
  }
});
export default styles;
