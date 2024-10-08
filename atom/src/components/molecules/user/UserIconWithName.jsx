import styled from "styled-components";

export const UserIconWidthName = (props) => {
  const { image, name } = props;
  return (
    <SContainer>
      <SImage height={130} width={130} src={image} alt={name} />
      <SName>{name}</SName>
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
`;

const SImage = styled.img`
  border-radius: 50%;
`;

const SName = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  color: #40514e;
`;
