/* eslint-disable prettier/prettier */
/* eslint-disable quotes */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';


import MainPage from './view/mainpage/MainPage';
import SellPage from './view/Sell Page/SellPage';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Proccess from './view/process/process';
import BuyDrug from './view/buydrug/buydrug';
import Profit from './view/profit/profit';
import Inventory from './view/inventory/inventory';
import About_us from './view/About us/about us';

import AddCompany from './view/add company/Addcompany';
import BarcodeScanner from './view/Add Barcode/AddBarCode';
import AllBarCodeComponant from './view/AllBarCode/AllBarCode';



const Stack = createNativeStackNavigator();
const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={MainPage} />
        <Stack.Screen name="SellPage" component={SellPage} />
        <Stack.Screen name="proccess" component={Proccess} />
        <Stack.Screen name="buydrug" component={BuyDrug} />
        <Stack.Screen name="profit" component={Profit} />
        <Stack.Screen name="inventory" component={Inventory} />
        <Stack.Screen name="about" component={About_us} />
        <Stack.Screen name="addcompany" component={AddCompany} />
        <Stack.Screen name="Addbarcode" component={BarcodeScanner} />
        <Stack.Screen name="allbarcode" component={AllBarCodeComponant} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
