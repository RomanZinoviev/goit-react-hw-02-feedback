import { Component } from 'react';
import { Statistics } from './Statistics';
import { FeedbackOptions } from './FeedbackOptions';
import { Section } from './Section';

export class FeedbackMarup extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    };
    handleForButtonGood=()=> { 
        this.setState((prevState) => {
            return {good:prevState.good+1}
        })
    };
    handleForButtonNeutral=()=> { 
        this.setState((prevState) => {
            return {neutral:prevState.neutral+1}
        })
    };
    handleForButtonBad=()=> { 
        this.setState((prevState) => {
            return {bad:prevState.bad+1}
        })
    };
    countTotalFeedback() {
        return(this.state.good+this.state.neutral+this.state.bad)
    };
    countPositiveFeedbackPercentage() {
        return(Math.round(this.state.good/this.countTotalFeedback()*100))
    };
  render() {
    return (
      <>
            <Section
                title="Please leave feedback"
            children={<FeedbackOptions
          onLeaveFeedbackGood={this.handleForButtonGood}
          onLeaveFeedbackNeutral={this.handleForButtonNeutral}
          onLeaveFeedbackBad={this.handleForButtonBad}
        />}
            />
            <Section
                title="Statistics"
                children={<Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        />}
            />
        
      </>
    );
  }
}
