import React from "react";
import PropTypes from 'prop-types';

export function Statistics({good, neutral, bad, total, positivePercentage}) {
    return (
       good||neutral||bad? <><div>
            <p>Good:{good}</p>
            <p>Neutral:{neutral}</p>
            <p>Bad:{bad}</p>
            <p>Total:{total}</p>
            <p>Positive Feedback:{positivePercentage ? positivePercentage : 0}%</p>
        </div></>:<p>There is no feedback</p>
    )
}
Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage:PropTypes.number.isRequired
}