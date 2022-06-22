import styled from 'styled-components';

const Container = styled.div`
  padding-top
  color: rgba(112, 112, 112, 255);
`

const Title = styled.div`
  font-size: 140px;
  font-weight: 100;
`
const Info = styled.h3`
  font-size: 30px;
  font-weight: 100;
  letter-spacing: 1px;
`

const Span = styled.span`
  font-weight: 700;
`

const Navigation = () => {
  return (
    <Container>
      <Title>TODO<Span>LIST</Span></Title>
      <Info>A Simple todolist built react hooks & ccontext</Info>
    </Container>
  );
};

export default Navigation;
