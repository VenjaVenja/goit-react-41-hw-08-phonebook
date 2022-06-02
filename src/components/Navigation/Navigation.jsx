import { Link, NaviWrapper } from './Navigation.styled';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth/authSlice';
export const Navigation = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <NaviWrapper>
      <Link to='/'>Home</Link>
      {isLoggedIn && <Link to='/contacts'>Contacts</Link>}
    </NaviWrapper>
  );
};
