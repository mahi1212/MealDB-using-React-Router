import React, { useEffect, useState } from 'react';
import { Card , Button} from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const MealDetail = () => {
    const { id } = useParams()
    console.log(id)
    const [meal, setMeal] = useState({})
    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
            .then(res => res.json())
            .then(data => setMeal(data.meals[0]))
    }, [])
    
    return (
        <div>
            <Card style={{ width: '15rem' , margin: '10px auto'}} classname='mx-auto'>
                <Card.Img variant="top" src={meal.strMealThumb} />
                <Card.Body>
                    <Card.Title>{meal.strMeal}</Card.Title>
                    <Card.Text> 
                        {meal.strInstructions.slice(0,150)}
                    </Card.Text>
                    <Link to='/resturant'>
                        <Button variant="primary">Go Back</Button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default MealDetail;