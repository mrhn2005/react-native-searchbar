import React ,{useState} from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import yelp from '../api/yelp';
import SearchBar from '../components/SearchBar';



const SearchScreen = (props) => {
    const [term, setTerm]=useState('');
    const [results, setResults]=useState([]);

    const searchApi =async () =>{
        const response =await yelp.get('/search',{
            params:{
                term,
                limit: 50,
                location: 'san jose'
            }
        });
        setResults(response.data.businesses);
    }

    return (
        <View>
            <SearchBar  
                term={term} 
                onTermChange={(newTerm) => setTerm(newTerm)}
                onTermSubmit={() => searchApi()}
            />
            <Text style={styles.text} >SearchScreen {term} {results.length}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default SearchScreen;
