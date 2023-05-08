/* eslint-disable prettier/prettier */
import React,{useState,useEffect} from 'react';
import {View, Text,FlatList, Alert} from 'react-native';


import GeneralSchiam from '../Database/drugname Schima';
import { StyleSheet } from 'react-native';

import tw from'twrnc'



import SelectDropdown from 'react-native-select-dropdown';
import { Lang } from '../mainpage/MainPage';
export default function Proccess() {
  
  const [parameter,setparameter]=useState(['buy','sell'])
  const [SortBy,setSortBy]=useState({data:GeneralSchiam.objects('process').filter(v=>v.process==='buy').sort(item=>item.date),
  
  

})
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
      flexDirection: 'column',
      flex: 1,
      width: '100%',
      alignSelf: 'center',
    }}>
      <View style={tw`text-center justify-center bg-black`}>
               <SelectDropdown
            buttonTextAfterSelection={(e)=>`sort - ${e}`}
            defaultButtonText={'sort-buy'}
            dropdownStyles={style.SelectDropdown}
            search
            searchPlaceHolder="proccess"
            data={parameter}
        
            onSelect={e => {
              setSortBy({
                data:GeneralSchiam.objects('process').filter(v=>v.process===e)
              })
              console.log(SortBy.data)
              
            }}
          />
      </View>
    <FlatList
      style={tw`text-center `}
      data={SortBy.data}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({item, index}) => {
        return (
          <View
          
            style={{
              marginBottom:10,
              display: 'flex',
              flexDirection: 'column',
              borderWidth: 1,
              marginLeft: 1,
              borderColor: 'gray',
            }}
            onTouchEndCapture={()=>{
              Alert.alert('Do you want to delete this' ,'Do you want to delete this',[{
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
              },{
                text: 'OK',
                onPress: () => {
                  GeneralSchiam.write(()=>{
                     // convert inventory
                  if(item.process==='buy'){
                    GeneralSchiam.objects('drugs').map((itemdrug) => {
                    if(itemdrug.drugname === item.drugname){
                      itemdrug.quantity = String(Number(itemdrug.quantity)-Number(item.quantity));
                      
                    }
                  });

                  }
                  if(item.process==='sell'){
                    GeneralSchiam.objects('drugs').map((itemdrug) => {
                    if(itemdrug.drugname === item.drugname){
                      itemdrug.quantity = String(Number(itemdrug.quantity)+Number(item.quantity));
                     
                    }
                  });

                  }
                      
                 


                  })
                  const objectToDelete = GeneralSchiam.objectForPrimaryKey('process', item.id);
                   GeneralSchiam.write(()=>{
                     GeneralSchiam.delete(objectToDelete)

                     Alert.alert('proccess deleted')


                   })
                  //delete proccess
                  

                }
              }])
            }}
            >
            <Text>New Proccess : {item.id}</Text>
            <Text
              style={{
                display: 'flex',
                flexDirection: 'row',
                borderWidth: 1,
                width: '100%',
                flex: 1,
                textAlign: 'center',
                borderColor: 'gray',
                color: 'black',
              }}>{WordTotalPrice}:
              {item.price * item.quantity}
            </Text>
            <Text
              style={{
                display: 'flex',
                flexDirection: 'row',
                borderWidth: 1,
                width: '100%',
                flex: 1,
                textAlign: 'center',
                borderColor: 'gray',
                color: 'black',
              }}>
              {WordCompanyorcustomer}:{item.companyname}
            </Text>
            <Text
              style={{
                display: 'flex',
                flexDirection: 'row',
                borderWidth: 1,
                width: '100%',
                flex: 1,
                textAlign: 'center',
                borderColor: 'gray',
                color: 'black',
              }}>
               {WordBatchCode}:{item.BuyCode}
            </Text>
            <Text
              style={{
                display: 'flex',
                flexDirection: 'row',
                borderWidth: 1,
                width: '100%',
                flex: 1,
                textAlign: 'center',
                borderColor: 'gray',
                color: 'black',
              }}>
              {WordDate}:{item.Date}
            </Text>
            <Text
              style={{
                display: 'flex',
                flexDirection: 'row',
                borderWidth: 1,
                width: '100%',
                flex: 1,
                textAlign: 'center',
                borderColor: 'gray',
                color: 'black',
              }}>
              {wordProccess}:{item.process}
            </Text>
            <Text
              style={{
                display: 'flex',
                flexDirection: 'row',
                borderWidth: 1,
                width: '100%',
                flex: 1,
                textAlign: 'center',
                borderColor: 'gray',
                color: 'black',
              }}>
                {WordDrugName}:{item.drugname}
            </Text>
            <Text
              style={{
                display: 'flex',
                flexDirection: 'row',
                borderWidth: 1,
                width: '100%',
                flex: 1,
                textAlign: 'center',
                borderColor: 'gray',
                color: 'black',
              }}>
              {WordQuantity}:{item.quantity}
            </Text>
          </View>
        );
      }}
    />
    
  </View>
);
}
const style= StyleSheet.create({
  card:{
    flex: 1,
    flexDirection: 'column',
    justifyContent:'center',
    alignItems: 'center',
    borderBottomWidth:1,
    height:'100%',
    backgroundColor:'white',
    marginVertical:10,
    

  
 
    
  },
 
})