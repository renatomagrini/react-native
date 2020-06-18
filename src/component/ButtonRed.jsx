import React, { Component } from 'react';
import { Text, View , Button} from 'react-native';

/*export default function HelloWorldApp() {
  return (
    <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
      <Text>Hello, world!</Text>
    </View>
  );
}
*/

class ButtonRed extends Component {
  render(){
    return <Button color="red" > teste </Button> 
  }
}

export default ButtonRed
