import * as React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

import ButtonRed from "./src/component/ButtonRed.jsx"
import ReadJson from "./src/model/Readjson.jsx"

import Teste from "./src/model/teste.jsx"

const instructions = Platform.select({
  ios: `Press Cmd+R to reload,\nCmd+D or shake for dev menu`,
  android: `Double tap R on your keyboard to reload,\nShake or press menu button for dev menu`,
});

export default function App() {
  return (
  <view>  
  outro gato 1
  <ButtonRed>teste</ButtonRed>
  <ReadJson/>
  <Teste />
  

  </view>
  );
}

var request = new XMLHttpRequest();
request.onreadystatechange = (e) => {
  if (request.readyState !== 4) {
    return;
  }

  if (request.status === 200) {
    //console.log('success', request.responseText);
    
  } else {
    console.warn('error');
  }
};

request.open('GET', 'http://localhost:3000/atendimentos');
request.send();


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

