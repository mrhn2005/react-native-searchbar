import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const HomeScreen = (props) => {
  return (
    <View>
      <Text style={styles.text}>HomeScreen</Text>
      <Button title="List" onPress={() => props.navigation.navigate('List')} />
    </View>
    
    );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
