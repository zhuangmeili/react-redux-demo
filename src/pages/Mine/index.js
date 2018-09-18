import React, { Component } from 'react';
import './index.scss';

import Picker from 'better-picker'
const axios = require('axios');
class Mine extends Component {
  constructor(props){
    super(props)
    this.state={
      names:[
        // {text: '小美', value: 'xiaomei'},
        // {text: '猪猪', value: 'zhuzhu'}
        ],
      nameSelIndex:0,
      nameSelVal:'',
      namePicker:null,
    }
  }

  componentDidMount(){
    axios.get('https://gank.io/api/xiandu/categories').then(res=>{
      let names=res.data.results;
      names.map((item)=>{
        item.text=item.name;
        item.value=item.name;
        return item;
      });
      this.setState({
        names:names
      },()=>{
        console.log(names);
        this.handlePicker();
      });
    });
  }

  handlePicker(){
    let {names,nameSelIndex,namePicker}=this.state;
    namePicker= new Picker({
      data: [names],
      selectedIndex: [nameSelIndex],
    });
    this.setState({
      namePicker:namePicker
    }, ()=> {
      namePicker.on('picker.select',  (selectedVal, selectedIndex)=> {
        this.setState({
          nameSelVal:names[selectedIndex[0]].text
        },()=>{
          console.log(`nameSelVal=${this.state.nameSelVal}`);
        })
      });
      namePicker.on('picker.change', function (index, selectedIndex) {
        console.log(index);
        console.log(selectedIndex);
      });
      namePicker.on('picker.valuechange', function (selectedVal, selectedIndex) {
        console.log(selectedVal);
        console.log(selectedIndex);
      });
    });
  }
  handleSelect(){
    let {namePicker}=this.state;
    namePicker.show();
  }
  render(){
    return (
      <div>
        Mine page
        <div onClick={this.handleSelect.bind(this)}>点我选择</div>
      </div>
    )
  }
}

export default Mine;
