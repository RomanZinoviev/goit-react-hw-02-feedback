import PropTypes from 'prop-types';
export function FeedbackOptions({options, onLeaveFeedbackGood, onLeaveFeedbackNeutral, onLeaveFeedbackBad }) {
    return (
        <div className="button_wrapper">
          <button type="button" className="button" onClick={onLeaveFeedbackGood}>
            Good
          </button>
          <button type="button" className="button" onClick={onLeaveFeedbackNeutral}>
            Neutral
          </button>
          <button type="button" className="button" onClick={onLeaveFeedbackBad}>
            Bad
          </button>
            </div>
    )
}