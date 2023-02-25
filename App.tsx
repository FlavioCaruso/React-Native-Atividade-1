import * as React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

import { List } from 'react-native-paper';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPizzaSlice } from '@fortawesome/free-solid-svg-icons';
import { faHamburger } from '@fortawesome/free-solid-svg-icons';
import { faCake } from '@fortawesome/free-solid-svg-icons';

class App extends React.Component {
  state = {
    expanded: true
  }

  _handlePress = () =>
    this.setState({
      expanded: !this.state.expanded
    });
 

render(){
  return (
    <SafeAreaView>
      <StatusBar/>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        >
        <View >
          <Image source={require('./src/assets/images/banner.jpeg')} 
          resizeMode={'cover'}
          style={{ width: '100%', height: 200 }}
          />
        </View>
        <View style={styles.content}>
        <Text style={styles.title} >Cozinhando com Flávio</Text>
        <Text style={styles.subTitle} >Receitas Disponíveis</Text>

         <List.Accordion
          title="Cheeseburguer"
          style={styles.titleList}
          right={props => <FontAwesomeIcon icon={ faHamburger } />}
          expanded={this.state.expanded}
          onPress={this._handlePress}
        >
          <View style={styles.recipe}>
            <Text>
            Cheeseburguer
            </Text>
          </View>
        </List.Accordion>

        <List.Accordion
          title="Pizza de Mussarela"
          style={styles.titleList}
          right={props => <FontAwesomeIcon icon={ faPizzaSlice } />}
        >
          <View style={styles.recipe}>
            <Text>
            Pizza de Mussarela
            </Text>
          </View>
        </List.Accordion>

        <List.Accordion
          title="Bolo de Chocolate"
          style={styles.titleList}
          right={props => <FontAwesomeIcon icon={ faCake } />}
          
        >
          <View style={styles.recipe}>
            <Text>
            Bolo de Chocolate
            </Text>
          </View>
        </List.Accordion>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
}


const styles = StyleSheet.create({
  content:{
    padding: 10,
  },
  title:{
    fontSize: 24,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10
  },
  subTitle:{
    fontSize: 18,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10
  },
  titleList:{
    backgroundColor: "white",
    borderRadius: 8,
    marginBottom: 10,
    elevation: 7,
    shadowColor: 'black',
    },
    recipe:{
      paddingLeft: 10,
      paddingBottom: 10,
      paddingRight: 10
    }
});


export default App;
