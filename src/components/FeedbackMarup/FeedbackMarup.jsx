import { Component } from 'react';
import { Statistics } from '../Statistics/Statistics';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { Section } from '../Section/Section';

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
    const { good, neutral, bad } = this.state;
        return(good+neutral+bad)
    };
  countPositiveFeedbackPercentage() {
    const { good } = this.state;
        return(Math.round(good/this.countTotalFeedback()*100))
    };
  render() {
    const { good, neutral, bad } = this.state;
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
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        />}
            />        
      </>
    );
  }
}
