import React, {useState} from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';

import {
  Text,
  Container,
  Content,
  Header,
  Body,
  Card,
  H1,
  H3,
  Button,
  Title,
} from 'native-base';

import Snackbar from 'react-native-snackbar';
import Icons from './components/Icons';

const itemsArray = new Array(9).fill('empty');

const App = () => {
  const [isCross, setIsCross] = useState(false);
  const [winMessage, setWinMessage] = useState('');

  const changeItem = (itemNumber) => {
    if (winMessage) {
      return Snackbar.show({
        text: winMessage,
        backgroundColor: '#000',
        textColor: '#fff',
      });
    }
    if (itemsArray[itemNumber] === 'empty') {
      itemsArray[itemNumber] = isCross ? 'cross' : 'circle';
      setIsCross(!isCross);
    } else {
      return Snackbar.show({
        text: 'Position is already filled',
        backgroundColor: 'red',
        textColor: '#fff',
      });
    }
    checkIsWinner();
  };

  const reloadGame = () => {
    setIsCross(false);
    setWinMessage('');
    itemsArray.fill('empty', 0, 9);
  };

  const checkIsWinner = () => {
    let winner = '';
    if (
      itemsArray[0] !== 'empty' &&
      itemsArray[2] !== 'empty' &&
      itemsArray[3] !== 'empty' &&
      itemsArray[4] !== 'empty' &&
      itemsArray[5] !== 'empty' &&
      itemsArray[6] !== 'empty' &&
      itemsArray[7] !== 'empty' &&
      itemsArray[8] !== 'empty'
    )
      winner = 'No one';
    else if (
      itemsArray[0] !== 'empty' &&
      itemsArray[0] === itemsArray[1] &&
      itemsArray[0] === itemsArray[2]
    )
      winner = itemsArray[0];
    else if (
      itemsArray[3] !== 'empty' &&
      itemsArray[3] === itemsArray[4] &&
      itemsArray[3] === itemsArray[5]
    )
      winner = itemsArray[3];
    else if (
      itemsArray[6] !== 'empty' &&
      itemsArray[6] === itemsArray[7] &&
      itemsArray[6] === itemsArray[8]
    )
      winner = itemsArray[6];
    else if (
      itemsArray[0] !== 'empty' &&
      itemsArray[0] === itemsArray[3] &&
      itemsArray[0] === itemsArray[6]
    )
      winner = itemsArray[0];
    else if (
      itemsArray[1] !== 'empty' &&
      itemsArray[1] === itemsArray[4] &&
      itemsArray[1] === itemsArray[7]
    )
      winner = itemsArray[1];
    else if (
      itemsArray[2] !== 'empty' &&
      itemsArray[2] === itemsArray[5] &&
      itemsArray[2] === itemsArray[8]
    )
      winner = itemsArray[2];
    else if (
      itemsArray[0] !== 'empty' &&
      itemsArray[0] === itemsArray[4] &&
      itemsArray[0] === itemsArray[8]
    )
      winner = itemsArray[0];
    else if (
      itemsArray[2] !== 'empty' &&
      itemsArray[2] === itemsArray[4] &&
      itemsArray[2] === itemsArray[6]
    )
      winner = itemsArray[2];

    if (winner) {
      setWinMessage(winner + ' won');
    }
  };

  return (
    <Container style={{backgroundColor: '#333945', padding: 5}}>
      <Header>
        <Body>
          <Title>Tic Tac Toe</Title>
        </Body>
      </Header>
      <Content>
        <View style={styles.grid}>
          {itemsArray.map((item, index) => (
            <TouchableOpacity
              style={styles.box}
              key={index}
              onPress={() => changeItem(index)}>
              <Card style={styles.card}>
                <Icons name={item} />
              </Card>
            </TouchableOpacity>
          ))}
        </View>
        {winMessage ? (
          <View>
            <H1 style={styles.message}>{winMessage}</H1>
            <Button onPress={reloadGame} primary block rounded>
              <Text>Reload game</Text>
            </Button>
          </View>
        ) : (
          <H3 style={styles.message}>{isCross ? 'Cross' : 'Circle'} turns</H3>
        )}
      </Content>
    </Container>
  );
};

export default App;

const styles = StyleSheet.create({
  grid: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20,
  },
  box: {
    width: '33%',
    marginBottom: 6,
  },
  card: {
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
  },
  message: {
    textAlign: 'center',
    textTransform: 'uppercase',
    color: '#fff',
    marginTop: 20,
    backgroundColor: '#4652b3',
    paddingVertical: 10,
    marginVertical: 10,
  },
});
