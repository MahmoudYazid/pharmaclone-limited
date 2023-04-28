/* eslint-disable prettier/prettier */
import React, {useState,useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import { Lang } from '../mainpage/MainPage';

export default function TableTitlesForInventory() {
  const [TotalPrice, SetTotalPrice] = useState('Total Price');
  const [DrugName, SetDrugName] = useState('Drug Name');
  const [Quantity, SetQuantity] = useState('Quantity');

  const changeWords = () => {
    if (Lang === 'arabic') {
      SetTotalPrice("السعر الكلي")
      SetDrugName("اسم الدواء")
      SetQuantity('الكميه')
    }
    if (Lang === 'english') {
       SetTotalPrice('Total Price');
       SetDrugName('Drug Name');
       SetQuantity('Quantity');
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
        {TotalPrice}
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
        {Quantity}
      </Text>
    </View>
  );
}
