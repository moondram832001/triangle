import React, { Component } from 'react'
import classnames from 'classnames'
import style from './style.css'

class Triangle extends Component {

  constructor(props) {
    super(props);
  }

  static propTypes = {
    skewX: React.PropTypes.string,
    skewY: React.PropTypes.string,
    scaleX: React.PropTypes.string,
    scaleY: React.PropTypes.string,
    rotate: React.PropTypes.string
  };

  static defaultProps = {
    skewX: '0deg',
    skewY: '0deg',
    scaleX: '1',
    scaleY: '1',
    rotate : '0deg'
  };


  render() {
    const { skewX, skewY , scaleX, scaleY , rotate } = this.props;
    const transformStyle = {
        transform: 'scale('+ scaleX +','+ scaleY +') skewX('+ skewX + ') skewY('+ skewY + ') rotate('+rotate+')' 
    };
     //Todo: get rid  of 'unnecesaryWrapThree'
    return (
      <div>
         <div className={ style.positionWrap }>
           <div className={ style.transformWrap } style={ transformStyle } >
              <div className={ style.wrapOne }>
                 <div className={style.one} >    
                 </div> 
              </div>
              <div className={ style.wrapTwo }>
                 <div className={style.two} >
                 </div> 
              </div>
              <div  className={ style.unnecesaryWrapThree }>
                <div className={ style.wrapThree }>
                   <div className={style.three} >
                   </div> 
                </div>
              </div>
           </div>
         </div>
      </div>
    )
  }
}

export default Triangle
