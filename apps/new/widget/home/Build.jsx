const Container = styled.div`
  background: black;
  width: 100%;
  /* height: 404px; */
  padding: 48px 72px;
  display: flex;
  gap: 117px;
`;

const BuildContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  h2 {
    color: var(--FFFFFF, #fff);
    font-family: Poppins;
    font-size: 72px;
    font-style: normal;
    font-weight: 500;
    line-height: 120%; /* 86.4px */
    letter-spacing: -2.88px;
    margin: 0;

    span {
      background: linear-gradient(87deg, #eca227 39.02%, #fc8119 108.97%);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-family: Poppins;
      font-size: 72px;
      font-style: normal;
      font-weight: 500;
      line-height: 120%;
      letter-spacing: -2.88px;
    }
  }

  p {
    max-width: 421px;
    color: var(--Color-Neutral-neutral, #666);
    font-family: Poppins;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

const Cards = styled.div``;

return (
  <Container>
    <BuildContainer>
      <h2>
        Build in <span>one space</span>
      </h2>
      <p>
        We provide support systems for open-source contributors to help each
        other, learn together, and solve real problems.
        <br />
        <br />
        To support this, we've build a dev environment with a versatile set of
        tools for interacting with the blockchain OS, enabling greater
        composability across front end and back end frameworks.
      </p>
    </BuildContainer>
    <Cards>Hello</Cards>
  </Container>
);
