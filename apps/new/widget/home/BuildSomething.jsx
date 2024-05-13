const { Button } = VM.require("buildhub.near/widget/components") || {
  Button: () => <></>,
};

const Container = styled.div`
  background: linear-gradient(
    103deg,
    #161616 63.12%,
    rgba(30, 30, 30, 0.7) 100%
  );
`;

const CanvasSVG = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
    >
      <path
        d="M5.75634 9.74317C5.75634 10.0928 6.03977 10.3762 6.38939 10.3762C6.73901 10.3762 7.02244 10.0928 7.02244 9.74317H5.75634ZM7.51481 7.49232V8.12537V7.49232ZM12.0165 3.55334V2.92029V3.55334ZM10.8911 2.92029C10.5415 2.92029 10.258 3.20372 10.258 3.55334C10.258 3.90296 10.5415 4.18639 10.8911 4.18639V2.92029ZM3.01312 2.49825H9.76566V1.23215H3.01312V2.49825ZM9.76566 2.49825C10.0376 2.49825 10.258 2.7187 10.258 2.99063H11.5241C11.5241 2.01945 10.7368 1.23215 9.76566 1.23215V2.49825ZM10.258 2.99063V4.11605H11.5241V2.99063H10.258ZM10.258 4.11605C10.258 4.38798 10.0376 4.60842 9.76566 4.60842V5.87453C10.7368 5.87453 11.5241 5.08723 11.5241 4.11605H10.258ZM9.76566 4.60842H3.01312V5.87453H9.76566V4.60842ZM3.01312 4.60842C2.74119 4.60842 2.52075 4.38798 2.52075 4.11605H1.25464C1.25464 5.08723 2.04194 5.87453 3.01312 5.87453V4.60842ZM2.52075 4.11605V2.99063H1.25464V4.11605H2.52075ZM2.52075 2.99063C2.52075 2.7187 2.74119 2.49825 3.01312 2.49825V1.23215C2.04194 1.23215 1.25464 2.01945 1.25464 2.99063H2.52075ZM7.02244 9.74317V8.61775H5.75634V9.74317H7.02244ZM7.02244 8.61775C7.02244 8.48716 7.07432 8.36192 7.16665 8.26959L6.27139 7.37432C5.94161 7.70409 5.75634 8.15137 5.75634 8.61775H7.02244ZM7.16665 8.26959C7.25899 8.17725 7.38423 8.12537 7.51481 8.12537V6.85927C7.04844 6.85927 6.60116 7.04454 6.27139 7.37432L7.16665 8.26959ZM7.51481 8.12537H12.0165V6.85927H7.51481V8.12537ZM12.0165 8.12537C12.4829 8.12537 12.9302 7.94011 13.2599 7.61033L12.3647 6.71506C12.2723 6.8074 12.1471 6.85927 12.0165 6.85927V8.12537ZM13.2599 7.61033C13.5897 7.28055 13.775 6.83328 13.775 6.3669H12.5089C12.5089 6.49748 12.457 6.62272 12.3647 6.71506L13.2599 7.61033ZM13.775 6.3669V4.67876H12.5089V6.3669H13.775ZM13.775 4.67876C13.775 4.21239 13.5897 3.76511 13.2599 3.43533L12.3647 4.3306C12.457 4.42294 12.5089 4.54818 12.5089 4.67876H13.775ZM13.2599 3.43533C12.9302 3.10556 12.4829 2.92029 12.0165 2.92029V4.18639C12.1471 4.18639 12.2723 4.23827 12.3647 4.3306L13.2599 3.43533ZM12.0165 2.92029H10.8911V4.18639H12.0165V2.92029ZM5.82668 10.3762H6.9521V9.11012H5.82668V10.3762ZM6.9521 10.3762C6.91326 10.3762 6.88176 10.3447 6.88176 10.3059H8.14787C8.14787 9.64548 7.6125 9.11012 6.9521 9.11012V10.3762ZM6.88176 10.3059V12.5567H8.14787V10.3059H6.88176ZM6.88176 12.5567C6.88176 12.5179 6.91326 12.4864 6.9521 12.4864V13.7525C7.6125 13.7525 8.14787 13.2171 8.14787 12.5567H6.88176ZM6.9521 12.4864H5.82668V13.7525H6.9521V12.4864ZM5.82668 12.4864C5.86553 12.4864 5.89702 12.5179 5.89702 12.5567H4.63092C4.63092 13.2171 5.16628 13.7525 5.82668 13.7525V12.4864ZM5.89702 12.5567V10.3059H4.63092V12.5567H5.89702ZM5.89702 10.3059C5.89702 10.3447 5.86553 10.3762 5.82668 10.3762V9.11012C5.16628 9.11012 4.63092 9.64548 4.63092 10.3059H5.89702Z"
        fill="#EDEDED"
      />
    </svg>
  );
};

