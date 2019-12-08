import React ,{useState, useEffect} from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import yelp from '../api/yelp';
import { HitTestResultTypes } from 'expo/build/AR';

const ShowResultScreen = ({navigation}) =>{
    const [result, setResult]=useState(null);
    const id=navigation.getParam('id');

    const getResult=async (id) =>{
        const response =await yelp.get(`/${id}`);
        setResult(response.data);
    }

    useEffect(()=>{
        getResult(id);
    }, []);

    if(result==null){
        return null;
    }

    return (
        <View>
            <FlatList
                data={result.photos}
                keyExtractor={photo => photo}
                renderItem={({ item }) => {
                    return <Image style={styles.imagee} source={{uri:item}}  />
                }}
            />
        </View>
    );
};

const styles=  StyleSheet.create({
    imagee: {
        width: 300,
        height: 200
    }
});

export default ShowResultScreen;