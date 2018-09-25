import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { Container, Button } from 'native-base';


export default class App extends React.Component {
  render() {
      return (
      <View style={styles.container}>
        <Text>Hopefully u will still work</Text>
        <Container>
        <Button>
          <Text>
            press me
          </Text>
        </Button>
      </Container>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
