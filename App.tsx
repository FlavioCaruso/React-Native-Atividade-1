import * as React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
} from 'react-native';

import {List} from 'react-native-paper';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPizzaSlice} from '@fortawesome/free-solid-svg-icons';
import {faHamburger} from '@fortawesome/free-solid-svg-icons';
import {faCake} from '@fortawesome/free-solid-svg-icons';
import {faThumbsUp} from '@fortawesome/free-solid-svg-icons';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 600,
    };
  }

  recipes = [
    {
      id: 1,
      title: 'Super Cheeseburguer',
      icon: faHamburger,
      ingredients:
        '1 Pão de Hambuguer\n1 Hambuguer\n2 fatias de Queijo\n2 Folhas de Alface\n1 Fatia de Tomate\n2 Picles\nMaionese a Gosto',
      howTo: 'Grelhe o Hambuguer, Junte tudo dentro do Pão e pronto.',
      image: require('./src/assets/images/cheeseburguer.jpg'),
    },
    {
      id: 2,
      title: 'Pizza de Mussarela',
      icon: faPizzaSlice,
      ingredients:
        '700g de Mussarela\n1 Disco de Pizza pré pronto\nMolho de Tomate',
      howTo:
        'Coloque o molho de tomate no disco de pizza, em seguida acrescente a mussarela e leve ao forno pré aquecido a 180ºC por 25 minutos.',
      image: require('./src/assets/images/mussarela.jpeg'),
    },
    {
      id: 3,
      title: 'Bolo de Chocolate',
      icon: faCake,
      ingredients:
        '4 ovos\n4 colheres de sopa de chocolate em pó\n2 colheres de sopa de manteiga\n3 xícaras de farinha de trigo\n2 xícaras de açucar\n2 colheres de fermento\n1 xícaraa de leite\nmorangos\nchocolates kit kat',
      howTo:
        'Em um liquidificador adicione os ovos, o chocolate em pó, a manteiga, a farinha de trigo, o açúcar e o leite, depois bata por 5 minutos.\n\nAdicione o Fermento e misture com uma espátula.\n\nColoque no forno pré aquecido por 40 minutos.\n\nRetire do forno, espere esfriar e decore com os chocolates kit kat e com os morangos.',
      image: require('./src/assets/images/bolo.jpeg'),
    },
  ];

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <StatusBar />
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <View>
            <Image
              source={require('./src/assets/images/banner.jpeg')}
              resizeMode={'cover'}
              style={{width: '100%', height: 200}}
            />
          </View>
          <View style={styles.content}>
            <Text style={styles.title}>Cozinha APP</Text>
            <Text style={styles.subTitle}>Receitas</Text>

            {this.recipes.map((prop, key) => {
              return (
                <List.Accordion
                  title={prop.title}
                  key={key}
                  style={styles.titleList}
                  right={props => <FontAwesomeIcon icon={prop.icon} />}>
                  <View style={styles.recipeView}>
                    <Image
                      resizeMode={'cover'}
                      style={{
                        width: '100%',
                        height: 100,
                        borderRadius: 8,
                      }}
                      source={prop.image}
                    />
                    <Text style={styles.contentTitle}>{prop.title}</Text>
                    <Text style={{fontWeight: 'bold'}}>Ingredientes: </Text>
                    <Text style={styles.contentText}>{prop.ingredients}</Text>
                    <Text style={{fontWeight: 'bold', marginTop: 10}}>
                      Como Preparar:
                    </Text>
                    <Text style={styles.contentText}>{prop.howTo}</Text>
                  </View>
                </List.Accordion>
              );
            })}
          </View>
        </ScrollView>
        <View style={styles.footer}>
          <Text style={{color: 'white'}}>
            Curta nosso APP:
            <Pressable
              onPress={() => this.setState({count: this.state.count + 1})}>
              <FontAwesomeIcon
                style={{color: '#55baed', marginLeft: 10}}
                icon={faThumbsUp}
              />
            </Pressable>
          </Text>
          <Text style={{color: 'white'}}>
            Nosso APP tem {this.state.count} curtidas.
          </Text>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    padding: 10,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  recipeView: {
    padding: 10,
    marginBottom: 20,
    margingRight: 10,
    borderRadius: 8,
    backgroundColor: 'white',
    elevation: 7,
    shadowColor: 'black',
  },
  titleList: {
    backgroundColor: 'white',
    borderRadius: 8,
    marginBottom: 10,
    elevation: 7,
    shadowColor: 'black',
  },
  contentTitle: {
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  contentText: {
    marginTop: 10,
  },
  footer: {
    alignItems: 'center',
    height: 70,
    backgroundColor: '#333232',
    justifyContent: 'space-around',
  },
});

export default App;
