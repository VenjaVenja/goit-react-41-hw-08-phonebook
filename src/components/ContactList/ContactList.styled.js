import styled from '@emotion/styled';

export const ContactListEl = styled.ul`
  list-style: none;
  margin-top: 20px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
export const ContactListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  :not(:last-child) {
    margin-bottom: 10px;
  }
`;
