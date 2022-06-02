import { useSelector } from "react-redux";
import { getIsLoggedIn } from "redux/auth/authSlice";
import { Wrapper, HomePageLink, GreetingsBlock, GreetingsText } from "components/utils/Wrapper.styled";

const HomePage =()=>{
    const isLoggedIn = useSelector(getIsLoggedIn);

   return(
    <Wrapper>
        <h1>This you online ContactsBook!</h1>
      {!isLoggedIn && (
        <>
          <GreetingsText>HELLLO FRIEND!</GreetingsText>
          <GreetingsBlock>
          <p>You have to <HomePageLink to="/register">Register</HomePageLink> or 
          <HomePageLink to="/login"> Log In</HomePageLink></p>
          </GreetingsBlock>
          </>
      )}
    </Wrapper>
   )
};
export default HomePage;