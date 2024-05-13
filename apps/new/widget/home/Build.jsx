const { Button } = VM.require("buildhub.near/widget/components") || {
  Button: () => <></>,
};

const bosImage =
  "https://ipfs.near.social/ipfs/bafkreidpkotlkxxh4kz2jnzxxjs4i4boqv3dunrdfwvf53rkg7dlqdki5y";

const WorkspaceDocsSVG = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    >
      <path
        d="M10.6667 12L14.6667 8L10.6667 4M5.33334 4L1.33334 8L5.33334 12"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

const GettingStartedSVG = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
    >
      <g clip-path="url(#clip0_80_7834)">
        <path
          d="M14.2933 7.36669L8.16667 13.4934C7.4161 14.2439 6.39812 14.6656 5.33667 14.6656C4.27521 14.6656 3.25723 14.2439 2.50667 13.4934C1.7561 12.7428 1.33444 11.7248 1.33444 10.6634C1.33444 9.6019 1.7561 8.58392 2.50667 7.83336L8.22 2.12002C8.72038 1.61876 9.39938 1.33681 10.1076 1.33618C10.8159 1.33556 11.4954 1.61631 11.9967 2.11669C12.4979 2.61706 12.7799 3.29607 12.7805 4.00433C12.7811 4.71259 12.5004 5.3921 12 5.89336L6.27333 11.6067C6.02315 11.8569 5.68382 11.9974 5.33 11.9974C4.97618 11.9974 4.63685 11.8569 4.38667 11.6067C4.13648 11.3565 3.99593 11.0172 3.99593 10.6634C3.99593 10.3095 4.13648 9.97021 4.38667 9.72002L10.0467 4.06669"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_80_7834">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

const Container = styled.div`
  background: black;
  width: 100%;
  /* height: 404px; */
  padding: 48px 72px;
  display: flex;
  justify-content: space-between;
`;

const BuildContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 613px;
  flex-shrink: 0;

  h2 {
    color: var(--FFFFFF, #fff);
    font-family: Poppins;
    font-size: 58px;
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
      font-size: 58px;
      font-style: normal;
      font-weight: 500;
      line-height: 120%;
      letter-spacing: -2.88px;
      margin: 0;
    }
  }

  p {
    max-width: 421px;
    color: var(--Color-Neutral-neutral, #666);
    font-family: Poppins;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

const Cards = styled.div`
  padding-top: 43px;
  max-width: 615px;
  display: flex;
  flex-direction: column;
  gap: 34px;
  flex-shrink: 0;
`;

const BosContainer = styled.div`
  border-radius: 24px;
  background: var(--1E1E1E, #1e1e1e);
  display: flex;
  gap: 58.71px;
`;

const Text = styled.div`
  padding-top: 32px;
  padding-left: 40px;
  padding-bottom: 32px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  h4 {
    color: var(--FFFFFF, #fff);
    font-family: Poppins;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%;
    letter-spacing: -1.28px;
    text-transform: lowercase;
    margin: 0;
  }
  p {
    color: var(--Color-Neutral-neutral, #666);
    font-family: Poppins;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 0;
  }
`;

const BosVector = styled.img`
  width: 229.604px;
  height: 178px;
  flex-shrink: 0;
`;

const GettingStarted = styled.div`
  padding: 32px 74px 37px 41px;
  border-radius: 24px;
  background: #f5f5f5;
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex-shrink: 0;
  p {
    color: var(--1E1E1E, #1e1e1e);
    font-family: Poppins;
    font-size: 20px;
    font-weight: 400;
    line-height: 120%; /* 24px */
    letter-spacing: -0.8px;
    margin: 0;
  }
`;
const LearnMore = styled.div`
  padding: 32px 74px 37px 41px;
  border-radius: 24px;
  border: 1px solid var(--4D4D4D, #4d4d4d);
  background: #000;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;

  gap: 16px;
  p {
    color: #f5f5f5;
    font-family: Poppins;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%;
    letter-spacing: -0.8px;
    margin: 0;
  }
`;

const Build = () => {
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
      <Cards>
        <BosContainer>
          <Text>
            <h4>bos-workspace</h4>
            <p>For local development of open web apps.</p>
          </Text>
          <BosVector src={bosImage} />
        </BosContainer>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "15px",
          }}
        >
          <GettingStarted>
            <p>Getting Started</p>
            <Button
              style={{
                gap: "8px",
                borderRadius: "10px",
              }}
            >
              <GettingStartedSVG />
              Quickstart Guide
            </Button>
          </GettingStarted>
          <LearnMore>
            <p>Learn More</p>
            <Button
              style={{
                gap: "8px",
                borderRadius: "10px",
              }}
            >
              <WorkspaceDocsSVG />
              Workspace Docs
            </Button>
          </LearnMore>
        </div>
      </Cards>
    </Container>
  );
};
return { Build };
