import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const fetchContactsThunk = createAsyncThunk(
  'contacts/fetchContactsThunk',
  async (_, thunkAPI) => {
    try {
      const contacts = await axios.get('/contacts');
      return contacts.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const addContactThunk = createAsyncThunk(
  'contacts/addContactThunk',
  async (newContact, thunkAPI) => {
    try {
      const contacts = await axios.post('/contacts', newContact);
      thunkAPI.dispatch(fetchContactsThunk());
      // console.log(contacts)
      return contacts.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const deleteContactThunk = createAsyncThunk(
  'contacts/deleteContactsThunk',
  async (id, thunkAPI) => {
    try {
      const result = await axios.delete(`/contacts/${id}`);
      thunkAPI.dispatch(fetchContactsThunk());
      console.log(result.status);
      // return{}
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
