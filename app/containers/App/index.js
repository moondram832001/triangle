
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Slider from '../../components/Slider'
import Triangle from '../../components/Triangle'
import * as SliderActions from '../../actions/slideractions'
import style from './style.css'

class App extends Component {
  render() {
    const { todos, actions, slideractions, sliderValues , children } = this.props
    const triangleProps = {
         skewX:sliderValues.sliderOneVal/10 + 'deg',
         scaleY:(sliderValues.sliderTwoVal/450).toString()  
    };

    return (
      <div className={style.container}>
        <h1>triangle</h1>
        <Slider  changeValue={slideractions.changeSliderOneValue} defaultValue={ sliderValues.sliderOneVal.toString() }/>
        <Slider  changeValue={slideractions.changeSliderTwoValue} defaultValue={ sliderValues.sliderTwoVal.toString() } />
        <Triangle {...triangleProps} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    sliderValues:state.sliderValues
  }
}

function mapDispatchToProps(dispatch) {
  return {
    slideractions: bindActionCreators(SliderActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
