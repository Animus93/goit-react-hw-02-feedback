import React from 'react';
import styles from './Feedback.module.css';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';

export class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  getFeedback = feedback => {
    this.setState(prevState => {
      return {
        [feedback]: prevState[feedback] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce(
      (sum, currentValue) => sum + currentValue,
      0
    );
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good * 100) / this.countTotalFeedback());
  };
  render() {
    return (
      <div className ={styles.container}>
        <Section tittle="Please leave feedback">
          <FeedbackOptions onLeaveFeedback={this.getFeedback}></FeedbackOptions>
          {Object.values(this.state).reduce((total, item) =>{ 
      total += item
    return total},0) > 0? <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />: <b>No feedback given</b>}
        </Section>
      </div>
    );
  }
}
