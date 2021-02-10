import React from 'react';
import PropTypes from 'prop-types';
import Foods from '../component/Foods';
import Loading from '../component/Loading';

const FoodsContainer = ({
  category, foods, error, loading,
}) => {
  let data;
  let filterBooks = '';
  if (loading) {
    return (
      <Loading color="blue" loading={loading} />
    );
  } if (error) {
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

FoodsContainer.propTypes = {
  category: PropTypes.string,
  foods: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  error: PropTypes.string,
  loading: PropTypes.bool,
};

FoodsContainer.defaultProps = {
  category: '',
  error: '',
  loading: false,
};

export default FoodsContainer;
