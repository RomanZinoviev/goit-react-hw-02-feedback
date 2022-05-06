import PropTypes from 'prop-types';
import s from "../FeedbackOptions/FeedbackOptions.module.css"
export function FeedbackOptions({options, onLeaveFeedbackGood, onLeaveFeedbackNeutral, onLeaveFeedbackBad }) {
    return (
        <div className="button_wrapper">
          <button type="button" className={s.button} onClick={onLeaveFeedbackGood}>
            Good
          </button>
          <button type="button" className={s.button} onClick={onLeaveFeedbackNeutral}>
            Neutral
          </button>
          <button type="button" className={s.button} onClick={onLeaveFeedbackBad}>
            Bad
          </button>
            </div>
    )
}