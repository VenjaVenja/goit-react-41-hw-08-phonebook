import { AuthNav } from "components/AuthNav/AuthNav";
import { Navigation } from "components/Navigation/Navigation";
import { UserMenu } from "components/UserMenu/UserMenu";
import { Header } from "./AppBar.styled";
import { getIsLoggedIn } from "redux/auth/authSlice.js";
import { useSelector } from "react-redux";
 
export const AppBar = () => {
    const isLoggedIn = useSelector(getIsLoggedIn);

    return (
        <Header>
            <Navigation />
            {isLoggedIn ? <UserMenu/> : <AuthNav/>}
        </Header>
    )
};