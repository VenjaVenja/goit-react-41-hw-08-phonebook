import { ContactForm } from "components/ContactForm/ContactForm";
import { ContactList } from "components/ContactList/ContactList";
import { Filter } from "components/Filter/Filter";
import { Wrapper } from "components/utils/Wrapper.styled";

const ContactsPage = () => (
    <Wrapper>
        <h2>You Contacts Book</h2>
        <ContactForm/>
        <Filter/>
        <ContactList/>
    </Wrapper>
);

export default ContactsPage;