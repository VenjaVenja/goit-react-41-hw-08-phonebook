import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Label, Text, Input, AddContactBtn } from './LoginForm.styled.js';
import { logIn } from 'redux/auth/authOperations.js';

// import { toast } from 'react-toastify';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleInputChange = event => {
    const { name, value } = event.currentTarget;

    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  };

  const handleAddContact = ({ email, password }) => {
    const authUser = {
      email,
      password
    };
    console.log(authUser)
    dispatch(logIn(authUser))
  };

  const handleSubmit = event => {
    event.preventDefault();
    handleAddContact({ email, password });
    formFieldsReset();
  };

  const formFieldsReset = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Label>
          <Text>Email</Text>
          <Input
            type="email"
            name="email"
            value={email}
            onChange={handleInputChange}
            required
            placeholder="mail@mail"
          />
        </Label>
        <Label>
          <Text>Password</Text>
          <Input
            type="password"
            name="password"
            value={password}
            onChange={handleInputChange}
            required
            placeholder="password"
          />
        </Label>
        <AddContactBtn type="submit">Log In</AddContactBtn>
      </Form>
    </>
  );
};
