import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Pagination from 'react-js-pagination';
import Foods from '../component/Foods';
import Loading from '../component/Loading';

const FoodsContainer = ({
  category, foods, error, loading,
}) => {
  const [activePage, setActivePage] = useState(1);
  const [startPoint, setStartPoint] = useState(0);
  const [endPoint, setEndPoint] = useState(4);
  let data;
  let filterBooks = '';
  let paginationTotalElements;
  const handlePageChange = pageNumber => {
    setActivePage(pageNumber);
    setStartPoint((pageNumber - 1) * 4);
    setEndPoint(pageNumber * 4);
  };
  if (loading) {
    return (
      <Loading color="blue" loading={loading} />
    );
  } if (error) {
    data = 'Error Occured';
  } else {
    data = foods;
    if (category === 'All' || '') {
      paginationTotalElements = foods.length;

      filterBooks = data.slice(startPoint, endPoint).map(food => (
        <Foods
          key={food.idMeal}
          uniqueKey={food.idMeal}
          foodName={food.strMeal}
          foodImage={food.strMealThumb}
        />
      ));
    } else {
      filterBooks = data.filter(
        food => food.strCategory === category,
      ).slice(startPoint, endPoint).map(food => (
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
    <div>
      <div className="foodsContainer">
        {filterBooks}
      </div>
      <div>
        <Pagination
          activePage={activePage}
          itemsCountPerPage={4}
          totalItemsCount={paginationTotalElements}
          itemClass="paginationLi"
          linkClass="paginationLink"
          pageRangeDisplayed={3}
          onChange={handlePageChange}
          activeClass="active"
        />
      </div>
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
