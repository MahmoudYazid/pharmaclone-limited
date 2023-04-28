/* eslint-disable prettier/prettier */
import React, {useState,useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Platform} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { Lang } from '../MainPage';
import tw from 'twrnc'
export default function LeftSide({nav}) {
     const [WordBuyDrug, SetWordBuyDrug] = useState('Buy Drug');
     const [WordSellDrug, SetWordSellDrug] = useState('Sell Drug');
     const [WordInventory, SetWordInventory] = useState('Inventory');
     const [WordAddCompany, SetWordAddCompany] = useState('AddCompany');
    const [WordAddbarcode,setWordAddbarcode]=useState('Add Barcode');
    
    const [WordActivate,setWordActivate]=useState('activate');
    
     const changeWords = () => {

       if (Lang === 'arabic') {
        setWordActivate('تفعيل الحساب')
         SetWordBuyDrug('شراء دواء');
         SetWordSellDrug('بيع دواء');
         SetWordInventory('المخزن');
         SetWordAddCompany('اضافه مورد');
         setWordAddbarcode('اضافه باركود');
       }
       if (Lang === 'english') {
        setWordActivate('active account ')
        setWordAddbarcode('add barcode');
        
         SetWordBuyDrug('Buy Drug');
         SetWordSellDrug('Sell drug');
         SetWordInventory('Inventory');
         SetWordAddCompany('Add company');
        
       }
     };
     useEffect(() => {
       changeWords();
     }, []);
  
  return (
    <View style={tw` flex-1 bg-white w-50 flex-col  items-center justify-center text-black`}>
      <TouchableOpacity
        style={tw`flex-2 w-50 h-50 bg-white justify-center text-black`}
        onPress={() => {
          
          

          nav.navigate('buydrug');
        }}>
        <AntDesign
          style={tw`text-center text-black`}
          name="pluscircle"
          size={50}
          onPress={() => {
            
            

            nav.navigate('buydrug');
          }}></AntDesign>
        <Text
          style={tw`text-center text-black`}
          onPress={() => {
            
            

            nav.navigate('buydrug');
          }}>
          {WordBuyDrug}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={tw`flex-2 w-50 h-50 bg-white  justify-center text-black`}
        onPress={() => {
          
          

          nav.navigate('SellPage');
        }}>
        <AntDesign
          style={tw`text-center text-black`}
          name="shoppingcart"
          size={50}
          onPress={() => {
            
            

            nav.navigate('SellPage');
          }}></AntDesign>
        <Text
          style={tw`text-center text-black`}
          onPress={() => {
            
            

            nav.navigate('SellPage');
          }}>
          {WordSellDrug}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={tw`flex-2 w-50 h-50 bg-white text-black`}
        onPress={() => {
          
          

          nav.navigate('inventory');
        }}>
        <MaterialIcons
          style={tw`text-center text-black `}
          name="storage"
          size={50}
          onPress={() => {
            
            

            nav.navigate('inventory');
          }}></MaterialIcons>
        <Text
          style={tw`text-center text-black`}
          onPress={() => {
            
            

            nav.navigate('inventory');
          }}>
          {WordInventory}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={tw`flex-2 w-50 h-50 bg-white  text-black`}
        onPress={() => {
       

          nav.navigate('addcompany');
        }}>
        <Octicons
          style={tw`text-center text-black`}
          name="organization"
          size={50}
          onPress={() => {
   

            nav.navigate('addcompany');
          }}></Octicons>
        <Text
          style={tw`text-center text-black`}
          onPress={() => {
            
            

            nav.navigate('addcompany');
          }}>
          {WordAddCompany}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={tw`flex-2 w-50 h-50 bg-white  text-black`}
        onPress={() => {
       
          nav.navigate('Addbarcode');
        }}>
        <AntDesign
          style={tw`text-center text-black`}
          name="barcode"
          size={50}
          onPress={() => {
           

            nav.navigate('Addbarcode');
          }}></AntDesign>
        <Text
          style={tw`text-center text-black`}
          onPress={() => {
           

            nav.navigate('Addbarcode');
          }}>
          {WordAddbarcode}
        </Text>
      </TouchableOpacity>


          
    </View>
  );
}


