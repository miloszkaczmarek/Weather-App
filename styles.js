import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  temp:{
  	fontSize: 30,
    fontWeight: 'bold',
    color:'white',
  },
  input: {
  	height: 60,
  	fontSize: 30,
  	textAlign: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    padding:15,
    width:250,
  },
  info:{
  	color: 'white',
  	fontSize: 20,
  	textAlign: 'center',
  },
  more:{
  	fontSize: 22,
  },
  obrazek: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover'
  },
  viewstyles: {
    flex:1,
    textAlign: 'center',
  }
});