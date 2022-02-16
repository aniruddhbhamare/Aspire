import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import React from 'react';
import { windowWidth, Colors } from '../utils/style';
import { heightPercentageToDP } from 'react-native-responsive-screen';

import { widthPercentageToDP as wp, heightPercentageToDP as hp, } from 'react-native-responsive-screen';
export const SplashScreen = ({ ...props }) => (
  <View style={styles.mainContainer}>

    <View style={{ height: hp("20%"), width: hp("40%"), backgroundColor: "red", alignSelf: 'center', position: 'absolute' }}>

    </View>

  </View>
)

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1.8,
    borderTopLeftRadius: hp('3%'),
    borderTopRightRadius: hp('3%'),
    backgroundColor: Colors.TC

  },
  test: {
    textAlign: 'center'
  }
});

