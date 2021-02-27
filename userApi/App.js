import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Axios from 'axios';
import {Button, H1} from 'native-base';

import User from './components/user';

const URL = `https://randomuser.me/api`;

const App = () => {
  const [details, setDetails] = useState(null);

  useEffect(() => {
    fetchDetails();
  }, []);

  const fetchDetails = async () => {
    try {
      const {data} = await Axios.get(URL);
      const details = data.results[0];
      setDetails(details);
    } catch (error) {
      console.log(error);
    }
  };

  if (!details) {
    return (
      <View style={styles.container}>
        <H1 style={{color: '#fff'}}>Loading ...</H1>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={{width: '90%'}}>
        <User details={details} />
        <Button rounded style={styles.button} onPress={() => fetchDetails()}>
          <Text style={{color: '#fff'}}>New User</Text>
        </Button>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#222831',
  },
  button: {
    marginTop: 30,
    paddingHorizontal: 30,
    alignSelf: 'center',
  },
});
