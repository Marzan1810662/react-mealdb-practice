import React from 'react';
import './Right.css'

const Right = ({meal}) => {
    return (
        <div className='right-container'>
            <h1>Right</h1>
            {
                meal.map(item =><h3>NAME:{item?.strMeal}</h3> )
            }
        </div>
    );
};

export default Right;