/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */

import RNRestart from 'react-native-restart'; 
import tw from 'twrnc';
import React,{useState,useEffect} from 'react';
import {
  View, 
  TouchableOpacity,
  Text,
  NativeModules,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import GeneralSchiam from '../../Database/drugname Schima';
import { Alert } from 'react-native';
import { Lang, changelang } from '../MainPage';
import { InterstitialAd, AdEventType, TestIds } from 'react-native-google-mobile-ads';

const DeleteAll =()=>{
    GeneralSchiam.write(() => {
      GeneralSchiam.deleteAll();
      Alert.alert('Delete Done');
    });
}
export default function RightSide({nav}) {
  const keywordads = ['health', 'drugs', 'healthy', 'pharmacy', 'hospitals', 'games', 'pc', 'computers']

  const [WordProccess, SetWordProccess] = useState('All Proccess');
  const [WordProfit, SetWordProfit] = useState('profit');
  const [WordAboutUs, SetAboutUs] = useState('About us');
  const [WordReset, SetWordReset] = useState('Reset');
  const [WordChangeLang, SetWordChangeLang] = useState('change language');
  const [WordAllbarcode,setWordAllbarcode]=useState('All Barcodes');

  const changeWords=()=>{
    if(Lang==='arabic'){
      setWordAllbarcode('كل الاكواد')
        SetWordProccess('كل العمليات');
        SetWordProfit('المبيعات');
        SetAboutUs('تواصل معنا');
        SetWordReset('اعاده ضبط المصنع');
        SetWordChangeLang('تغيبير اللغه');

    }
        if (Lang === 'english') {
          setWordAllbarcode('All barcodes')
          SetWordProccess('All Proccess');
          SetWordProfit('profit');
          SetAboutUs('About us');
          SetWordReset('Reset');
          SetWordChangeLang('change language');
        }
  
  }


  

  useEffect(() => {
    changeWords();
   
   

    
      
    
 
 
  },[]);

  const duration = 20000;

  
  return (
    <View style={tw`flex-1 bg-white w-50 flex-col   justify-center text-black`}>
      <View style={tw`flex-2 w-50 h-50 bg-white justify-center text-black `}>
        <TouchableOpacity
          style={tw`flex-2 w-50 h-50 bg-white justify-center text-black`}
          onPress={  () => {
         
            const interstitial = InterstitialAd.createForAdRequest('ca-app-pub-1373720375820476/2677074463', {

              keywords: keywordads
            });
            interstitial.load();
            setTimeout(() => {


              interstitial.show();
            }, duration);
              nav.navigate('profit');
          
          }}>
          <FontAwesome
            style={tw`text-center text-black`}
            name="money"
            size={50}
            onPress={ () => {
         
              const interstitial = InterstitialAd.createForAdRequest('ca-app-pub-1373720375820476/2677074463', {

                keywords: keywordads
              });
              interstitial.load();
              setTimeout(() => {


                interstitial.show();
              }, duration);

                nav.navigate('profit');
            }}></FontAwesome>
          <Text
            style={tw`text-center text-black`}
            onPress={ () => {
            
              const interstitial = InterstitialAd.createForAdRequest('ca-app-pub-1373720375820476/2677074463', {

                keywords: keywordads
              });
              interstitial.load();
              setTimeout(() => {


                interstitial.show();
              }, duration);
               nav.navigate('profit');
           
            }}>
            {WordProfit}
          </Text>
        </TouchableOpacity>
      </View>

      <View style={tw`flex-2 w-50 h-50 bg-white justify-center text-black`}>
        <TouchableOpacity
          style={tw`flex-2 w-50 h-50 bg-white justify-center text-black`}
          onPress={() => {
            
            const interstitial = InterstitialAd.createForAdRequest('ca-app-pub-1373720375820476/8778135303', {

              keywords: keywordads
            });
            interstitial.load();
            setTimeout(() => {


              interstitial.show();
            }, duration);
            nav.navigate('proccess');
          }}>
          <AntDesign
            name="folder1"
            style={tw`text-center text-black`}
            size={50}
            onPress={() => {
              const interstitial = InterstitialAd.createForAdRequest('ca-app-pub-1373720375820476/8778135303', {

                keywords: keywordads
              });
              interstitial.load();
              setTimeout(() => {


                interstitial.show();
              }, duration);
              
              nav.navigate('proccess');
            }}></AntDesign>
          <Text
            style={tw`text-center text-black`}
            onPress={() => {
              
              const interstitial = InterstitialAd.createForAdRequest('ca-app-pub-1373720375820476/8778135303', {

                keywords: keywordads
              });
              interstitial.load();
              setTimeout(() => {


                interstitial.show();
              }, duration);
              nav.navigate('proccess');
            }}>
            {WordProccess}
          </Text>
        </TouchableOpacity>
      </View>
      <View style={tw`flex-2 w-50 h-50 bg-white justify-center `}>
        <TouchableOpacity
          style={tw`flex-2 w-50 h-50 bg-white justify-center text-black`}
          onPress={() => {
            
            const interstitial = InterstitialAd.createForAdRequest('ca-app-pub-1373720375820476/3798584445', {

              keywords: keywordads
            });
            interstitial.load();
            setTimeout(() => {


              interstitial.show();
            }, duration);
            nav.navigate('about');
          }}>
          <Entypo
            style={tw`text-center text-black`}
            name="users"
            size={50}
            onPress={() => {
              
              const interstitial = InterstitialAd.createForAdRequest('ca-app-pub-1373720375820476/3798584445', {

                keywords: keywordads
              });
              interstitial.load();
              setTimeout(() => {


                interstitial.show();
              }, duration);
              nav.navigate('about');
            }}></Entypo>
          <Text
            style={tw`text-center text-black`}
            onPress={() => {
              
              const interstitial = InterstitialAd.createForAdRequest('ca-app-pub-1373720375820476/3798584445', {

                keywords: keywordads
              });
              interstitial.load();
              setTimeout(() => {


                interstitial.show();
              }, duration);
              nav.navigate('about');
            }}>
            {WordAboutUs}
          </Text>
        </TouchableOpacity>
      </View>

      <View style={tw`flex-2 w-50 h-50 bg-white justify-center items-center text-black`}>
        <TouchableOpacity
          style={tw`flex-2 w-50 h-50 bg-white justify-center text-black`}
          onPress={() => {
            Alert.alert('deleting', 'Are you sure you want to delete', [
              {
                text: 'yes',
                onPress: () => {
                  
                  

                  NativeModules.DevSettings.reload();

                  DeleteAll();
                },
              },
              {text: 'no'},
            ]);
          }}>
          <MaterialCommunityIcons
            style={tw`text-center text-black`}
            name="lock-reset"
            size={50}
            onPress={() => {
              Alert.alert('deleting', 'Are you sure you want to delete', [
                {
                  text: 'yes',
                  onPress: () => {
                    
                    
                    NativeModules.DevSettings.reload();

                    DeleteAll();
                  },
                },
                {text: 'no'},
              ]);
            }}></MaterialCommunityIcons>
          <Text
            style={tw`text-center text-black`}
            onPress={() => {
              Alert.alert('deleting', 'Are you sure you want to delete', [
                {
                  text: 'yes',
                  onPress: () => {
                    
                    

                    NativeModules.DevSettings.reload();
                    DeleteAll();
                  },
                },
                {text: 'no'},
              ]);
            }}>
            {WordReset}
          </Text>
        </TouchableOpacity> 
      </View>
      <View style={tw`flex-2 w-50 h-50 bg-white justify-center text-black `}>
        <TouchableOpacity
          style={tw`flex-2 w-50 h-50 bg-white justify-center text-black`}
          onPress={() => {
            RNRestart.Restart();
            changelang();
          }}>
          <Entypo
            style={tw`text-center text-black`}
            name="language"
            size={50}
            onPress={() => {
              RNRestart.Restart();
              changelang();
            }}></Entypo>
          <Text
            onPress={() => {
              RNRestart.Restart();

              changelang();
            }}
            style={tw`text-center text-black`}>
            {WordChangeLang}
          </Text>
          </TouchableOpacity>
        
      </View>
            <View style={tw`flex-2 w-50 h-50 bg-white justify-center `}>
            <TouchableOpacity
        style={tw`flex-2 w-50 h-50 bg-white justify-center text-black`}
        onPress={() => {
          const interstitial = InterstitialAd.createForAdRequest('ca-app-pub-1373720375820476/9980849412', {

            keywords: keywordads
          });
          interstitial.load();
          setTimeout(() => {


            interstitial.show();
          }, duration);
          nav.navigate('allbarcode');
        }}>
        <AntDesign
          style={tw`text-center text-black`}
          name="qrcode"
          size={50}
          onPress={() => {
           
            const interstitial = InterstitialAd.createForAdRequest('ca-app-pub-1373720375820476/9980849412', {

              keywords: keywordads
            });
            interstitial.load();
            setTimeout(() => {


              interstitial.show();
            }, duration);
            nav.navigate('allbarcode');
          }}></AntDesign>
        <Text
          style={tw`text-center text-black`}
          onPress={() => {
           
            const interstitial = InterstitialAd.createForAdRequest('ca-app-pub-1373720375820476/9980849412', {

              keywords: keywordads
            });
            interstitial.load();
            setTimeout(() => {


              interstitial.show();
            }, duration);
            nav.navigate('allbarcode');
          }}>
          {WordAllbarcode}
        </Text>
      </TouchableOpacity>
        
      </View>
    </View>
  );
}
