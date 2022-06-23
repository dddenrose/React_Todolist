import styled from 'styled-components';

const Container = styled.div`
  margin: 30px 0 60px 0;
  // color: rgba(112, 112, 112, 255);
`

const Title = styled.div`
  font-size: 140px;
  font-weight: 100;
  letter-spacing: 3px;
  margin-bottom: 20px
`
const Info = styled.h3`
  font-size: 40px;
  font-weight: 100;
  letter-spacing: 1px;
`

const Span = styled.span`
  font-weight: 700;
  letter-spacing: 3px;
`

const Navigation = () => {
  return (
    <Container>
      <Title>TODO<Span>LIST</Span></Title>
      <Info>A Simple todolist built react hooks & context</Info>
    </Container>
  );
};

export default Navigation;
