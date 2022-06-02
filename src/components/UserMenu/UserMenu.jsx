import { useDispatch, useSelector } from "react-redux";
import { getUserName, getUserEmail } from "redux/auth/authSlice";
import { logOut } from "redux/auth/authOperations";
import { 
    LogOutBtn, 
    BtnText, 
    UserText, 
    UserMenuBar
} from "./UserMenu.styled";
import {HiOutlineLogout} from 'react-icons/hi';

export const UserMenu = ()=>{
    const dispatch = useDispatch();
    const userName = useSelector(getUserName);
    const userEmail = useSelector(getUserEmail);

    return(
<UserMenuBar>
    <UserText>Welcome, {userName}!</UserText>
    <UserText>{userEmail}</UserText>
    <LogOutBtn to="/" onClick={()=>{dispatch(logOut())}}><BtnText>Log Out</BtnText><HiOutlineLogout/></LogOutBtn>
</UserMenuBar>
    )
};