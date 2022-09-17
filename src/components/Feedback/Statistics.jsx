import React from 'react';
import css from './Feedback';

export default function Statistics ({good, neutral, bad, total, positivePercentage}){
    return (
        <ul className={css.statisticsList}>
        <li className={css.statisticsItem}>
          <p>Bad: {bad}</p> 
        </li>
        <li className={css.statisticsItem}>
           <p>Nuertal: {neutral}</p>
        </li>
        <li className={css.statisticsItem}>
            <p>Good: {good}</p>
        </li>
        <li className={css.statisticsItem}>
            <p>Total: {total}</p>
        </li>
        <li className={css.statisticsItem}>
            <p>Positive percentage: {positivePercentage} % </p>
        </li>
       
   </ul>
    
    )
}