import React from 'react';
import Foods from '../component/Foods';

const FoodsContainer = ({
  // eslint-disable-next-line react/prop-types
  category, foods, error, loading,
}) => {
  let data;
  let filterBooks = '';
  if (loading) {
    data = 'loading';
  } else if (error) {
    data = 'Error Occured';
  } else {
    data = foods;
    if (category === 'All' || '') {
      filterBooks = data.map(food => (
        <Foods
          key={food.idMeal}
          uniqueKey={food.idMeal}
          foodName={food.strMeal}
          foodImage={food.strMealThumb}
        />
      ));
    } else {
      filterBooks = data.filter(food => food.strCategory === category).map(food => (
        <Foods
          key={food.idMeal}
          uniqueKey={food.idMeal}
          foodName={food.strMeal}
          foodImage={food.strMealThumb}
        />
      ));
    }
  }
  return (
    <div className="foodsContainer">
      {filterBooks}
    </div>
  );
};

export default FoodsContainer;
