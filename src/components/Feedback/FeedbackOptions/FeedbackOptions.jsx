import styles from '../Feedback.module.css';

export const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <div className={styles.control}>
      <button onClick={() => onLeaveFeedback('good')}>Good</button>
      <button onClick={() => onLeaveFeedback('neutral')}>Neutral</button>
      <button onClick={() => onLeaveFeedback('bad')}>Bad</button>
    </div>
  );
};
