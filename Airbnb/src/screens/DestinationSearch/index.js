import React, {useState} from 'react';
import {View, TextInput, FlatList, Text} from 'react-native';
import styles from './styles';
import Entypo from 'react-native-vector-icons/Entypo';

import searchResults from '../../../assets/data/search';

const DestinationSearch = () => {
  const [inputText, setInputText] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.inputView}>
        <TextInput
          style={styles.textInput}
          placeholder="Where are you going?"
          onChangeText={setInputText}
        />

        <FlatList
          data={searchResults}
          renderItem={({item}) => (
            <View style={styles.row}>
              <View style={styles.iconContainer}>
                <Entypo name={'location-pin'} size={35} />
              </View>
              <Text style={styles.locationText}>{item.description}</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default DestinationSearch;
