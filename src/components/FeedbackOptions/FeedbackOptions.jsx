import React from 'react';
import {ButtonsList, Buttons} from './FeedbackOptions.styled';

export default function FeedbackOptions ({onLeaveFeedback}) {
    return (
        <ButtonsList>
                <li>
                    <Buttons onClick={() => onLeaveFeedback("good")}>Good</Buttons>
                </li>
                <li>
                    <Buttons onClick={() => onLeaveFeedback("neutral")}>Neutral</Buttons>
                </li>
                <li>
                    <Buttons onClick={() => onLeaveFeedback("bad")}>Bad</Buttons>
                </li>
            </ButtonsList>
    )
}