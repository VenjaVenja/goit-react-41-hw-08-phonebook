import { Link, NaviWrapper, BtnText } from './AuthNav.styled.js';
import {HiOutlineLogin} from 'react-icons/hi';

export const AuthNav = () => {
  return (
    <NaviWrapper>
      <Link to='/register'>Registration</Link>
      <Link to='/login'><BtnText>Log In</BtnText><HiOutlineLogin/></Link>
    </NaviWrapper>
  );
};
