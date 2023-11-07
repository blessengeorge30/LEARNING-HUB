
import React, { Component } from 'react';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';

export default class Webview extends Component{
  render(){
    return <WebView source={{ uri: 'https://www.youtube.com/watch?v=BZ0QER_0ZWI' }} style={{ height:'10' }} />;
  }
}