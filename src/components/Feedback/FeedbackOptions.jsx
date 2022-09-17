import css from './Feedback.module.css';

export default function FeedbackOptions (onLeaveFeedback) {
    return (
        <ul className={css.markList}>
                <li className={css.markItem}>
                    <button onClick={() => onLeaveFeedback("good")} className={css.markValue}>Good</button>
                </li>
                <li className={css.markItem}>
                    <button onClick={() => onLeaveFeedback("neutral")}  className={css.markValue}>Neutral</button>
                </li>
                <li className={css.markItem}>
                    <button onClick={() => onLeaveFeedback("bad")}  className={css.markValue}>Bad</button>
                </li>
            </ul>
    )
}