const { Button } = VM.require("buildhub.near/widget/components") || {
  Button: () => <></>,
};

const HeaderContainer = styled.div`
  width: 100%;
  /* height: 840px; */
  background: black;
`;

const HeaderHeading = styled.div`
  /* height: 202px; */
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: black;
  gap: 24px;
  padding: 120px 80px;

  p {
    font-family: Poppins;
    font-size: 20px;
    font-weight: 400;
    line-height: 28px;
    text-align: left;
    color: var(--A0A0A0, hsla(0, 0%, 63%, 1));
    margin: 0;
    padding: 0;
  }
`;

const Heading = styled.h1`
  color: var(--FFFFFF, #fff);
  font-family: Poppins;
  font-size: 72px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%; /* 86.4px */
  letter-spacing: -2.88px;
  background: linear-gradient(
    86.6deg,
    #eca227 -41.01%,
    rgba(242, 103, 4, 0.9) 49.3%,
    rgba(74, 33, 165, 0.41) 87.03%
  );
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent; /* Hide the original text */
`;

const HeaderButtons = styled.div`
  width: 293px;
  height: 40px;
  display: flex;
  gap: 24px;
`;

const HeaderContent = styled.div`
  display: flex;
  padding: 24px;

  p {
    color: hsla(0, 0%, 47%, 1);
    margin: 0;
    padding: 0;
  }
  h4 {
    color: #fff;
  }
`;

return (
  <HeaderContainer>
    <HeaderHeading>
      <div className="d-flex align-items-center gap-3">
        <Heading
          style={{
            backtground: "black",
            color: "white",
            flexShrink: 0,
            flexGrow: 1,
            flexBasis: 0,
            margin: 0,
            textAlign: "right",
          }}
        >
          Let's build
        </Heading>
        <Widget src="new/widget/home.MovingHeader" />
      </div>
      <div>
        <p
          style={{
            margin: 0,
            padding: 0,
          }}
        >
          Designed to support builders in a multi-chain ecosystem.
        </p>
      </div>
      <div
        style={{
          display: "flex",
          gap: "24px",
        }}
      >
        <Button
          variant="outline"
          style={{
            background:
              "linear-gradient(86.68deg, #ECA227 1.24%, #FC8119 55.76%, #9747FF 108.89%)",
            border: "none",
            color: "black",
            padding: "10px 20px 10px 20px",
          }}
        >
          Start Building
        </Button>
        <Button
          variant="outline"
          style={{
            background: "hsla(233, 10%, 15%, 1)",
            border: "none",
            color: "white",
            padding: "10px 20px 10px 20px",
          }}
        >
          Explore Apps
        </Button>
      </div>
    </HeaderHeading>
    <HeaderContent>
      <div
        style={{
          width: "437px",
          height: "480px",
          paddingleft: "53px",
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          borderRadius: "24px",
          opacity: "0px",
          positition: "relative",
        }}
      >
        <div
          style={{
            width: "437px",
            height: "255px",

            borderRadius: "24px 24px 0px 0px",
            padding: "24px",
            opacity: "0px",
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            background: "var(--1E1E1E, hsla(0, 0%, 12%, 1))",
          }}
        >
          <div>
            <p>What do we build?</p>
            <div>
              <h4>Supporting useful integrations</h4>
              <p>
                We build versatile applications, including Canvas, Profiles,
                Video, Events, Tasks, and more, support and practical examples.
              </p>
            </div>
          </div>
          <div>
            <Button
              variant="primary"
              style={{
                background: "hsla(37, 84%, 54%, 1) !important",
              }}
            >
              See Library
            </Button>
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            top: 0,
            background:
              "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 45.8%, #000 122.22%)",
          }}
        >
          hello
        </div>
      </div>
      <div></div>
      <div></div>
    </HeaderContent>
  </HeaderContainer>
);
