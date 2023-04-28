/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {View,StyleSheet} from 'react-native';

import { Text } from '@rneui/base';
import GeneralSchiam from '../Database/drugname Schima';

import { Lang } from '../mainpage/MainPage';




var Total = 0;
const Calc = () => {
   GeneralSchiam.write(() => {
     GeneralSchiam.objects('process').map(data => {
       if (data.process === "sell") {
        Total = Total + parseInt(data.price) * parseInt(data.quantity);
      }
        
       


         
     });
   });
};

export default function Profit() {
  const [WordTotalProfit, SetWordTotalProfit] = useState('Total Profit');

  const changeWords = () => {
    if (Lang === 'arabic') {
      SetWordTotalProfit('اجمالي البيع');

    }
    if (Lang === 'english') {
      SetWordTotalProfit(' Batch code');

    }
  };
  useEffect(() => {
    changeWords();
  }, []);

  Total=0
  Calc();

  return (
    <View
      style={{
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View style={style_.background}>
        <Text style={{fontSize: 40, color: 'black'}}>{WordTotalProfit}</Text>
        <Text style={{fontSize: 40, color: 'black'}}>{Total}$</Text>
      </View>
    </View>
  );
}

const style_ = StyleSheet.create({
  background:{
   
    marginLeft:10,
    alignContent:'center',
    justifyContent:'center',
    alignItems:'center'
    
  },
  separator:{
    backgroundColor:'black',
    width:'100%',
    height:1,
    marginTop:10,
    marginBottom:10,

  }
});
