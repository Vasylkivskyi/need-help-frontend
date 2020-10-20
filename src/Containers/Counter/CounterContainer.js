import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { startClock } from './counterActions';
import Examples from '../../Components/examples';
// import './counterContainer.scss';

const CounterContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(startClock());
  }, [dispatch]);

  return (
    <div className="counter-container">
      <Examples />
    </div>
  );
};

export default CounterContainer;
