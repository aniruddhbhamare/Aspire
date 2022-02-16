import { View, Text ,Image ,StyleSheet,Dimensions} from 'react-native';
import React from 'react';
import {windowWidth , Colors} from '../utils/style';



export const Dashboard = ({...props}) => (
  
  <View style={[styles.mainContainer, ]}>
      {/* <Header/> */}
  <Text>App</Text>
  {/* {  (this.state.isVisibleSplash === true) ? SplashContent : null  } */}
</View>
  )


  const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      // justifyContent: 'center',
      // alignItems: 'center',
      // // paddingTop: ( Platform.OS === 'ios' ) ? 20 : 0,
      // backgroundColor: Colors.red
    }

  });

