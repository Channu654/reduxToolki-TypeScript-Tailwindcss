import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getRepoData } from '../Redux/Action';

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNoYW5uYXZlZXJwYXRpbDk5OUBnbWFpbC5jb20iLCJnaXRodWIiOiJodHRwczovL2dpdGh1Yi5jb20vQ2hhbm51NjU0IiwiaWF0IjoxNjY0MDg3ODE5LCJleHAiOjE2NjQ1MTk4MTl9.tIuc3dEk5m-c2zOdHM_8UN3QISEn85cVZuu15V6uu-Q
const Home = () => {
  const state = useSelector((state) => state?.repository);
  console.log('state:', state);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRepoData(state));
  }, [dispatch]);

  return (
    <div>
      {state.map((item) => {
        return <div></div>;
      })}
    </div>
  );
};

export default Home;
