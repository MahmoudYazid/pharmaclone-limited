/* eslint-disable prettier/prettier */
import React, {useState,useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import { Lang } from '../mainpage/MainPage';

export default function TableTitlesAllBarCodeComponant() {
  const [DrugName, SetDrugName] = useState('Drug Name');
  const [WordBarCode, SetWordBarCode] = useState('Quantity');

  const changeWords = () => {
    if (Lang === 'arabic') {
      
      SetDrugName("اسم الدواء")
      SetWordBarCode('الباركود')
    }
    if (Lang === 'english') {
      SetDrugName("Drug name")
      SetWordBarCode('Barcode')
    }
  };
  useEffect(() => {
    changeWords();
  }, []);

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
        {DrugName}
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
        {WordBarCode}
      </Text>
    </View>
  );
}