const Embeds = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="14"
      viewBox="0 0 15 14"
      fill="none"
    >
      <path
        d="M2.94913 2.32604H11.9525V1.05994H2.94913V2.32604ZM11.9525 2.32604C11.9137 2.32604 11.8822 2.29455 11.8822 2.25571H13.1483C13.1483 1.5953 12.6129 1.05994 11.9525 1.05994V2.32604ZM11.8822 2.25571V5.06926H13.1483V2.25571H11.8822ZM11.8822 5.06926C11.8822 5.03042 11.9137 4.99893 11.9525 4.99893V6.26503C12.6129 6.26503 13.1483 5.72967 13.1483 5.06926H11.8822ZM11.9525 4.99893H2.94913V6.26503H11.9525V4.99893ZM2.94913 4.99893C2.98797 4.99893 3.01946 5.03042 3.01946 5.06926H1.75336C1.75336 5.72967 2.28872 6.26503 2.94913 6.26503V4.99893ZM3.01946 5.06926V2.25571H1.75336V5.06926H3.01946ZM3.01946 2.25571C3.01946 2.29455 2.98797 2.32604 2.94913 2.32604V1.05994C2.28872 1.05994 1.75336 1.5953 1.75336 2.25571H3.01946ZM2.94913 8.51587H6.88811V7.24977H2.94913V8.51587ZM6.88811 8.51587C6.84926 8.51587 6.81777 8.48438 6.81777 8.44554H8.08387C8.08387 7.78513 7.54851 7.24977 6.88811 7.24977V8.51587ZM6.81777 8.44554V11.2591H8.08387V8.44554H6.81777ZM6.81777 11.2591C6.81777 11.2202 6.84926 11.1888 6.88811 11.1888V12.4549C7.54851 12.4549 8.08387 11.9195 8.08387 11.2591H6.81777ZM6.88811 11.1888H2.94913V12.4549H6.88811V11.1888ZM2.94913 11.1888C2.98797 11.1888 3.01946 11.2202 3.01946 11.2591H1.75336C1.75336 11.9195 2.28872 12.4549 2.94913 12.4549V11.1888ZM3.01946 11.2591V8.44554H1.75336V11.2591H3.01946ZM3.01946 8.44554C3.01946 8.48438 2.98797 8.51587 2.94913 8.51587V7.24977C2.28872 7.24977 1.75336 7.78513 1.75336 8.44554H3.01946ZM10.2644 8.51587H11.9525V7.24977H10.2644V8.51587ZM11.9525 8.51587C11.9137 8.51587 11.8822 8.48438 11.8822 8.44554H13.1483C13.1483 7.78513 12.6129 7.24977 11.9525 7.24977V8.51587ZM11.8822 8.44554V11.2591H13.1483V8.44554H11.8822ZM11.8822 11.2591C11.8822 11.2202 11.9137 11.1888 11.9525 11.1888V12.4549C12.6129 12.4549 13.1483 11.9195 13.1483 11.2591H11.8822ZM11.9525 11.1888H10.2644V12.4549H11.9525V11.1888ZM10.2644 11.1888C10.3032 11.1888 10.3347 11.2202 10.3347 11.2591H9.06862C9.06862 11.9195 9.60398 12.4549 10.2644 12.4549V11.1888ZM10.3347 11.2591V8.44554H9.06862V11.2591H10.3347ZM10.3347 8.44554C10.3347 8.48438 10.3032 8.51587 10.2644 8.51587V7.24977C9.60398 7.24977 9.06862 7.78513 9.06862 8.44554H10.3347Z"
        fill="#EDEDED"
      />
    </svg>
  );
};

const ExploreBG =
  "https://ipfs.near.social/ipfs/bafkreifciwtt633gqytb7ghqgdre7tjhbjexkz63yk4xtfxnptrmtdi2dm";

const ExploreTruckImg =
  "https://ipfs.near.social/ipfs/bafkreiadem25mvtu3bgrvenuchxgktcbihqattayx3qpxt7hsbecjj3mc4";

