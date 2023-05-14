/* eslint-disable prettier/prettier */
import React, {useState,useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';

import GeneralSchiam from '../Database/drugname Schima';
import { Lang } from '../mainpage/MainPage';
import tw from 'twrnc'


export default function AddCompany() {

  const [Company_, SetCompany] = useState('');
  const [WordAddCompany, SetAddCompany] = useState('add company');

  const changeWords = () => {
    if (Lang === 'arabic') {
      SetAddCompany('اضافه شركه ');
    }
    if (Lang === 'english') {
      SetAddCompany('Add company');
    }
  };
  useEffect(() => {
    changeWords();
  }, []);
  var existedSign = 0;

  return (
    <View style={{flexDirection: 'column', flex: 1}}>
   
      <View style={{flexDirection: 'column', flex: 1, alignContent: 'center'}}>
        <TextInput
        placeholderTextColor='black'
          placeholder="Add Company Name"
          style={style.SelectDropdown}
          onChangeText={e => SetCompany(e)}></TextInput>

        <TouchableOpacity
          style={tw`border-2 h-10    rounded-xl bg-black  justify-center items-center text-center m-1 self-center`}
          onPress={async () => {
             
            await GeneralSchiam.objects('company').map(data => {
              if (data.name === Company_) {
                Alert.alert('this company exists before');
                existedSign = 1;
                return 0;
              } else {
                existedSign = 0;
              }
            });
            if (existedSign === 0) {
              GeneralSchiam.write(() => {
                GeneralSchiam.create('company', {
                  name: Company_,
                });
              });
              Alert.alert('Company Added');
            }
          }}>
          <Text style={tw`text-white w-50 text-center`}>{WordAddCompany}</Text>
        </TouchableOpacity>
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
