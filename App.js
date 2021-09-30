import React, {Component, useEffect, useRef} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Share,
  PermissionsAndroid,
  Alert,
} from 'react-native';
import Invoices from './components/Invoices';
import Header from './components/Header';
import {captureScreen} from 'react-native-view-shot';
import ViewShot from 'react-native-view-shot';
import RNImageToPdf from 'react-native-image-to-pdf';
import RNFetchBlob from 'rn-fetch-blob';
import {downloadFile} from 'react-native-fs';
var RNFS = require('react-native-fs');

const pixelValue = 1.2;

const App = () => {
  const viewShotRef = useRef();

  snap = async () => {
    console.log('snap capture');
    const imgURI = await viewShotRef.current.capture();
    const splittedURI = imgURI.split('//')[1];
    console.log(splittedURI);
    const options = {
      imagePaths: [splittedURI],
      name: 'PDFName5.pdf',
      maxSize: {
        // optional maximum image dimension - larger images will be resized
        width: 900,
        height: 900,
      },
      quality: 0.9, // optional compression paramter
    };
    const pdf = await RNImageToPdf.createPDFbyImages(options); //creating the pdf in .cominvoicegenerator
    console.log('PDF FILE', pdf.filePath);
    // var path = RNFS.DownloadDirectoryPath + '/myInvoice.pdf';
    var path = RNFS.PicturesDirectoryPath + '/myInvoice.jpg';

    // console.log(path);
    // RNFS.writeFile(path, `${pdf.filePath}`, 'utf8')
    //   .then(success => {
    //     console.log('FILE WRITTEN!');
    //   })
    //   .catch(err => {
    //     console.log(err.message, err.code);
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: 'Cool Photo App Camera Permission',
          message:
            'Cool Photo App needs access to your camera ' +
            'so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );

      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        RNFS.moveFile(splittedURI, path)
          .then(result => {
            console.log('file copied:', result);
          })
          .catch(err => {
            console.log(err);
          });
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  // var path = '/storage/emulated/0/Download' + '/test3.pdf';

  // // write the file
  // RNFS.writeFile(path, JSON.stringify(pdf.filePath), 'utf8')
  //   .then(success => {
  //     console.log('FILE WRITTEN!');
  //   })
  //   .catch(err => {
  //     console.log(err.message);
  //   });
  // Share.share({title: 'pdf', url: pdf.filePath});
  // const {dirs} = RNFetchBlob.fs;
  // RNFetchBlob.config({
  //   fileCache: true,
  //   addAndroidDownloads: {
  //     useDownloadManager: true,
  //     notification: true,
  //     mediaScannable: true,
  //     title: `test.pdf`,
  //     path: `${dirs.DownloadDir}/test.pdf`,
  //   },
  // })
  //   .fetch('GET', pdf.filePath, {})
  //   .then(res => {
  //     console.log('The file saved to ', res.path());
  //   })
  //   .catch(e => {
  //     console.log(e);
  //   });

  // downloadFile = async () => {
  //   try {
  //     const granted = await PermissionsAndroid.request(
  //       PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
  //     );
  //     if (granted === PermissionsAndroid.RESULTS.GRANTED) {
  //       snap();
  //     } else {
  //       Alert.alert(
  //         'Permission Denied!',
  //         'You need to give storage permission to download the file',
  //       );
  //     }
  //   } catch (err) {
  //     console.warn(err);
  //   }
  // };

  return (
    <View style={styles.screen}>
      <View style={styles.invoice}>
        <ViewShot
          ref={viewShotRef}
          style={{flex: 1, backgroundColor: 'white'}}
          options={{format: 'png', quality: 1.0}}>
          <View style={styles.centerInvoice}>
            <Invoices
              titleText="Invoice"
              cc1v1="Bill To:"
              cc2v2="555 Bryant St. #263"
              cc2v3="Palo Alto,CA"
              cc2v4="94301 US"
              cc3v1="Invoice No:"
              cc3v2="Date:"
              cc3v3="Terms:"
              cc3v4="Due Date:"
              cc4v1="1"
              cc4v2="20/09/21"
              cc4v3="NET 0"
              cc4v4="20/09/21"
              h1="Description"
              h2="Quantity"
              h3="Rate"
              h4="Tax"
              h5="Amount"
              c1t1="Materials"
              c1t2="(Will be shipped to site)"
              c2t1="1"
              c3t1="$150.00"
              c4t1="10"
              c5t1="$150.00"
              c2c1v1="SubTotal"
              c2c1v2="Discount"
              c2c1v3="Tax 10% ($135.00)"
              c2c1v4="Total"
              c2c1v5="Paid"
              c2c2v1="$150.00"
              c2c2v2="$15.00"
              c2c2v3="$13.50"
              c2c2v4="$148.50"
              c2c2v5="$0.00"
              balanceTitle="Balance Due"
              balanceText="$148.00"
            />
            <View style={styles.imgContainer}>
              <Image
                style={styles.image}
                source={{
                  uri: 'https://www.vhv.rs/dpng/d/174-1742674_invoice-png-free-download-sign-transparent-png.png',
                }}
              />
            </View>
          </View>
        </ViewShot>
      </View>
      <View style={{paddingHorizontal: 25 * pixelValue}}>
        <TouchableOpacity
          style={{
            paddingHorizontal: 20,
            paddingVertical: 10,
            backgroundColor: 'red',
          }}
          onPress={() => snap()}
        />
      </View>
    </View>
  );
};

export default App;

// useEffect(() => {
//   captureScreen({
//     format: 'jpg',
//     quality: 0.8,
//   }).then(
//     uri => console.log('Image saved to', uri),
//     error => console.error('Oops, snapshot failed', error),
//   );
// });

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 15 * pixelValue,
  },
  invoice: {
    flex: 0.8,
    // flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 25 * pixelValue,
    paddingTop: 30 * pixelValue,
    paddingBottom: 5 * pixelValue,
    // backgroundColor: 'red',
  },
  centerInvoice: {
    flex: 0.7,
    // backgroundColor: 'green',
    // borderWidth: 3,
    paddingHorizontal: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.46,
    shadowRadius: 4.68,
    elevation: 5,
  },
  imgContainer: {
    width: 80 * pixelValue,
    height: 80 * pixelValue,
    bottom: 0,
    zIndex: -1,
    position: 'absolute',
    borderRadius: 40 * pixelValue,
    // borderWidth: 3,
    overflow: 'hidden',
    backgroundColor: 'yellow',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
