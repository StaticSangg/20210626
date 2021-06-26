import React, { Component } from 'react';


class MyMovie extends Component {
  
  static defaultProps= {
    title:"기본영화 "
  }

  render () {
      return (
        <div>
            영화 제목 : { this.props.title } <br/>
            러닝 타임 : { this.props.running} <br/>
        </div>
      );
  }
}

export default MyMovie;