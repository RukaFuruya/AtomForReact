import styled from "styled-components";
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/user/UserCard";
const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    name: "waowao",
    image:
      "https://images.unsplash.com/photo-1601758124096-1fd661873b95?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    email: "aaaa@bbb.com",
    phone: "000-1111-2222",
    company: {
      name: "AAA株式会社",
    },
  };
});

export const Users = () => {
  return (
    <SCountainer>
      <h2>ユーザ一覧</h2>
      <SearchInput />
      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </SCountainer>
  );
};

const SCountainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 24px;
`;
