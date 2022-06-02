import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth/authSlice';

export const PrivateRoute = ({ children }) => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return <>{isLoggedIn && children}</>;
};
