import { Form, Label, Text, Input, AddContactBtn } from './RegistrationForm.styled.js';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations.js';

// import { toast } from 'react-toastify';

export const RegistrationForm = () => {

  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleInputChange = event => {
    const { name, value } = event.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;
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

  const handleAddContact = ({ name, email, password }) => {
    const newUser = { name, email, password };
    dispatch(register(newUser))
    // toast.success(`${name} added to contacts!`);
  };

  const handleSubmit = event => {
    event.preventDefault();
    handleAddContact({ name, email, password });
    formFieldsReset();
  };

  const formFieldsReset = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Label>
          <Text>Name</Text>
          <Input
            type="text"
            name="name"
            value={name}
            onChange={handleInputChange}
            required
            placeholder="Name"
          />
        </Label>

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
        <AddContactBtn type="submit">Registration</AddContactBtn>
      </Form>
    </>
  );
};
