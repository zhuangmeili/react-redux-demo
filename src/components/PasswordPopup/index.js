import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './index.scss';
class PasswordPopup extends Component {
  constructor(props){
    super(props);
    this.state={
      PswLength:0
    }
  }
  componentWillMount(){

  }

  //input 输入时候触发
  _handlePswInput(){
    var value=this.PswRef.value;
    var length= value.length;
    this.setState({
      PswLength:length
    });
  }

  //创建DOM password
  _create_psw(){
    let length=this.state.PswLength;
    let list=[];
    for(let i=1;i<=6;i++){
      if(i<=length){
        list.push( <li className="Flex1 active" key={i}>*</li>);
      }else{
        list.push( <li className="Flex1" key={i}></li>);
      }
    }
    return list;
  }
  render() {
    return (
      <div className="p_password_popup Flex FlexVer FlexHor">
        <section className="psw_content">
          <header className="psw_header">
            确认签署密码
            <i className="close" ></i>
          </header>
          <main className="psw_body">
            <p className="passage">输入签署密码后，您将同意并签署所有待签署合同！</p>
            <div className="psw_surface">
              <input className="password"
                     type="tel"
                     maxLength="6"
                     ref={(el)=>this.PswRef=el}
                     onInput={this._handlePswInput.bind(this)}/>
              <ul className=" Flex">
                {this._create_psw()}
              </ul>
            </div>
          </main>
          <footer className="psw_footer Flex">
            <span className="error Flex1 HackWidth">密码输入错误！</span>
            <Link className="link" to={"/a"}>忘记密码？</Link>
          </footer>
        </section>
      </div>
    );
  }
}

export default PasswordPopup;
