/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,Keyboard
} from 'react-native';
import tw from 'twrnc'
import Title from '../mainpage/Title/title';
import { RNCamera } from 'react-native-camera';
import GeneralSchiam from '../Database/drugname Schima';

import { Lang } from '../mainpage/MainPage';

export const addprocess = (
  drugname_param,
  Quantity_param,
  price_param,
  process_param,
  companyname_param,
  BuyCode_param,
) => {
  GeneralSchiam.write(() => {
    GeneralSchiam.create('process', {
      process: String(process_param),
      drugname: String(drugname_param),
      quantity: String(Quantity_param),
      price: String(price_param),
      Date: String(new Date()),
      companyname: String(companyname_param),
      BuyCode: String(BuyCode_param),
    });
  });
};
export default function SellPage() {
  const [scanned, setScanned] = useState(false);
  const [cameraOpen, setCameraOpen] = useState(false);
  const [barcodeData, setBarcodeData] = useState('');
  const [WordSell, SetWordWordSell] = useState('Sell');

  const changeWords = () => {
    if (Lang === 'arabic') {
      SetWordWordSell('بيع ');
      SetWordReadBarcode("اقراء البار كود :")
    }
    if (Lang === 'english') {
      SetWordWordSell('sell');
      SetWordReadBarcode("read barcode")
    }
  };
  useEffect(() => {
    changeWords();
  }, []);

  const [drugname, Setdrugname] = useState('');

  const [Suggested_, setSuggested_] = useState('');
  const [Quantity, setQuantity] = useState(0);
  const [Suggested_clicked, setSuggested_clicked] = useState('');
  const [WordReadBarcode, SetWordReadBarcode] = useState('Read Barcode');
 const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setBarcodeData(data);
    GeneralSchiam.objects('barcode').map((DbData)=>{
      if(DbData.barcode == data){
       
        setSuggested_clicked(DbData.drugname);
        Setdrugname(DbData.drugname);
      }
    })
  
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
  let Price_='';
  let signal=0;
  
  return (
    <View style={{flexDirection: 'column', flex: 1}}>
     
      <View
        style={{flexDirection: 'column', flex: 1, alignContent: 'center'}}
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
          placeholder="drug name"
          style={style.SelectDropdown}
          onChangeText={e => {
            if (Suggested_clicked != '') {
              e == '';
              setSuggested_('');
            }
            Setdrugname(e);

            GeneralSchiam.objects('drugs').map(data => {
              if (
                data.drugname.toLowerCase().substring(0, e.length) ===
                e.toLowerCase()
              ) {
                setSuggested_(data.drugname.toLowerCase());
              }
            });
          }}>
          {Suggested_clicked}
        </TextInput>

  





        <TextInput
          placeholderTextColor="black"
          onTouchMove={() => {
            Keyboard.dismiss();
          }}
          style={style.textinput}
          placeholder="Quantity"
          onChangeText={e => {
            setQuantity(parseInt(e));
          }}></TextInput>

        <TouchableOpacity
           style={tw`border-2 h-10 w-30  justify-center rounded-xl bg-black   text-center m-1 self-center`}
          onPress={() => {
            signal = 0;
            GeneralSchiam.write(() => {
              GeneralSchiam.objects('drugs').map(async data => {
                if (data.drugname === drugname) {
                  signal = 1;
                  if (
                    parseInt(data.quantity) < parseInt(Quantity) ||
                    !Number.isInteger(Number(Quantity))
                  ) {
                    Alert.alert('Quantity Not enough');
                    signal = 0;
                    return false;
                  } else {
                    Price_ = data.price;

                    data.quantity = String(
                      parseInt(data.quantity) - parseInt(Quantity),
                    );
                    Alert.alert('Sell done');
                  }
                }
              });
            });
            if (signal === 1) {
              addprocess(
                drugname,
                Quantity,
                String(Price_),
                'sell',
                'People',
                'Sell Proccess Dosn`t have code',
              );
            } else {
              Alert.alert(
                'No such drug in inventory or you put Float numbers .5,.6...etc ',
              );
            }
          }}>
          <Text style={tw` text-center text-white`}>{WordSell}</Text>
        </TouchableOpacity>
                <TouchableOpacity onPress={openCamera}  
        style={tw`border-2 h-10   rounded-xl bg-black  justify-center items-center text-center m-1 self-center`}>
          <Text style={tw`text-white w-50 text-center`}>{WordReadBarcode} {barcodeData}</Text>
        </TouchableOpacity>
      </View>

      
          <View style={{ flexDirection: 'column',flex:1}}
        onTouchMove={() => {
            Keyboard.dismiss();
          }}>
      {!cameraOpen && (
        <View>

  
</View>

      )}
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
}

const style = StyleSheet.create({
  textinput: {
    color:'black',
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
    color:'black',
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
