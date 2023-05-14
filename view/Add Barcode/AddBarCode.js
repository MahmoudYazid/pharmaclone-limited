/* eslint-disable prettier/prettier */
/* eslint-disable keyword-spacing */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { useState,useEffect } from 'react';
import { View, Text, TouchableOpacity,TextInput ,StyleSheet,Keyboard,ScrollView,Alert} from 'react-native';
import { RNCamera } from 'react-native-camera';
import { Lang } from '../mainpage/MainPage';
import { drugNameJson } from '../DrugNameDb/DrugName';

import tw from 'twrnc'
import GeneralSchiam from '../Database/drugname Schima';
const BarcodeScanner = () => {
  const [scanned, setScanned] = useState(false);
  const [cameraOpen, setCameraOpen] = useState(false);
  const [barcodeData, setBarcodeData] = useState('');
  const [WordEnter, SetWordEnter] = useState("Enter");
  const [WordReadBarcode, SetWordReadBarcode] = useState('Read Barcode');
   const [WordSelectDrug, SetWordSelectDrug] = useState('Select Drug');
   const [WordDeleteBarCode,setWordDeleteBarCode]=useState('Delete Bar Code');

    const changeWords = () => {
      if (Lang === 'arabic') {
        setWordDeleteBarCode('حذف الباركود')
        SetWordSelectDrug("اختر دواء")
        SetWordEnter("ادخل")
        SetWordReadBarcode("اقراء البار كود :")
      }
      if (Lang === 'english') {
        setWordDeleteBarCode('Delete Bar Code')
        SetWordSelectDrug("select drug")
        SetWordEnter("enter")
        SetWordReadBarcode("read barcode")
      }
    };
    useEffect(() => {
      changeWords();
    }, []);

    const [drugname, Setdrugname] = useState('');

    const [Suggested_, setSuggested_] = useState('');
    
    const [Suggested_clicked, setSuggested_clicked] = useState('');


    
  const handleBarCodeScanned = ({ type, data }) => {

    setScanned(true);
    setBarcodeData(data);
    if(scanned){
      closeCamera()
    }
  };

  const openCamera = () => {
    setCameraOpen(true);
    setScanned(false);
    setBarcodeData('');
  };

  const closeCamera = () => {
    setCameraOpen(false);
  };
  const AddBarCodeFuc=() => {
     
    let findValue_ = false
    GeneralSchiam.objects('barcode').map((findValue)=>{
      if(findValue.barcode === barcodeData){
        Alert.alert('this barcode existed before')
        findValue_=true;
        
      }
    })
    if(findValue_==false){
          GeneralSchiam.write(()=>{
      GeneralSchiam.create('barcode',{
        drugname:drugname,
        barcode:barcodeData

        
      })
    })
    
    Alert.alert('BarCodeSaved')

    }

    

   

  }
  const DeleteBarCodeFuc=() => { 
    
    
    
  GeneralSchiam.write(()=>{
    GeneralSchiam.objects('barcode').map((item)=>{
      if(item.barcode === barcodeData){
        GeneralSchiam.delete(item)
          Alert.alert('barcode deleted')
      }

    });

         

    })
   }

  return (
     <View style={{flexDirection: 'column', flex: 1}}
      onTouchMove={() => {
            Keyboard.dismiss();
            closeCamera();
          }}>
        
        <Text
          onPress={() => {
            setSuggested_clicked(Suggested_);
            Setdrugname(Suggested_);
          }}
          style={style.suggestText}>
          {Suggested_}
        </Text>
        <TextInput
          placeholderTextColor="black"
          onTouchMove={() => {
            Keyboard.dismiss();
          }}
          placeholder={WordSelectDrug}
          style={style.SelectDropdown}
          onChangeText={e => {
            if (Suggested_clicked != '') {
              e == '';
              setSuggested_('');
            }
            Setdrugname(e);

            drugNameJson.map(data => {
              if (
                data.drugName.toLowerCase().substring(0, e.length) ===
                e.toLowerCase()
              ) {
                setSuggested_(data.drugName.toLowerCase());
              }
            });
          }}>
          {Suggested_clicked}
        </TextInput>


       <View style={tw`flex-col flex-1 justify-center`}
        onTouchMove={() => {
            Keyboard.dismiss();
          }}>
     
        <View style={tw`flex-col flex-1  items-center`}> 
        <TouchableOpacity onPress={openCamera}  
        style={tw`border-2 h-10  rounded-xl bg-black  justify-center items-center  m-1`}>
          <Text style={{ color: '#fff', fontWeight: 'bold' }}>{WordReadBarcode} {barcodeData}</Text>
        </TouchableOpacity>

        <TouchableOpacity  
        onPress={()=>DeleteBarCodeFuc()} 
        style={tw`border-2 h-10 w-50   rounded-xl bg-black  justify-center items-center text-center m-1`}><Text style={tw`text-white w-50 text-center`} >{WordDeleteBarCode}</Text></TouchableOpacity>





        <TouchableOpacity  
        onPress={()=>AddBarCodeFuc()} 
        style={tw`border-2 h-10 w-50   rounded-xl bg-black  justify-center items-center text-center m-1`}><Text style={tw`text-white w-50 text-center`} >{WordEnter}</Text></TouchableOpacity>
</View>


   
      {cameraOpen && (
        <RNCamera
        style={{flex:1}}
          
          onBarCodeRead={scanned ? closeCamera() : handleBarCodeScanned}
          captureAudio={false}
          // Add any other RNCamera props here
        />
        

      )}
   
    </View>
     
      </View>

     );
};

const style = StyleSheet.create({
  textinput: {
    borderWidth: 1.5,
    borderColor: 'black',
    borderRadius: 10,
    padding: 10,
    margin: 10,
    backgroundColor: 'white',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    alignContent: 'center',
  },
  SelectDropdown: {
    borderWidth: 1.5,
    borderColor: 'black',
    borderRadius: 10,
    padding: 10,
    margin: 10,
    backgroundColor: 'white',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    alignContent: 'center',
  },

  Youtube: {
    borderWidth: 1,
    height: '10%',
    width: '90%',
    borderRadius: 10,
    backgroundColor: 'black',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',

    marginTop: 5,
  },
  suggestText: {
    fontSize: 17,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 10,
  },
});


export default BarcodeScanner;
