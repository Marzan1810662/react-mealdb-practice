import Meal from '../Meal/Meal';
import './Meals.css'

const Meals = (props) => {
    const { meals } = props;
    console.log(meals);
    return (
        <div className='meals-container'>
            {
                meals.map(meal => <Meal
                                        key={meal.idMeal}
                                        meal={meal}></Meal>)
            }
        </div>
    );
};

export default Meals;