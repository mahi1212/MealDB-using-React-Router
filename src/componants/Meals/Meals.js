import React from 'react';
import { Card, Col, Button} from 'react-bootstrap'
import { useHistory } from 'react-router';

const Meals = (props) => {
    const { strMeal, strInstructions , strMealThumb, idMeal} = props.meal
    // console.log(props)

    const history = useHistory()
    const url = `/resturant/${idMeal}`
    const handleAddButton = () =>{
        history.push(url)
    }

    return (
        <div>
            <Col>
                <Card>
                    <Card.Img variant="top" height='200px' src={strMealThumb} />
                    <Card.Body>
                        <Card.Title className='text-success text-uppercase'>{strMeal}</Card.Title>
                        <Card.Text className='text-secondary'>
                            {strInstructions.slice(0,140)}
                        </Card.Text>
                        <Button onClick={handleAddButton} variant="warning" className='text-white'>ORDER NOW</Button>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Meals;