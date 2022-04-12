import { useState } from 'react';
import useMeals from '../../hooks/useMeals';
import Meals from '../Meals/Meals';
import Right from '../Right/Right';
import './Homepage.css'

const Homepage = () => {
    const {meals, setMeals} = useMeals()
    const [mealsAtRight, setMealsAtRight] = useState([]);

    return (
        <div className='homepage-container'>
            <div>
                <Meals meals={meals}></Meals>
            </div>
            <div className='right'>
                <Right meal={mealsAtRight}></Right>
            </div>
        </div>
    );
};

export default Homepage;