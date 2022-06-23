import React from "react";
import styled from 'styled-components';

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

// const Input = styled.div`
//   font-size: ${regularSize};
//   margin-right: 5px;
// `

const P = styled.p`
  font-size: ${regularSize};
`
const Input = styled.input`
position: absolute;
opacity: 0;
cursor: pointer;
height: 0;
width: 0;

`

const Span = styled.span`
position: absolute;
top: 0;
left: 0;
height: 25px;
width: 25px;
background-color: #eee;
`

const Label = styled.label`
display: block;
position: relative;
padding-left: 35px;
margin-bottom: 12px;
cursor: pointer;
font-size: 22px;
-webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;
${Input} {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}
&:hover ${Input} ~ ${Span}{
  background-color: #ccc;
}
${Input}:checked ~ ${Span} {
  background-color: #2196F3;
}
${Span}:after {
  content: "";
  position: absolute;
  display: none;
}
${Input}:checked ~ ${Span}:after {
  display: block;
}
${Span}:after {
  left: 9px;
  top: 5px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
`



const Info = ({ showDone, setShowDone, count }) => {
  return (
    <Container>
      <Title>{count} item(s)</Title>
      <Label className="container">One
        <Input type="checkbox" checked={showDone} onChange={() => { setShowDone(!showDone) }} />
        <Span className="checkmark"></Span>
      </Label>


      {/* <Input>
        <input onChange={() => { setShowDone(!showDone) }} type="checkbox" value="Show done items" />
      </Input> */}
      {/* <P>Show done items</P> */}
    </Container>
  );
};

export default Info;