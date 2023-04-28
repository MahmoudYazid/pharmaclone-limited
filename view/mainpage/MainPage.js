/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
/* eslint-disable space-infix-ops */
/* eslint-disable prettier/prettier */
import React,{useEffect} from 'react'
import {View, Text} from 'react-native';
import LeftSide from './LeftSide/LeftSide';
import RightSide from './RightSide/RightSide';
import Title from './Title/title';
import {NativeModules} from 'react-native';
import GeneralSchiam from '../Database/drugname Schima';

import tw from 'twrnc';
export let Lang='';

export const setLang = () =>{
  if(GeneralSchiam.objects('lang').length===0){
    GeneralSchiam.write(() =>{
       GeneralSchiam.create('lang',{
         lang: 'English',
       });
    })
    
   
    
  Lang = 'English';

  }else{
    Lang = GeneralSchiam.objects('lang')[0].lang;
  }
      
  
} 
export const changelang = () => {
  GeneralSchiam.write(()=>{
    for(let data of  GeneralSchiam.objects('lang')){
       if (data.lang === 'English') {
          data.lang ='arabic';
          Lang='arabic';
          NativeModules.DevSettings.reload();

          break;
          
        }
         if (data.lang === 'arabic') {
           data.lang = 'English';
           Lang = 'English';
           NativeModules.DevSettings.reload();
           break;
         }

    }
    if(GeneralSchiam.objects('lang').length===0){
      GeneralSchiam.create('lang',{
        lang: 'English',
      });
    }
      
  

  })
  
 
}; 

const getbootloader = ()=>{
  
}

export default function MainPage({navigation}) {


   
    
 
   setLang();

 
 

  return (
    <>
      <View style={{flexDirection: 'column', flex: 1}}>
    
        <View
          style={{
          
            flexDirection: 'row',
            flex: 1,
          }}>
          <LeftSide nav={navigation}></LeftSide>
          <RightSide nav={navigation}></RightSide>
        </View>
       


      
       

      </View>
    </>
  );
}
