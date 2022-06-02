import { useDispatch } from "react-redux";
import { filteredContact } from "redux/contacts/contactsSlice";
import { FilterLabel, FilterText, FilterInput } from "./Filter.styled";

export const Filter = () => {
  const dispatch = useDispatch();

  const handleChangeFilter = event => {
    const { value } = event.currentTarget;
    dispatch(filteredContact(value))
  }; 

  return (
    <FilterLabel>
      <FilterText>Find contacts by name</FilterText>
    <FilterInput
      type="text"
      name="filter"
      onChange={handleChangeFilter} />
    </FilterLabel>
  )};