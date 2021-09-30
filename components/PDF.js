import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  PermissionsAndroid,
  Alert,
} from 'react-native';
import RNFetchBlob from 'rn-fetch-blob';

export class PDF extends Component {
  actualDownload = () => {
    const {dirs} = RNFetchBlob.fs;
    RNFetchBlob.config({
      fileCache: true,
      addAndroidDownloads: {
        useDownloadManager: true,
        notification: true,
        mediaScannable: true,
        title: `test.pdf`,
        path: `${dirs.DownloadDir}/test.pdf`,
      },
    })
      .fetch('GET', 'http://www.africau.edu/images/default/sample.pdf', {})
      .then(res => {
        console.log('The file saved to ', res.path());
      })
      .catch(e => {
        console.log(e);
      });
  };

  downloadFile = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        this.actualDownload();
      } else {
        Alert.alert(
          'Permission Denied!',
          'You need to give storage permission to download the file',
        );
      }
    } catch (err) {
      console.warn(err);
    }
  };
  render() {
    return (
      <TouchableOpacity onPress={this.downloadFile}>
        <Text>Download!!!</Text>
      </TouchableOpacity>
    );
  }
}

export default PDF;
