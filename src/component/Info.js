import React from "react";
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80vw;
  margin-bottom: 20px;
`;

const Title = styled.div`
  flex: 1;
  text-align: left;
`

const Input = styled.div`
  margin-right: 5px;
`

const Info = ({ showDone, setShowDone, count }) => {
  return (
    <Container>
      <Title>{count} item(s)</Title>
      <Input>
        <input onChange={() => { setShowDone(!showDone) }} type="checkbox" value="Show done items" />
      </Input>
      <p>Show done items</p>
    </Container>
  );
};

export default Info;