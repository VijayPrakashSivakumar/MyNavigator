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
    Navigator
} from 'react-native';
import FirstPageComponent from './FirstPageComponent';

export default class MyNavigator extends Component {
    render() {
        let defaultName = 'FirstPageComponent';
        let defaultComponent = FirstPageComponent;
        return (
           <Navigator initialRoute={{name:defaultName,component:defaultComponent}}
            configureScene={(route)=> {return Navigator.SceneConfigs.PushFromRight}}
                      renderScene={(route,navigator)=>{
                        let  Component= route.component;
                        return <Component {...route.params} navigator={navigator}  />
                      }}
           />
        );
    }
}


class List extends Component {

  constructor(props) {
    super(props);
    this.state = {id:2};
  }

  _pressButton() {
    const { navigator } = this.props;
    //为什么这里可以取得 props.navigator?请看上文:
    //<Component {...route.params} navigator={navigator} />
    //这里传递了navigator作为props
    if(navigator) {
      navigator.push({
        name: 'Detail',
        component: Detail,
          params:{
            id:this.state.id
          }
      })
    }
  }


  render(){
    return (
        <ScrollView style={styles.flex}>
          <Text style={styles.list_item} onPress={this._pressButton.bind(this)} >☆ 豪华邮轮济州岛3日游</Text>
          <Text style={styles.list_item} onPress={this._pressButton.bind(this)}>☆ 豪华邮轮台湾3日游</Text>
          <Text style={styles.list_item} onPress={this._pressButton.bind(this)}>☆ 豪华邮轮地中海8日游</Text>
        </ScrollView>
    );
  }


}


class Detail extends Component{

  constructor(props) {
    super(props);
    this.state = {};
  }

  _pressButton() {
    const { navigator } = this.props;
    if(navigator) {
      //很熟悉吧，入栈出栈~ 把当前的页面pop掉，这里就返回到了上一个页面:List了
      navigator.pop();
    }
  }

  render(){
    return(

        <ScrollView>
          <Text style={styles.list_item} onPress={this._pressButton.bind(this)} >点击我可以跳回去</Text>

        </ScrollView>

    );
  }
}








const styles = StyleSheet.create({

  flex:{
    flex:1,

  },
  list_item:{
    height:40,
    marginLeft:10,
    marginRight:10,
    fontSize:20,
    borderBottomWidth:1,
    borderBottomColor:'#ddd',
    justifyContent:'center',
  },



});

AppRegistry.registerComponent('MyNavigator', () => MyNavigator);
