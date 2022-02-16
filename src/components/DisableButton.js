import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '../utils/style';

import { widthPercentageToDP as wp, heightPercentageToDP as hp, } from 'react-native-responsive-screen';

export const DisableButton = ({ ...props }) => {

    return (
        <View style={{ flexGrow: 1, flexDirection: "column", justifyContent: 'flex-end', marginBottom: wp('5%') }}>
            <View style={{ justifyContent: 'center', alignItems: 'center', bgackgroundColor: "red", }}>
                <View style={{ width: wp('70%'), backgroundColor: Colors.DB, padding: wp('4%'), borderRadius: wp('20%') }}>
                    <Text style={{ fontSize: wp('4%'), textAlign: 'center', color: Colors.TC }}>Save</Text>
                </View>
            </View>
        </View>
    )
}

export default DisableButton

const styles = StyleSheet.create({})