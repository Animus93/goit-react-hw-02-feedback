import PropTypes from 'prop-types';
import styles from '../Feedback.module.css';

export const Statistics = ({
    good,
    neutral,
    bad,
    total,
    positivePercentage,
}) => {
    return (
    <ul className={styles.statistics}>
          Statistics
          <li className={styles.statisticItem}>Good: {good}</li>
          <li className={styles.statisticItem}>Neutral: {neutral}</li>
          <li className={styles.statisticItem}>Bad: {bad}</li>
          {total > 0 && (
            <div>
              <li className={styles.statisticItem}>
                Total: {total}
              </li>
              <li className={styles.statisticItem}>
                Positive feedback: {positivePercentage}%
              </li>
            </div>
          )}
        </ul>
)};

Statistics.defaultProps = {
    total: 'error',
    positivePercentage: 'error',
};

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
};