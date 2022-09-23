import React from 'react';
import {StatisticsList, StatisticsItem, BoldFont} from './Statistics.styled';
 
export default function Statistics ({good, neutral, bad, total, positivePercentage}){
    return (
        <StatisticsList>
        <li>
          <StatisticsItem> <BoldFont>Bad:</BoldFont> {bad}</StatisticsItem> 
        </li>
        <li>
           <StatisticsItem> <BoldFont>Nuertal:</BoldFont> {neutral}</StatisticsItem>
        </li>
        <li>
            <StatisticsItem> <BoldFont>Good:</BoldFont> {good}</StatisticsItem>
        </li>
        <li>
            <StatisticsItem> <BoldFont>Total:</BoldFont> {total}</StatisticsItem>
        </li>
        <li>
            <StatisticsItem> <BoldFont>Positive percentage: </BoldFont>{positivePercentage} % </StatisticsItem>
        </li>
       
   </StatisticsList>
    
    )
}