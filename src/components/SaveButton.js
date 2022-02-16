import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import React from 'react';
import { Colors } from '../utils/style';

import { widthPercentageToDP as wp, heightPercentageToDP as hp, } from 'react-native-responsive-screen';
export const SaveButtton = ({ onPress, title, style }) => {

  return (
    <View style={{ flexGrow: 1, flexDirection: "column", justifyContent: 'flex-end', marginBottom: wp('5%') }}>
      <View style={{ justifyContent: 'center', alignItems: 'center', }}>
        <TouchableOpacity onPress={() => { onPress() }} style={{ width: wp('70%'), backgroundColor: Colors.CC, padding: wp('4%'), borderRadius: wp('20%') }}>
          <Text style={{ textAlign: 'center', color: Colors.TC }}>Save</Text>
        </TouchableOpacity>
      </View>
    </View >
  )
}

const styles = StyleSheet.create({});

