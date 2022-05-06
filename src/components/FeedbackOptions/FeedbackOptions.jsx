import PropTypes from 'prop-types';
import s from "../FeedbackOptions/FeedbackOptions.module.css"
export function FeedbackOptions({ options, onLeaveFeedback }) {
      return (
        <>
          {options.map(option => (
           <button className={s.button} key={option} name={option} type="button" onClick={onLeaveFeedback}>{option}</button>
         ))}
        </> 
    )
};
FeedbackOptions.propTypes = {
  options: PropTypes.array,
  onLeaveFeedback:PropTypes.func
}