import React from 'react';
import {View, Text} from 'react-native';
const pixelValue = 1.6;
const Invoices = props => {
  return (
    <View>
      <View
        style={{
          marginTop: '15%',
          alignItems: 'flex-end',
          paddingHorizontal: 12,
        }}>
        <Text style={{fontWeight: 'bold'}}>{props.titleText}</Text>
      </View>
      <View
        style={{
          borderBottomColor: 'black',
          borderBottomWidth: 1,
          // width: '100%',
          // flex: 1,
          marginBottom: 10,
        }}
      />
      <View
        style={{
          // flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 12,
          // marginBottom: 30,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            // backgroundColor: 'red',
            flex: 0.3,
          }}>
          <View>
            <Text style={{fontSize: pixelValue * 6, fontWeight: 'bold'}}>
              {props.cc1v1}
            </Text>
          </View>
          <View>
            <Text></Text>
            <Text style={{fontSize: pixelValue * 6, fontWeight: 'bold'}}>
              {props.cc2v2}
            </Text>
            <Text style={{fontSize: pixelValue * 6, fontWeight: 'bold'}}>
              {props.cc2v3}
            </Text>
            <Text style={{fontSize: pixelValue * 6, fontWeight: 'bold'}}>
              {props.cc2v4}
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            // backgroundColor: 'red',
            flex: 0.3,
          }}>
          <View>
            <Text style={{fontSize: pixelValue * 6, fontWeight: 'bold'}}>
              {props.cc3v1}
            </Text>
            <Text style={{fontSize: pixelValue * 6, fontWeight: 'bold'}}>
              {props.cc3v2}
            </Text>
            <Text style={{fontSize: pixelValue * 6, fontWeight: 'bold'}}>
              {props.cc3v3}
            </Text>
            <Text style={{fontSize: pixelValue * 6, fontWeight: 'bold'}}>
              {props.cc3v4}
            </Text>
          </View>
          <View>
            <Text style={{fontSize: pixelValue * 6, fontWeight: 'bold'}}>
              {props.cc4v1}
            </Text>
            <Text style={{fontSize: pixelValue * 6, fontWeight: 'bold'}}>
              {props.cc4v2}
            </Text>
            <Text style={{fontSize: pixelValue * 6, fontWeight: 'bold'}}>
              {props.cc4v3}
            </Text>
            <Text style={{fontSize: pixelValue * 6, fontWeight: 'bold'}}>
              {props.cc4v4}
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          margin: 3,
        }}>
        <View style={{flex: 0.6}}>
          <Text
            style={{
              fontSize: pixelValue * 6,
              fontWeight: 'bold',
              // marginBottom: 2,
            }}>
            {props.h1}
          </Text>
        </View>
        <View style={{}}>
          <Text
            style={{
              fontSize: pixelValue * 6,
              fontWeight: 'bold',
              // marginBottom: 2,
            }}>
            {props.h2}
          </Text>
        </View>
        <View style={{}}>
          <Text
            style={{
              fontSize: pixelValue * 6,
              fontWeight: 'bold',
              // marginBottom: 2,
            }}>
            {props.h3}
          </Text>
        </View>
        <View style={{}}>
          <Text
            style={{
              fontSize: pixelValue * 6,
              fontWeight: 'bold',
              // marginBottom: 2,
            }}>
            {props.h4}
          </Text>
        </View>
        <View style={{}}>
          <Text
            style={{
              fontSize: pixelValue * 6,
              fontWeight: 'bold',
              // marginBottom: 2,
            }}>
            {props.h5}
          </Text>
        </View>
      </View>
      <View
        style={{
          borderColor: 'blue',
          borderWidth: 0.7,
          // marginTop: 10,
        }}></View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View style={{flex: 0.6}}>
          <Text style={{fontSize: pixelValue * 6}}>{props.c1t1}</Text>
          <Text style={{fontSize: pixelValue * 6}}>{props.c1t2}</Text>
        </View>
        <View style={{}}>
          <Text
            style={{
              fontSize: pixelValue * 6,
              fontWeight: 'bold',
              // marginBottom: 2,
            }}>
            {props.c2t1}
          </Text>
        </View>
        <View style={{}}>
          <Text
            style={{
              fontSize: pixelValue * 6,
              fontWeight: 'bold',
              // marginBottom: 2,
            }}>
            {props.c3t1}
          </Text>
        </View>
        <View style={{}}>
          <Text
            style={{
              fontSize: pixelValue * 6,
              fontWeight: 'bold',
              // marginBottom: 2,
            }}>
            {props.c4t1}
          </Text>
        </View>
        <View style={{}}>
          <Text
            style={{
              fontSize: pixelValue * 6,
              fontWeight: 'bold',
              // marginBottom: 2,
            }}>
            {props.c5t1}
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-end',
          marginTop: 12,
        }}>
        <View style={{flexDirection: 'column'}}>
          <View style={{}}>
            <Text
              style={{
                fontSize: pixelValue * 6,
                fontWeight: 'bold',
              }}>
              {props.c2c1v1}
            </Text>
          </View>
          <View style={{}}>
            <Text
              style={{
                fontSize: pixelValue * 6,
                fontWeight: 'bold',
              }}>
              {props.c2c1v2}
            </Text>
          </View>
          <View style={{}}>
            <Text
              style={{
                fontSize: pixelValue * 6,
                fontWeight: 'bold',
              }}>
              {props.c2c1v3}
            </Text>
          </View>
          <View style={{}}>
            <Text
              style={{
                fontSize: pixelValue * 6,
                fontWeight: 'bold',
              }}>
              {props.c2c1v4}
            </Text>
          </View>
          <View style={{}}>
            <Text
              style={{
                fontSize: pixelValue * 6,
                fontWeight: 'bold',
              }}>
              {props.c2c1v5}
            </Text>
          </View>
        </View>
        <View style={{flexDirection: 'column', marginLeft: 20}}>
          <View style={{}}>
            <Text
              style={{
                fontSize: pixelValue * 6,
                fontWeight: 'bold',
              }}>
              {props.c2c2v1}
            </Text>
          </View>
          <View style={{}}>
            <Text
              style={{
                fontSize: pixelValue * 6,
                fontWeight: 'bold',
              }}>
              {props.c2c2v2}
            </Text>
          </View>
          <View style={{}}>
            <Text
              style={{
                fontSize: pixelValue * 6,
                fontWeight: 'bold',
              }}>
              {props.c2c2v3}
            </Text>
          </View>
          <View style={{}}>
            <Text
              style={{
                fontSize: pixelValue * 6,
                fontWeight: 'bold',
              }}>
              {props.c2c2v4}
            </Text>
          </View>
          <View style={{}}>
            <Text
              style={{
                fontSize: pixelValue * 6,
                fontWeight: 'bold',
              }}>
              {props.c2c2v5}
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-end',
          marginTop: 7,
        }}>
        <View
          style={{
            backgroundColor: 'lightblue',
            paddingHorizontal: 10,
            flexDirection: 'row',
          }}>
          <View>
            <Text
              style={{
                fontSize: pixelValue * 10,
                fontWeight: 'bold',
                color: 'white',
              }}>
              {props.balanceTitle}
            </Text>
          </View>
          <View style={{marginLeft: 10}}>
            <Text
              style={{
                fontSize: pixelValue * 10,
                fontWeight: 'bold',
                color: 'white',
              }}>
              {props.balanceText}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Invoices;
