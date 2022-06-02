import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContactsThunk,
  addContactThunk,
  deleteContactThunk,
} from './contactsOperations.js';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    filter: '',
    isLoading: true,
    error: null,
  },
  reducers: {
    filteredContact: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: {
    [fetchContactsThunk.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [fetchContactsThunk.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    [fetchContactsThunk.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [addContactThunk.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [addContactThunk.fulfilled]: (state, _) => {
      state.isLoading = false;
      state.error = null;
    },
    [addContactThunk.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [deleteContactThunk.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [deleteContactThunk.fulfilled]: state => {
      state.isLoading = false;
      state.error = null;
    },
    [deleteContactThunk.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { filteredContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;

export const getFilter = state => state.contacts.filter;
export const getContacts = state => state.contacts.items;
export const getLoading = state => state.contacts.isLoading;
export const getError = state => state.contacts.error;
