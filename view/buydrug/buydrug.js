/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import tw from 'twrnc'
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Alert,
  ScrollView,
  Keyboard,
} from 'react-native';

import {TouchableOpacity} from 'react-native';
import { RNCamera } from 'react-native-camera';
import GeneralSchiam from '../Database/drugname Schima';

import {addprocess} from '../Sell Page/SellPage';

import {drugNameJson} from '../DrugNameDb/DrugName';
import SelectDropdown from 'react-native-select-dropdown';

import { Lang } from '../mainpage/MainPage';



export default function BuyDrug() {
const [scanned, setScanned] = useState(false);
  const [cameraOpen, setCameraOpen] = useState(false);
  const [barcodeData, setBarcodeData] = useState('');
  const [drugname, Setdrugname] = useState('');
  const [quantity, Setquantity] = useState('');
  const [unitprice, Setunitprice] = useState('');
  const [Cart_, SetCart] = useState([]);
  const [CompanyList, SetCompanyList] = useState([]);
  const [Selected_Company, SetSelected_Company] = useState([]);
  const [BuyCode, SetBuyCode] = useState('');
  const [DeleteState, SetDeleteState] = useState('');

  const [Suggested_, setSuggested_] = useState('');
  const [Suggested_clicked, setSuggested_clicked] = useState('');
//------------------------------words ----------------

  const [Wordaddtocart, SetWordAddtocart] = useState('Add to cart');
  const [WordDeleteCart, SetWordDeleteCart] = useState('Delete Cart');
  const [WordAddtoInventory, SetWordAddtoInventory] =
    useState('Add to Inventory');
  const [WordDeleteThisItem, SetWordDeleteThisItem] =
    useState('Delete This Item');
  const [WordQuantity, SetWordQuantity] = useState('Quantity');
  const [WordDrugName, SetWordDrugName] = useState('Drug Name');
  const [WordUnitPrice, SetWordUnitPrice] = useState('Unit price');
  const [WordBatchCode, SetWordBatchCode] = useState('Batch Code');
   const [WordSelectCompany, SetWordselectCompany] = useState('select company');
   const [WordCart, SetWordCart] = useState('Cart');
    const [WordReadBarcode, SetWordReadBarcode] = useState('Read Barcode');


  const changeWords = () => {
    if (Lang === 'arabic') {
      SetWordReadBarcode("اقراء البار كود :")
      SetWordBatchCode('رقم الشحنه');
      SetWordAddtocart('اضف الي السله');
      SetWordDeleteCart('احذف كل السله');
      SetWordAddtoInventory('اضف الي المخزن');
      SetWordDeleteThisItem('احذف هذا العنصر');
      SetWordQuantity('الكميه');
      SetWordDrugName('اسم الدواء');
      SetWordUnitPrice('سعر البيع للقطعه');
      SetWordselectCompany('اختر الشركه');
      SetWordCart('السله');
      
    }
    if (Lang === 'english') {
      SetWordReadBarcode("read barcode")
      SetWordBatchCode(' Batch code');
       SetWordAddtocart('Add to cart');
       SetWordDeleteCart('Delete Cart');
       SetWordAddtoInventory('Add to Inventory');
       SetWordDeleteThisItem('Delete This Item');
       SetWordQuantity('Quantity');
       SetWordDrugName('Drug Name');
       SetWordUnitPrice('Unit price');
       SetWordselectCompany('select company');
       SetWordCart('Cart');

    }
  };
  useEffect(() => {
    changeWords();
  }, []);
  
const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    setBarcodeData(data);
    GeneralSchiam.objects('barcode').map((DbData)=>{
      if(DbData.barcode == data){
       
        setSuggested_clicked(DbData.drugname);
        Setdrugname(DbData.drugname)
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



  var alert_ = 0;

  
  // [drugname, quantity, unitprice, Selected_Company, BuyCode],
  const addTodb = () => {
    if(GeneralSchiam.objects('drugs').length>20){
      Alert.alert('you cant add to inventory more than 20 drug you can buy full featured applications in google play')
      return false;
    }
    Cart_.map(CartMapItem => {
      GeneralSchiam.write(() => {
        GeneralSchiam.objects('drugs').map(data => {
          if (data.drugname === CartMapItem[0]) {
            data.quantity = String(
              parseInt(data.quantity) + parseInt(CartMapItem[1]),
            );
            data.price = String(parseInt(CartMapItem[2]));
            alert_ = 1;
          } else {
            alert_ = 0;
          }
        });
      });

      if (alert_ === 0) {
        GeneralSchiam.write(() => {
          GeneralSchiam.create('drugs', {
            drugname: CartMapItem[0],
            quantity: CartMapItem[1],
            price: CartMapItem[2],
          });
        });
      }
      addprocess(
        CartMapItem[0],
        CartMapItem[1],
        CartMapItem[2],
        'buy',
        CartMapItem[3],
        CartMapItem[4],
      );
    });

    Alert.alert('drugs added');
  };

  return (
    <View
      style={{flexDirection: 'column', flex: 1, backgroundColor: 'white'}}
      onTouchMove={() => {
        Keyboard.dismiss();
        closeCamera();
      }}>
        <View style={{ flexDirection: 'column',flex:.4 }}
        onTouchMove={() => {
            Keyboard.dismiss();
          }}>
     
      {cameraOpen && (
        <RNCamera
        style={{flex:1,maxHeight: '50%',width:'100%'}}
          
          onBarCodeRead={scanned ? closeCamera() : handleBarCodeScanned}
          captureAudio={false}
          // Add any other RNCamera props here
        />
        

      )}
   
    </View>
      <View
        style={{
          flexDirection: 'column',
          flex: 1,
          alignContent: 'center',

          height: 100,
        }}>
        <View
          style={{
            flexDirection: 'row',
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center',
            width: '100%',
            backgroundColor: 'black',
          }}>
            <SelectDropdown
          
            defaultButtonText={WordSelectCompany}
            dropdownStyles={style.SelectDropdown}
            search
            searchPlaceHolder="Search For company"
            data={CompanyList}
            onFocus={() => {
              SetCompanyList([]);
              
              GeneralSchiam.objects('company').map(data => {
                SetCompanyList(current => [...current, data.name]);
              });
            }}
            onSelect={e => {
              SetSelected_Company(e);
            }}
          />
          <SelectDropdown
            buttonTextAfterSelection={(selectedItem, index) => {
              if (DeleteState === '') {
                return WordCart;
              } else {
                return selectedItem;
              }
            }}
          
            defaultButtonText={WordCart}
            dropdownStyles={style.SelectDropdown}
            search
            searchPlaceHolder="Cart item"
            data={Cart_}
            onSelect={e => {
              SetDeleteState(e);
            }}
          />
        </View>
  

        <TextInput
          placeholderTextColor="black"
          placeholder={WordBatchCode}
          style={style.SelectDropdown}
          onTouchMove={() => {
            Keyboard.dismiss();
          }}
          onChangeText={e => {
            SetBuyCode(e);
          }}></TextInput>

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
          placeholder={WordDrugName}
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

        <TextInput
          placeholderTextColor="black"
          style={style.textinput}
          placeholder={WordQuantity}
          keyboardType="numeric"
          onChangeText={e => {
            Setquantity(e);
          }}></TextInput>
        <TextInput
          placeholderTextColor="black"
          style={style.textinput}
          placeholder={WordUnitPrice}
          keyboardType="numeric"
          onChangeText={e => {
            Setunitprice(e);
          }}></TextInput>

          
        <ScrollView
          style={tw`flex-1 flex-col  `}>
         
              <TouchableOpacity onPress={openCamera}  
        style={tw`border-2     rounded-xl bg-black  justify-center items-center text-center h-10  m-1`}>
          <Text style={{ color: '#fff', fontWeight: 'bold' }}>{WordReadBarcode} {barcodeData}</Text>
        </TouchableOpacity>
            <TouchableOpacity
              style={tw`border-2 h-10    rounded-xl bg-black  justify-center items-center text-center m-1`}
              onPress={() => {
                if (!Number.isInteger(Number(quantity))) {
                  Alert.alert(quantity);
                  return 0;
                }
                if (Number.isInteger(Number(quantity))) {
                  SetCart(c => [
                    ...c,

                    [drugname, quantity, unitprice, Selected_Company, BuyCode],
                  ]);
                  Alert.alert('Added to cart');
                }
              }}>
              <Text style={tw`text-white w-50 text-center`}>{Wordaddtocart}</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={tw`border-2  h-10   rounded-xl bg-black  justify-center items-center text-center m-1`}
              onPress={() => {
                if (Cart_.length === 0) {
                  Alert.alert('No item in cart');

                  return 0;
                }
                if (Cart_.length > 0) {
                  addTodb();
                }
              }}>
              <Text style={tw`text-white w-50 text-center`}>{WordAddtoInventory}</Text>
            </TouchableOpacity>
        

          
            <TouchableOpacity
              style={tw`border-2  h-10   rounded-xl bg-black  justify-center items-center text-center m-1`}
              onPress={() => {
                SetCart([]);
              }}>
              <Text
                style={tw`text-white w-50 text-center`}
                onPress={() => {
                  SetCart([]);
                }}>
                {WordDeleteCart}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={tw`border-2   h-10  rounded-xl bg-black  justify-center items-center text-center m-1`}
              onPress={() => {
                SetCart([]);
              }}>
              <Text
                style={tw`text-white w-50 text-center`}
                onPress={() => {
                  Cart_.map(item => {
                    if (item[0] === DeleteState[0]) {
                      Cart_.splice(Cart_.indexOf(item), 1);
                      SetDeleteState('');
                    }
                  });
                  Alert.alert('Delete done');
                }}>
                {WordDeleteThisItem}
              </Text>
            </TouchableOpacity>
          
        </ScrollView>
        
      </View>
  
 
    </View>
  );
}
const style = StyleSheet.create({
  
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

  suggestText: {
    fontSize: 17,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 10,
  },
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
  

});
