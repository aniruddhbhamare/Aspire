import { StyleSheet, Text, View, Image, ScrollView, Switch, TouchableOpacity, RefreshControl, ActivityIndicator } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'

import { Colors, } from '../utils/style';
import { widthPercentageToDP as wp, heightPercentageToDP as hp, } from 'react-native-responsive-screen';
import { windowWidth, bulletChar } from '../utils/style';
import ProgressBar from 'react-native-progress/Bar';
import NumberFormat from 'react-number-format';
import { addDebitCardData } from '../store/actions/action'
import { Center } from 'native-base';
const Home = ({ navigation }) => {

  const getCardData = useSelector(state => state.DebitCardReducer.cardData);
  const isLoading = useSelector(state => state.DebitCardReducer.isLoading);

  const [isEnabled, setIsEnabled] = useState(false);
  const [limit, setLimit] = useState(null);
  const [isCardDetailsVisible, setCardDetailsVisible] = useState(false);
  const [cardData, setCardData] = useState([]);
  const [cardNumber, setCardNumber] = useState(null);
  const [CVV, setCardCVV] = useState(null);
  const [exp, setCardExp] = useState(null);
  const [spinner, setSpinner] = useState(true);


  const [refreshing, setRefreshing] = useState(false);

  const dispatch = useDispatch();


  let IconPath = isCardDetailsVisible ? require("../assets/Group2370.png") : require("../assets/remove_red_eye-24px.png");
  let Message = isCardDetailsVisible ? "Hide card number" : "Show card number";




  useEffect(() => {
    dispatch(addDebitCardData());
  }, []);



  useEffect(() => {
    if (getCardData && getCardData.length > 0) {
      // setSpinner(false)
      setCardData(getCardData)
      let i = [Math.floor(Math.random() * 10)]
      let CardNumber = getCardData ? getCardData[0][i].CardNumber : null;
      let CVV = getCardData ? getCardData[0][i].CVV : null;
      let exp = getCardData ? getCardData[0][i].exp : null;
      setCardNumber(CardNumber)
      setCardCVV(CVV)
      setCardExp(exp)
      // alert("useEff" + exp)
      // alert(JSON.stringify(isLoading))

    }

    // alert("card Data" + JSON.stringify(getCardData))

    // Safe to add dispatch to the dependencies array
  }, [])


  const onRefresh = () => {
    setRefreshing(true);
    // wait(2000).then(() => setRefreshing(false));
  }


  const handleCardDetails = () => {
    setCardDetailsVisible(previousState => !previousState)
  }

  const updateLimit = (limitValue) => {
    setLimit(limitValue);
  }

  const toggleSwitch = (value) => {
    setIsEnabled(previousState => !previousState);
    !isEnabled ? navigation.navigate('SpendingLimit', { updateLimit }) : null;
  }

  return (
    <>

      {/* <RefreshControl
        refreshing={refreshing}
        onRefresh={onRefresh}
      /> */}
      <View style={{ flex: 1, postion: 'relative', backgroundColor: Colors.BGC }}>

        <View style={styles.mainContainer}>
          <View style={styles.header}>
            <View style={styles.headerTextWrapper}>
              <Text style={styles.myText}>Debit Card</Text>
            </View>
            {/* <View>
            <Image source={require("../assets/Logo.png")} style={styles.headerLogo} />
          </View> */}
          </View>

          <View style={{ marginTop: hp('4%'), }}>
            <Text style={styles.contentText}>Available balance</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', marginTop: hp('1%'), }}>
              <View style={{ backgroundColor: Colors.CC, height: hp('3.5%'), width: hp('7%'), alignItems: 'center', borderRadius: hp('1%') }}>
                <Text style={{ textAlign: 'center', fontSize: hp('2%'), fontWeight: 'bold', color: Colors.TC }}>S$</Text>
              </View>
              <Text style={[styles.myText, { marginLeft: hp('0.5%') }]}> 3,000</Text>
            </View>
          </View>

        </View>




        {/* <ScrollView
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            paddingTop: hp('40%'),
            height: hp('120%'),
            // flex: 1.8
          }}
          contentContainerStyle={{
            flex: 1.8,
            // marginTop: hp('40%')
            // alignItems: 'center',
            // justifyContent: 'center'
          }}> */}
        <View style={{ postion: 'relative', flex: 1.8, }}>

          <View style={{
            flex: 1.8,
            borderTopLeftRadius: hp('3%'),
            borderTopRightRadius: hp('3%'),
            backgroundColor: Colors.TC
          }}>
            {/* <View style={{
            height: hp("6%"),
            width: wp("35%"),
            backgroundColor: Colors.TC,
            position: 'absolute',
            top: hp("-12%"),
            right: hp("3.1%"),
            alignSelf: 'center',
            borderRadius: hp('1%'),
            padding: hp('1%'),
          }}> */}
            <View style={{
              height: hp("6%"),
              width: wp("39%"),
              backgroundColor: Colors.TC,
              position: 'absolute',
              top: hp("-13%"),
              right: wp("5%"),
              // right: hp("3.1%"),
              borderRadius: hp('0.5%'),
              padding: hp('0.5%'),
            }}>
              <TouchableOpacity onPress={handleCardDetails}>
                <View style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-evenly',
                }}>
                  {/* <Image source={require("../assets/Group2370.png")} />
                <Text style={{ fontSize: hp("1.5%"), fontWeight: 'bold', }} > Hide Card Number</Text> */}
                  <Image source={IconPath} />
                  <Text style={{ fontSize: hp("1.5%"), fontWeight: 'bold', color: Colors.CC }} > {Message}</Text>
                </View>
              </TouchableOpacity>

            </View>

            {/* <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}> */}
            {/* <View style={{
              height: hp("26%"),
              width: wp("90%"),
              backgroundColor: Colors.CardC,
              position: 'absolute',
              top: hp("-9%"),
              right: hp("2.8%"),
              alignSelf: 'center',
              padding: wp('5%'),
              borderRadius: hp('2%')
            }}> */}

            <View style={{
              height: hp("26%"),
              width: wp("90%"),
              backgroundColor: Colors.CC,
              position: 'absolute',
              top: hp("-10%"),
              alignSelf: 'center',
              padding: wp('4.5%'),
              borderRadius: hp('1%')
            }}>
              <View style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
                <Image source={require("../assets/AspireLogo.png")} />
              </View>
              <View style={{ marginTop: hp("1%") }}>
                <Text style={{
                  color: Colors.TC,
                  fontSize: hp('3.2%'),  //24 End result looks like the provided UI mockup
                  fontWeight: 'bold'
                }}>Debet Card</Text>
              </View>

              {/* <View style={{ marginTop: isCardDetailsVisible ? hp('3%') : hp('1%') }}> */}
              <View style={{ marginTop: hp('3%') }}>

                <NumberFormat
                  value={cardNumber ? cardNumber : 4321435622337890}
                  displayType={'text'}
                  format="####     ####     ####     ####"
                  renderText={(value) =>
                    <Text
                      style={[styles.number, { letterSpacing: !isCardDetailsVisible ? wp('0.1%') : wp('0.4%'), fontSize: !isCardDetailsVisible ? wp('4%') : wp('4%') }]}>
                      {isCardDetailsVisible ? value : bulletChar}
                    </Text>}
                />

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: wp("40%"), marginTop: hp('1%') }}>
                  <Text style={{ color: Colors.TC, fontSize: hp('1.8%') }}>Thru: {exp ? exp : "12 / 20"} </Text>
                  <Text style={{ color: Colors.TC, fontSize: hp('1.8%') }}>CVV: {!isCardDetailsVisible ? " ***" : CVV ? CVV : "445"}</Text>
                </View>
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
                <Image source={require("../assets/VisaLogo.png")} />
              </View>
            </View>
            {/* </View> */}
            {/* <ScrollView style={{ position: 'absolute' }}> */}

            <View style={{
              width: windowWidth,
              marginTop: hp('20%'),
              paddingHorizontal: wp('6%'),
              // paddingTop: hp('2%'),
              // backgroundColor: "pink"
            }}>
              {isEnabled ?
                <View style={{}}>
                  <View style={{ flexDirection: 'row', justifyContent: "space-between", alignItems: 'center' }}>
                    <Text style={{ fontSize: hp("2%") }} >Debit card spending Limit</Text>
                    <Text style={{ fontSize: hp("2%") }}><Text style={{ color: Colors.CC }}>$345 </Text> | ${limit}</Text>
                  </View>
                  <View style={{ marginTop: hp('2%'), }}>
                    <ProgressBar
                      color={Colors.CC}
                      unfilledColor='#ccf5e0'
                      progress={0.3}
                      borderWidth={0.5}
                      width={wp("88%")}
                      height={wp("2.5%")} />
                  </View>
                </View>
                :
                null
              }

              <View style={{ flexDirection: 'row', marginVertical: hp('2%') }}>
                <Image source={require("../assets/insight.png")} style={{ height: wp('8%'), width: wp('8%') }} />
                <View style={{ marginLeft: wp('2%') }}>
                  <Text style={styles.boldText}>Top - up account</Text>
                  <Text style={{ color: Colors.TL, fontSize: wp('3.4%') }}>Deposit money to your account to use with card</Text>
                </View>
              </View>

              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
                <View style={{ flexDirection: 'row', marginVertical: hp('2%') }}>
                  <Image source={require("../assets/Transfer2x.png")} style={{ height: wp('8%'), width: wp('8%') }} />
                  <View style={{ marginLeft: wp('2%'), width: wp('66%') }}>
                    <Text style={styles.boldText}>Weekly spending limit</Text>
                    <Text style={{ color: Colors.TL, fontSize: wp('3.4%') }}>Your Weekly spending limit is S$ {limit}</Text>
                  </View>

                </View>
                <View style={{}}>
                  <Switch
                    trackColor={{ false: "#fff", true: Colors.CC }}
                    thumbColor={isEnabled ? "#ffff" : "#fff"}
                    ios_backgroundColor="#fff"
                    onValueChange={(value) => toggleSwitch(value)}
                    value={isEnabled}
                  />
                </View>
              </View>

              <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>

                <View style={{ flexDirection: 'row', marginVertical: hp('2%') }}>
                  <Image source={require("../assets/Transfer2x1.png")} style={{ height: wp('8%'), width: wp('8%') }} />
                  <View style={{ marginLeft: wp('2%'), width: wp('66%') }}>
                    <Text style={styles.boldText}>Freeze card</Text>
                    <Text style={{ color: Colors.TL, fontSize: wp('3.4%') }}>Your debit card is currently active</Text>
                  </View>
                </View>
                <View style={{}}>
                  <Switch
                    trackColor={{ false: "#fff", true: Colors.CC }}
                    thumbColor={isEnabled ? "#ffff" : "#fff"}
                    ios_backgroundColor="#fff"
                    onValueChange={{}}
                    value={{}}
                    disabled={true}
                  />
                </View>
              </View>

              <View style={{ flexDirection: 'row', marginVertical: hp('2%') }}>
                <Image source={require("../assets/Transfer2x3.png")} style={{ height: wp('8%'), width: wp('8%') }} />
                <View style={{ marginLeft: wp('2%') }}>
                  <Text style={styles.boldText}>Get a new cards</Text>
                  <Text style={{ color: Colors.TL, fontSize: wp('3.4%') }}>This deactivates your current debit card </Text>
                </View>
              </View>

              <View style={{ flexDirection: 'row', marginVertical: hp('2%') }}>
                <Image source={require("../assets/insight.png")} style={{ height: wp('8%'), width: wp('8%') }} />
                <View style={{ marginLeft: wp('2%') }}>
                  <Text style={styles.boldText}>Deactivated setCardDetailsVisible</Text>
                  <Text style={{ color: Colors.TL, fontSize: wp('3.4%') }}>Your previously deactivated card</Text>
                </View>
              </View>

            </View>
            {/* </ScrollView> */}

          </View >
        </View >
        {/* </ScrollView> */}



      </View >
      {isLoading ?
        <View style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, zIndex: 100, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator size="large" color={Colors.TC} />
        </View>
        :
        null
      }
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,

    marginTop: hp('3%'),
    padding: wp('5%'),
    backgroundColor: Colors.BGC
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  headerTextWrapper: {
    marginTop: hp('3%'),
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
    // fontSize: wp('5%'),
    fontWeight: 'bold',
    fontFamily: 'Avenir Next'
  },
  contentText: {
    color: Colors.TC,
    fontSize: hp('2.2%'),
    fontFamily: 'Avenir Next'
  },
  number: {

    color: Colors.TC
  },
  boldText: {
    fontSize: hp('2.2%'),
  }

});


