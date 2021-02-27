import React, {useState} from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  StyleSheet,
} from 'react-native';

const App = () => {
  const [bgColor, setBgColor] = useState('#1abc9c');

  const changeBG = () => {
    setBgColor(
      `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
        Math.random() * 256,
      )}, ${Math.floor(Math.random() * 256)})`,
    );
  };

  const reset = () => {
    setBgColor('#000000');
  };

  return (
    <>
      <StatusBar backgroundColor={bgColor} />
      <View style={[styles.container, {backgroundColor: bgColor}]}>
        <View>
          <TouchableOpacity onPress={changeBG}>
            <Text style={styles.button}>Tap Here</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={reset}>
            <Text style={styles.button}>Reset</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  button: {
    fontSize: 20,
    padding: 10,
    borderRadius: 5,
    color: '#34495e',
    backgroundColor: '#f39c12',
    margin: 5,
    textAlign: 'center',
  },
});

export default App;
