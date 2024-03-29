import React from 'react';
import { View, TextInput, StyleSheet, Button } from 'react-native';
import {Feather} from '@expo/vector-icons';

const SearchBar = ({term, onTermChange, onTermSubmit}) => {
  return (
    <View style={styles.backgroundStyle}>
        <Feather style={styles.iconStyle} name="search" />
        <TextInput
            autoCapitalize='none'
            autoCorrect={false}
            style={styles.inputStyle} 
            placeholder="Search" 
            value={term}
            onChangeText={(newTerm) => onTermChange(newTerm)}
            onEndEditing={onTermSubmit}
            />
    </View>
    
    );
};

const styles = StyleSheet.create({
  backgroundStyle: {
      backgroundColor: '#f0eeee',
      height: 50,
      borderRadius: 5,
      marginHorizontal: 15,
      marginTop: 15,
      flexDirection: 'row',
      marginBottom: 5
  },
  inputStyle: {
      fontSize: 18,
      flex: 1
  },
  iconStyle: {
      fontSize: 35,
      alignSelf: 'center',
      marginHorizontal: 15
  }
});

export default SearchBar;
