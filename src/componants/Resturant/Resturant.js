import React, { useEffect, useState } from 'react';
import { Form, Row } from 'react-bootstrap';
import Meals from '../Meals/Meals';

const Resturant = () => {
    const [meals, setMeals] = useState([])
    const [searchText, setSearchText] = useState('')
    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`)
            .then(res => res.json())
            .then(data => setMeals(data.meals))
    }, [searchText])

    const handleSearchBox = e => {
        const searchTextValue = e.target.value
        setSearchText(searchTextValue)
    }

    return (
        <div>
            <Form.Control type="text" onChange={handleSearchBox} className='w-75 mx-auto mt-4' placeholder="Search Meal Here" />
            <br />
            
            <Row xs={3} md={4} className="g-4 px-5 py-1">
                {
                    meals?.map(meal => <Meals meal={meal}></Meals>)
                }
            </Row>
        </div>
    );
};

export default Resturant;