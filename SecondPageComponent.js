/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
    ScrollView,
    Navigator,
    TouchableOpacity
} from 'react-native';

import FirstPageComponent from './FirstPageComponent';

export default class SecondPageComponent extends Component {
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            id:null
        };
      }

    componentDidMount() {
        this.setState({
            id:this.props.id,
            name:this.props.name,
        })
    }
    _pressBut(){
        const {navigator} = this.props;
        this.props.changeUser();
        if(navigator){
            navigator.pop();
        }
    }
      render(){
          return (
              <View>
                  <Text>获得的参数：{this.state.id}{this.props.name}</Text>
                  <TouchableOpacity onPress={this._pressBut.bind(this)}>
                      <Text>第二页！点我跳转回第一页</Text>
                  </TouchableOpacity>
              </View>
          )
      }

}