import React, { Component } from 'react'
import classnames from 'classnames'
import style from './style.css'

class Slider extends Component {

constructor(props) {
  super(props);
}

static propTypes = {
   defaultValue :  React.PropTypes.string
 };

static defaultProps = {
  defaultValue: "-300"
};
   
handleChange(text) {
  this.props.changeValue(text.target.value);
}


render() {
  const { defaultValue }  = this.props;
    return (
      <div>
        <input className={ style.slider } id="slider1" type="range" min="-300" max="300" step="1" 
        onChange={::this.handleChange} value={ defaultValue } />
      </div>
    )
  }
}

export default Slider