const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  padding-left: 329px;
  padding-right: 329px;
  padding-top: 72px;
  padding-bottom: 64px;
  flex-shrink: 0;
`;
const Heading = styled.h2`
  color: var(--FFFFFF, #fff);
  font-family: Poppins;
  font-size: 58px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%;
  letter-spacing: -2.88px;
  margin: 0;
  span {
    color: #793bd1;
    font-family: Poppins;
    font-size: 58px;
    font-style: normal;
    font-weight: 500;
    line-height: 120%;
    letter-spacing: -2.88px;
    margin: 0;
  }
`;
const Text = styled.p`
  align-self: stretch;
  color: var(--A0A0A0, #a0a0a0);
  text-align: center;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0;
`;

const BentoGrid = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
  padding-left: 48px;
  padding-right: 48px;
  padding-bottom: 72px;
`;
const BentoTopGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  gap: 16px;
`;

const ExploreBGImage = styled.img`
  position: absolute;
  width: 117.982px;
  height: 59.927px;

  left: 670px;
  top: 63.264px;
`;
const ExploreTruckBGImage = styled.img`
  position: absolute;
  width: 141px;
  height: 103px;
  right: 106.064px;
  bottom: 2.7px;
`;

const Explore = styled.div`
  position: relative;
  grid-column: 8 span / 8 span;
  display: flex;
  padding: 20.258px;
  padding-right: 200px;
  flex-direction: column;
  gap: 6.753px;
  border-radius: 16.881px;
  border: 1px solid rgba(74, 33, 165, 0.8);
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0.8) 0%,
    rgba(0, 0, 0, 0.5) 100%
  );

  h2 {
    /* display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1; */
    overflow: hidden;
    /* text-overflow: ellipsis; */
    font-family: Poppins;
    font-size: 40px;
    font-weight: 600;
    line-height: 150%; /* 60px */
    letter-spacing: -0.4px;
    background: linear-gradient(90deg, #eca227 0%, #f26704 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin: 0;
  }
  p {
    /* display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1; */
    overflow: hidden;
    color: var(--FFFFFF, #fff);
    font-family: Poppins;
    font-size: 16px;
    font-weight: 400;
    line-height: 150%; /* 24px */
    letter-spacing: -0.16px;
    margin: 0;
  }
`;
const Canvas = styled.div`
  display: flex;
  grid-column: 4 span / 4 span;
  padding: 20.258px;
  flex-direction: column;
  /* justify-content: center;
  align-items: center; */
  gap: 6.753px;
  border-radius: 16.881px;
  border: 1px solid var(--Yellow, #ffaf51);
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0.8) 0%,
    rgba(0, 0, 0, 0.5) 100%
  );
  h4 {
    overflow: hidden;
    color: var(--ffffff, #fff);
    text-overflow: ellipsis;
    white-space: nowrap;
    font-family: Poppins;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 150%; /* 30px */
    letter-spacing: -0.2px;
    margin: 0;
  }
  p {
    color: var(--b-0-b-0-b-0, #b0b0b0);
    font-family: Poppins;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%; /* 19.6px */
    letter-spacing: -0.14px;
    margin: 0;
  }
`;

const BentoBottomGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  gap: 16px;
`;

const BuildSomething = () => {
  return (
    <Container>
      <Title>
        <Heading>
          Build something <span>today!</span>
        </Heading>
        <Text>
          Create your personalized universe with customizable apps, video
          experiences, indifiual canvases, and profile templates, with
          everything.
        </Text>
      </Title>
      <BentoGrid>
        <BentoTopGrid>
          <Explore>
            <h2>Explore Apps</h2>
            <p>Supporting all kinds of useful integrations & examples.</p>
            <ExploreBGImage src={ExploreBG} />
            <ExploreTruckBGImage src={ExploreTruckImg} />
          </Explore>
          <Canvas>
            <div className="d-flex gap-2 align-items-end ">
              <Button
                type="icon"
                style={{
                  borderRadius: "30%",
                }}
              >
                <CanvasSVG />
              </Button>
              <h4>Canvas</h4>
            </div>
            <p>
              Create your own Canvas, every near account has it's own canvas.
            </p>
          </Canvas>
        </BentoTopGrid>
        <BentoBottomGrid>
          <div>test</div>
          <div>test</div>
          <div>test</div>
          <div>test</div>
          <div>test</div>
        </BentoBottomGrid>
      </BentoGrid>
    </Container>
  );
};

return { BuildSomething };
