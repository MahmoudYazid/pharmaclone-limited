/* eslint-disable prettier/prettier */
import React, {useState,useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import { Lang } from '../mainpage/MainPage';

export default function TableTitles() {
  const [WordTotalPrice, SetWordTotalPrice] = useState('Total price');
  const [WordCompanyorcustomer, SetWordCompanyorcustomer] = useState('company/customer');
  const [WordBatchCode, SetWordBatchCode] = useState('Batch code');
  const [WordDate, SetWordDate] = useState('Date');
  const [wordProccess, SetWordProccess] = useState('Proccess');
  const [WordDrugName, SetWordDrugName] = useState('Drug name');
  const [WordQuantity, SetWordQuantity] = useState('Quantity');

  const changeWords = () => {
    if (Lang === 'arabic') {
      SetWordTotalPrice('السعر الاجمالي');
      SetWordCompanyorcustomer('الشركه / الزبون');
      SetWordBatchCode('كود الشحنه');
      SetWordDate('التاريخ');
      SetWordProccess('العمليه');
      SetWordDrugName('اسم الدواء');
      SetWordQuantity('الكميه');
      
    }
    if (Lang === 'english') {
            SetWordTotalPrice('Total price');
            SetWordCompanyorcustomer('company/customer');
            SetWordBatchCode('Batch code');
            SetWordDate('Date');
            SetWordProccess('Proccess');
            SetWordDrugName('Drug name');
            SetWordQuantity('Quantity');
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
          flex: 2,
          textAlign: 'center',
          color: 'black',
          
      
        }}>
        {WordTotalPrice}
      </Text>
      <Text
        style={{
          display: 'flex',
          flexDirection: 'column',
          borderWidth: 1,
          width: '20%',
          flex: 2,
          textAlign: 'center',
          color: 'black',
        }}>
        {WordCompanyorcustomer}
      </Text>
      <Text
        style={{
          display: 'flex',
          flexDirection: 'column',
          borderWidth: 1,
          width: '14%',
          flex: 2,
          textAlign: 'center',
          color: 'black',
        }}>
        {WordBatchCode}
      </Text>
      <Text
        style={{
          display: 'flex',
          flexDirection: 'column',
          borderWidth: 1,
          width: '14%',
          flex: 1.5,
          textAlign: 'center',
          color: 'black',
        }}>
        {WordDate}
      </Text>
      <Text
        style={{
          display: 'flex',
          flexDirection: 'column',
          borderWidth: 1,
          width: '14%',
          flex: 2,
          textAlign: 'center',
          color: 'black',
        }}>
        {wordProccess}
      </Text>
      <Text
        style={{
          display: 'flex',
          flexDirection: 'column',
          borderWidth: 1,
          width: '14%',
          flex: 2,
          textAlign: 'center',
          color: 'black',
        }}>
        {WordDrugName}
      </Text>
      <Text
        style={{
          display: 'flex',
          flexDirection: 'column',
          borderWidth: 1,
          width: '14%',
          flex: 1.5,
          textAlign: 'center',
          color: 'black',
        }}>
        {WordQuantity}
      </Text>
    </View>
  );
}
