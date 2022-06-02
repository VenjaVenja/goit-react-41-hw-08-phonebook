// import { Navigation } from "components/Navigation/Navigation";
import { AppBar } from "components/AppBar/AppBar";
import { Outlet } from "react-router-dom";
import { Container } from "./Layout.styled";
import { MainContent, Footer } from "./Layout.styled";

export const Layout = () => (
    <Container>
        <AppBar/>
        <MainContent>
        <Outlet/>
        </MainContent>
        <Footer>GOIT-Student-PRG, All rights reserved</Footer>
    </Container>
);