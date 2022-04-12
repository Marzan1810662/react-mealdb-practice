import React from 'react';
import './Meal.css'

const Meal = (props) => {
    const { meal } = props;
    return (
        <div className='meal-container'>
            <img className='img-fluid' src={meal.strMealThumb} alt="" />
            <h4>{meal.strMeal}</h4>
            <p><strong>Category:</strong> {meal.strCategory}</p>
            <p><strong> Area: </strong>{meal.strArea}</p>
            <p><strong> Tag: </strong>{meal.strTags ? meal.strTags : 'Food'}</p>
            <div className='btn-container'>
                <button>See more</button>
                <button>Add To right</button>
            </div>

        </div>
    );
};

export default Meal;