import React from 'react';
import QuizContainer from '../../container/quizContainer/quizContainer';

const quiz = (props) => {
    return (
        <div>
            < QuizContainer {...props}/>
        </div>
    );
};

export default quiz;