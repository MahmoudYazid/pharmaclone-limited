/* eslint-disable prettier/prettier */
/* eslint-disable no-sequences */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {View, Text,Alert,FlatList,StyleSheet} from 'react-native';

import GeneralSchiam from '../Database/drugname Schima';


import TableTitlesForInventory from './InventoryTitle'



export default function Inventory() {
 
let getAllBooks = () => {
  return GeneralSchiam.objects('drugs');
};

 


  return (
    <View
      style={{
        flexDirection: 'column',
        flex: 1,
        width: '100%',
        alignSelf: 'center',
      }}>
      <TableTitlesForInventory></TableTitlesForInventory>

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
                {item.price}
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
                {item.quantity}
              </Text>
            </View>
          );
        }}
      />
    </View>
  );
}
