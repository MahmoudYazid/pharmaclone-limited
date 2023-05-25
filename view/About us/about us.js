/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Title from '../mainpage/Title/title';
import { TouchableOpacity } from 'react-native';

import { Linking } from 'react-native';

import tw from 'twrnc'

// Initialize Unity Ads SDK



export default function About_us() {
 
  
 
  return (
    <View style={style_.container}>
      
      <View style={style_.container2}>
        <View style={style_.WordsContainer2}>
          <TouchableOpacity
            style={style_.Facebook}
            onPress={() => {
              Linking.openURL('https://www.facebook.com/RobotikCo');
            }}>
            <Text
              style={tw`text-center text-white`}
              onPress={() => {
                Linking.openURL('https://www.facebook.com/RobotikCo');
              }}>
              facebook
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={style_.Youtube}
            onPress={() => {
              
              Linking.openURL(
                'https://www.youtube.com/channel/UCSm2jP6biBxAIE7Zvpm4JjA',
              );
            }}>
            <Text
              style={tw`text-center text-orange-600  `}
              onPress={() => {
                Linking.openURL(
                  'https://www.youtube.com/channel/UCSm2jP6biBxAIE7Zvpm4JjA',
                );
              }}>
              Youtube
            </Text>
          </TouchableOpacity>
        </View>
      </View>
   
    </View>
  );
}
const style_ = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,

  },
  container2: {
    flexDirection: 'row',
    flex: 1,
    

    
  },
  WordsContainer: {
    flexDirection: 'row',
    flex: 1,
    width: '70%',
    height: '70%',
    marginLeft: 10,

  },
  WordsContainer2: {
    flexDirection: 'column',
    flex: 1,
    width: '70%',
    height: '70%',
  },
  Facebook: {
    borderWidth: 2,
    height: '10%',
    width: '80%',
    borderRadius: 10,
    backgroundColor: '#3b5998',
    

    marginTop: 10,
    alignSelf:'center'
  },
  Youtube: {
       alignSelf:'center',
    borderWidth: 2,
    height: '10%',
    width: '80%',
    
    borderRadius: 10,
    backgroundColor: 'white',
   

    marginTop: 10,
  },
});
