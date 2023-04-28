/* eslint-disable prettier/prettier */
/* eslint-disable no-sequences */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {View, Text,Alert,FlatList,StyleSheet} from 'react-native';

import GeneralSchiam from '../Database/drugname Schima';


import TableTitlesAllBarCodeComponant from './AllBarCodeTitle'



export default function AllBarCodeComponant() {
 
let getAllBooks = () => {
  return GeneralSchiam.objects('barcode');
};

 


  return (
    <View
      style={{
        flexDirection: 'column',
        flex: 1,
        width: '100%',
        alignSelf: 'center',
      }}>
      <TableTitlesAllBarCodeComponant></TableTitlesAllBarCodeComponant>

      <FlatList
        style={{width: '100%', alignSelf: 'center'}}
        data={getAllBooks()}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => {
          return (
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                borderWidth: 0.2,
                marginLeft: 1,
              }}>
        
              <Text
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  borderWidth: 1,
                  width: '14%',
                  flex: 1,
                  textAlign: 'center',
                  color: 'black',
                }}>
                {item.drugname}
              </Text>
              <Text
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  borderWidth: 1,
                  width: '14%',
                  flex: 1,
                  textAlign: 'center',
                  color: 'black',
                }}>
                {item.barcode}
              </Text>
            </View>
          );
        }}
      />
    </View>
  );
}

const style = StyleSheet.create({
  card: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    height: '100%',
    backgroundColor: 'white',
    marginVertical: 10,
  }
});
