import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';

const Filter = () => {
   const fetch = useAppSelector((state) => state.user.users);
  //  console.log('fetch:', fetch)
  const [category, setCategory] = useState([]);
  const dispatch = useAppDispatch();


  const handleCategory = () => {};
  return (
    <div>
      <h1>filter</h1>
      <div className='filter'>
        <input
          type='checkbox'
          value='jewelery'
          onChange={handleCategory}
          defaultChecked={category.includes('Clothing')}
        />
        <label htmlFor=''>Clothes</label>
        <input
          type='checkbox'
          value='jewelery'
          onChange={handleCategory}
          defaultChecked={category.includes('Electronics')}
        />
        <label htmlFor=''>Electronics</label>
      </div>
    </div>
  );
};

export default Filter;
