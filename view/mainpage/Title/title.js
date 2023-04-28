/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text} from 'react-native';
import {NativeRouter, Route, Link} from 'react-router-native';
import tw from 'twrnc'
export default function Title() {
  return (
    <View style={tw`w-100`}>
      <Text style={tw`text-center text-3xl  `}>PharmaClone</Text>
    </View>
  );
}
