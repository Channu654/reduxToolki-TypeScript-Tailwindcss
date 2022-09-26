import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { fetchUsers } from './userSlice';

export const UserView = () => {
  const user = useAppSelector((state) => state.user.users);
  console.log('user:', user);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div className='container'>
     
      {user?.products?.map((item) => {
        return (
          <div className='section'>
            <img src={item.avatar} alt='' className='img' />
            <p>{item.name}</p>
            <p>{item.price}</p>
            <p>{item.description}</p>
          </div>
        );
      })}
    </div>
  );
};
