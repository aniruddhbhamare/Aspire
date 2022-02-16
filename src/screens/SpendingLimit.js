import { StyleSheet, Text, View, Button, useColorScheme, Image, TouchableOpacity, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp, } from 'react-native-responsive-screen';

import { Colors, style } from '../utils/style';
import { windowWidth, windowHeight } from '../utils/style';
import { SaveButtton } from '../components/SaveButton';
import { DisableButton } from '../components/DisableButton';
import LimitButton from '../components/LimitButton';

const SpendingLimit = ({ route, navigation: { goBack } }) => {

    const [weeklyLimit, setWeeklyLimit] = useState("");
    const [isButtonEnabled, setIsButtonEnabled] = useState(false);

    const updateWeeklyLimit = (amt) => {
        setWeeklyLimit(amt);
        { !isButtonEnabled ? handleButtonEnabled() : null }
    }

    const handleButtonEnabled = () => {
        setIsButtonEnabled(previousState => !previousState);
    }

    const handleSaveButton = () => {
        goBack();
        route.params.updateLimit(weeklyLimit)
    }

    return (
        <View style={{ flex: 1, backgroundColor: Colors.BGC }}>
            <View style={styles.mainContainer}>
                {/* <View style={styles.header}>
                    <View style={styles.headerTextWrapper}>
                    </View>
                    <View>
                        <Image source={require("../assets/Logo.png")} style={styles.headerLogo} />
                    </View>
                </View> */}

                <View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', marginTop: hp('6%'), }}>
                        <View style={styles.headerTextWrapper}>
                            <Text style={styles.myText}>Spending limit</Text>
                        </View>
                    </View>
                </View>

            </View>
            <View style={{ flex: 5, }}>
                <View style={{
                    flex: 5,
                    borderTopLeftRadius: hp('3%'),
                    borderTopRightRadius: hp('3%'),
                    backgroundColor: Colors.TC
                }}>
                    <View style={{
                        width: windowWidth,
                        marginTop: hp('2%'),
                        paddingHorizontal: wp('6%'),
                        // paddingTop: hp('2%'),
                    }}>
                        <View style={{ flexDirection: 'row', marginTop: hp('2%') }}>
                            <Image source={require("../assets/Group2x.png")} style={{ height: wp('7%'), width: wp('7%') }} />
                            <View style={{ marginLeft: wp('2%') }}>
                                <Text style={styles.boldText}>Set a weekly debit spending limit</Text>
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', marginTop: hp('1%'), borderBottomWidth: 1, borderBottomColor: 'lightgray' }}>
                            <View style={{ backgroundColor: Colors.CC, height: hp('3.5%'), width: hp('7%'), alignItems: 'center', borderRadius: hp('1%') }}>
                                <Text style={{ textAlign: 'center', fontSize: hp('2%'), fontWeight: 'bold', color: Colors.TC }}>S$</Text>
                            </View>
                            <Text style={{ fontSize: wp('8%'), fontWeight: 'bold', marginLeft: hp('0.5%') }}> {weeklyLimit}</Text>
                            {/* <Text style={{ marginLeft: hp('0.5%') }}>{weeklyLimit}</Text> */}
                        </View>

                        <View style={{ flexDirection: 'row', marginTop: hp('2%') }}>
                            <Text style={{ color: Colors.TL, fontSize: wp('3%'), }}>Here weekly means the last 7 days - not the calendar week</Text>

                        </View>
                        <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: 'space-between', marginTop: wp('5%'), }}>
                            <LimitButton onPress={() => updateWeeklyLimit("5,000")} title={"S$ 5,000"} />
                            <LimitButton onPress={() => updateWeeklyLimit("10,000")} title={"S$ 10,000"} />
                            <LimitButton onPress={() => updateWeeklyLimit("20,000")} title={"S$ 20,000"} />
                        </View>
                    </View>

                    {isButtonEnabled ?
                        <SaveButtton onPress={handleSaveButton} />
                        :
                        <DisableButton />
                    }

                </View>
            </View >
        </View >


    );
};

export default SpendingLimit;

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        // paddingHorizontal: wp('4%'),
        // paddingTop: hp('4%'),
        marginTop: hp('3%'),
        padding: wp('5%'),
        backgroundColor: Colors.BGC
    },
    header: {
        // backgroundColor: 'red',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    headerTextWrapper: {
        // height: hp('10%'), // 70% of height device screen
        // width: wp('20%')   // 80% of width device screen
    },
    headerLogo: {
        height: wp('8%'),
        width: wp('8%'),
    },
    myText: {
        color: Colors.TC,
        fontSize: hp('3.8%'),  //24 End result looks like the provided UI mockup
        // fontSize: wp('7%'),
        fontWeight: 'bold',
        fontFamily: 'Avenir Next'
    },

    contentText: {
        color: Colors.TC,
        marginTop: hp('5%'),
        fontSize: hp('2.2%'),
        fontFamily: 'Avenir Next'
    },
    number: {
        letterSpacing: wp("1%"),
        fontSize: hp('2.5%'),
        color: Colors.TC
    },
    boldText: {
        fontSize: hp('2.2%'),
    }

});
