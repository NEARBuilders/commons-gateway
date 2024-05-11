// const words = [
//   "projects",
//   "tools",
//   "solutions",
//   "teams",
//   "dreams",
//   "visions",
//   "systems",
//   "ecosystems",
//   "commons",
//   "futures",
// ];

// const Heading = styled.h1`
//   color: var(--FFFFFF, #fff);
//   font-family: Poppins;
//   font-size: 72px;
//   font-style: normal;
//   font-weight: 500;
//   letter-spacing: -2.88px;
//   height: 6.5rem;
//   background: linear-gradient(
//     86.6deg,
//     #eca227 -41.01%,
//     rgba(242, 103, 4, 0.9) 49.3%,
//     rgba(74, 33, 165, 0.41) 87.03%
//   );
//   -webkit-background-clip: text;
//   background-clip: text;
//   color: transparent; /* Hide the original text */
//   position: absolute;
//   left: 0;
//   top: ${(props) => props.top};
//   animation: scrollWord 3s ease infinite;
//   animation-delay: 1s;
// `;

// const WordWrapper = styled.div`
//   overflow-y: hidden;
//   position: relative;
//   flex-grow: 1;
//   flex-basis: 0;
//   width: 32rem;
//   height: 5.5rem;

//   @keyframes scrollWord {
//     0% {
//       transform: translateY(0px);
//     }
//     100% {
//       transform: translateY(-5.5rem);
//     }
//   }
// `;

// const [currentWordIndex, setCurrentWordIndex] = useState(0);

// useEffect(() => {
//   const interval = setInterval(() => {
//     setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
//   }, 4000); // Change the interval as needed (in milliseconds)

//   return () => clearInterval(interval);
// }, []);

// return (
//   <WordWrapper>
//     <Heading top="0">{words[currentWordIndex]}</Heading>
//     <Heading top="100%">{words[(currentWordIndex + 1) % words.length]}</Heading>
//   </WordWrapper>
// );

const words = [
  "projects",
  "tools",
  "solutions",
  "teams",
  "dreams",
  "visions",
  "systems",
  "ecosystems",
  "commons",
  "futures",
];

const Heading = styled.h1`
  color: var(--FFFFFF, #fff);
  font-family: Poppins;
  font-size: 72px;
  font-style: normal;
  font-weight: 500;
  letter-spacing: -2.88px;
  height: 6.5rem;
  background: linear-gradient(
    86.6deg,
    #eca227 -41.01%,
    rgba(242, 103, 4, 0.9) 49.3%,
    rgba(74, 33, 165, 0.41) 87.03%
  );
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent; /* Hide the original text */
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0; /* Initially hide both headings */
  animation: scrollWord 3s ease infinite;
`;

const WordWrapper = styled.div`
  overflow-y: hidden;
  position: relative;
  flex-grow: 1;
  flex-basis: 0;
  width: 32rem;
  height: 5.5rem;

  counter-reset: wordIndex; /* Reset counter for each WordWrapper */

  @keyframes scrollWord {
    from {
      counter-increment: wordIndex; /* Increment counter on animation start */
    }
    to {
      counter-increment: wordIndex; /* Increment counter on animation end */
    }
  }
`;

const [currentWordIndex, setCurrentWordIndex] = useState(0);

return (
  <WordWrapper>
    <Heading style={{ counter: currentWordIndex }}>{words[0]}</Heading>
    <Heading style={{ counter: currentWordIndex + 1 }}>{words[1]}</Heading>
  </WordWrapper>
);
