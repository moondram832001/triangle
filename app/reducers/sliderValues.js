
import { handleActions } from 'redux-actions'

const initialState =  {
  sliderOneVal : 0,
  sliderTwoVal : -250
};
  

export default handleActions({
  'change slider one value' (state, action) {
 
   return {
      sliderOneVal : action.payload,
      sliderTwoVal : state.sliderTwoVal
    }
  },
  'change slider two value' (state, action) {
 
   return {
      sliderOneVal : state.sliderOneVal,
      sliderTwoVal : action.payload
    }
  }
}, initialState)
