import React, { Component } from 'react';
import {
  View,
  Text,
  StatusBar
} from 'react-native';
import MenuUtama from './Components/MenuUtama';
import MenuGame from './Components/MenuGame';
import MenuBerita from './Components/MenuBerita';
import MenuHits from './Components/MenuHits';

function Header(props){
  return(
    <Text>Halaman Header</Text>
  );
}

const Footer = (props) => {
  return(
    <Text>Footer {props.foot}</Text>
  );
}

class App extends Component {
  render(){
    return(
      <>
        <View>
          <Header />
          <MenuUtama />
          <MenuGame />
          <MenuBerita />
          <MenuHits />
          <Footer foot="@Niomic" />
        </View>
      </>
    );
  }
}

export default App;
