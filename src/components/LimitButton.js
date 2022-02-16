import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp, } from 'react-native-responsive-screen';
import { Colors } from '../utils/style';

const LimitButton = ({ onPress, title
}) => {
  return (
    <View>
      <TouchableOpacity onPress={onPress} style={{ width: wp('25%'), height: wp('9%'), backgroundColor: Colors.PBUC, padding: wp('2.8%'), borderRadius: wp('1%') }}>
        <Text style={{ textAlign: 'center', fontSize: wp('3%'), color: Colors.CC, fontWeight: 'bold' }}>{title}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default LimitButton

const styles = StyleSheet.create({})