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
import SecondPageComponent from './SecondPageComponent';

export default class FirstPageComponent extends Component {
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {id:2,name:'yu'};
      }
    _pressBut(){
        const {navigator} = this.props;
        const  self = this;
        if(navigator){
            navigator.push({
                name:'SecondPageComponent',
                component:SecondPageComponent,
                params:{
                    id:this.state.id,
                    name:this.state.name,
                    changeUser:function () {
                        self.setState({id:self.state.id+1,name:'yang'});
                    }
                }
            })
        }
    }
      render(){
          return (
              <View>
                  <Text>id:{this.state.id}{this.state.name}</Text>
                  <TouchableOpacity onPress={this._pressBut.bind(this)}>
                      <Text>第一页！点我跳转到第二页</Text>
                  </TouchableOpacity>
              </View>
          )
      }

}