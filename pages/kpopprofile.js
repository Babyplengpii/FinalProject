import React, { Component } from 'react'
import Header from '../components/Header'
import KProfileComponent from '../components/KProfileComponent.js'
import * as action from './action';
import { connect } from 'react-redux'
import { Row, Col } from 'antd';

class Kprofile extends Component{
  render(){
    const allKprofile = this.props.kProfileFromStore;
    function handleClick(item) {
      console.log(item)
    }
    let lists = (
      <div>
        ไม่พบข้อมูล
      </div>
    );
    if(allKprofile.length !==0){
      lists = allKprofile.map(function(item){
        // console.log(item);
          return (
            <>
            <KProfileComponent data={item} onClick={() => {handleClick("test")}}/>
            </>
          )

      }
    );
    }

    return(
      <>
      <div style={{paddingTop:""}}>
      <Header/> 
        <div style={{ padding: '12px'}}>
          <Row justify="center">
            {lists}
          </Row>
        </div>
      </div>
      </>
    )
  }
  componentDidMount(){
    this.props.getallKprofile();
  }

}
const mapStateToProps =  state =>{
  return {
    kProfileFromStore : state.posts
  }
}
const mapDispatchToProps = dispatch =>{
  return {
    getallKprofile : () =>{
      return dispatch(action.getKpopProfile())
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Kprofile);