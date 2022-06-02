import { lazy, Suspense } from "react";
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { PublicRoute } from './PublicRoute/PublicRoute';
import { PrivateRoute } from './PrivateRoute/PrivateRoute';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Container } from './Container/Container.styled';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchCurrentUser } from 'redux/auth/authOperations';
import { getIsFetchingCurrentUser } from 'redux/auth/authSlice';

const HomePage = lazy(() => import("pages/HomePage.jsx"));
const RegistrationPage = lazy(() => import("pages/RegistrationPage.jsx"));
const LoginPage = lazy(() => import("pages/LoginPage.jsx"));
const ContactsPage = lazy(() => import("pages/ContactsPage.jsx"));
const NotFoundPage = lazy(() => import("pages/NotFoundPage.jsx"));

export const App = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(getIsFetchingCurrentUser);
  console.log(currentUser);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return currentUser ? (
    <p>Loading....</p>
  ) : (
    <Suspense>
    <Container>
    <ToastContainer/>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="register"
            element={
              <PublicRoute restricted>
                <RegistrationPage />
              </PublicRoute>
            }
          />
          <Route
            path="login"
            element={
              <PublicRoute restricted>
                <LoginPage />
              </PublicRoute>
            }
          />
          <Route
            path="contacts"
            element={
              <PrivateRoute restricted>
                <ContactsPage />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Container>
    </Suspense>
  );
};
