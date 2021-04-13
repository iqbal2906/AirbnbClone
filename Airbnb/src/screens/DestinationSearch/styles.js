import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    margin: 20,
    backgroundColor: 'white',
  },
  textInput: {
    fontSize: 20,
    marginBottom: 20,
  },
  inputView: {
    backgroundColor: 'rgba(0,0,0,0)',
    position: 'absolute',
    top: 0,
    left: 5,
    right: 5,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: 'lightgrey',
  },
  iconContainer: {
    backgroundColor: '#e7e7e7',
    padding: 5,
    borderRadius: 10,
    marginRight: 15,
  },
  locationText: {},
});

export default styles;
