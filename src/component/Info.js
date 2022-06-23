import React from "react";
import styled from 'styled-components';
import Label from "./Label";

const regularSize = "24px";
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80vw;
  margin-bottom: 20px;
`;

const Title = styled.div`
font-size: ${regularSize};
  flex: 1;
  text-align: left;
`

const Info = ({ showDone, setShowDone, count }) => {
  return (
    <Container>
      <Title>{count} item(s)</Title>
      <Label showDone={showDone} setShowDone={setShowDone}></Label>
    </Container>
  );
};

export default Info;