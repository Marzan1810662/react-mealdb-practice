import { useEffect, useState } from "react";

const useMeals = () => {
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=A')
            .then(res => res.json())
            .then(data => setMeals(data.meals));
    }, []);

    return {meals, setMeals};

}

export default useMeals;