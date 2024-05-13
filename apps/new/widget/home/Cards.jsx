const { Button } = VM.require("buildhub.near/widget/components") || {
  Button: () => <></>,
};

const FeedbackImage =
  "https://ipfs.near.social/ipfs/bafkreifisyywopbuvyq7qtbsx4l3zvbyyasappfohijlco64wlgxhgu3n4";

const RewardsImage =
  "https://ipfs.near.social/ipfs/bafkreibvr2pf2pvxi4bjdogyxo7elfduhresivqg3msqnegrbxy5laj52u";

const noise =
  "https://onedrive.live.com/embed?resid=DB95EB47BE356546%215827&authkey=%21AMNyTJWjGaSnGqQ&width=5760&height=3072";

const TruckSVG = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="396"
      height="215"
      viewBox="0 0 396 215"
      fill="none"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M231 8.26923V0H313.5V8.26923H272.25H247.5H231Z"
        fill="black"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M231 8.26923L231 16.5385H239.25H264H280.5H313.5L313.5 8.26923L321.75 8.26929V57.8847H313.5V41.3462V24.8077H305.25V41.3462V66.1539V74.4231H297V57.8847V33.077V24.8077H288.75V33.077H280.5V24.8077H272.25V33.077H264V24.8077H231V33.077H222.75V8.26929L231 8.26923Z"
        fill="black"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M222.75 33.077L222.75 49.6154V57.8847H214.5V33.077L222.75 33.077Z"
        fill="black"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M264 33.077L264 57.8847H255.75V49.6154V33.077L264 33.077Z"
        fill="black"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M272.25 33.077H280.5L280.5 57.8847H272.25L272.25 33.077Z"
        fill="black"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M115.5 66.154V57.8847H140.25V74.4232H165V107.5H156.75V99.2309H148.5V124.039H140.25V107.5V90.9616H156.75V82.6924H140.25V90.9616H132V74.4232V66.154H115.5Z"
        fill="black"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M214.5 57.8847L214.5 74.4232H222.75V82.6924H206.25V90.9616H189.75V82.6924H181.5V74.4232H206.25V57.8847L214.5 57.8847Z"
        fill="black"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M255.75 57.8847L255.75 74.4232H222.75L222.75 66.154H247.5V57.8847L255.75 57.8847Z"
        fill="black"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M264 57.8847H272.25L272.25 74.4232H264L264 57.8847Z"
        fill="black"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M321.75 57.8847L346.5 57.8847V66.154H330V90.9616H321.75L321.75 57.8847Z"
        fill="black"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M115.5 66.154L115.499 115.769H107.249V107.5H98.9995V99.2308H107.249V66.1539L115.5 66.154Z"
        fill="black"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M165 74.4232L165 66.1539H181.5L181.5 74.4232H165Z"
        fill="black"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M346.5 66.154L379.5 66.1539V74.4231H354.75H346.5L346.5 66.154Z"
        fill="black"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M255.75 74.4232H264L264 90.9616H280.5V82.6923H288.75V90.9616L321.75 90.9616L321.75 99.2308H305.25H272.25H231V90.9616H239.25H255.75V82.6923L255.75 74.4232Z"
        fill="black"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M288.75 82.6923L288.75 74.4231L297 74.4231L297 82.6923H288.75Z"
        fill="black"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M379.5 74.4231L387.75 74.4231V99.2308H379.5L379.5 74.4231Z"
        fill="black"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M181.5 99.2308V90.9616L189.75 90.9616V99.2308H181.5Z"
        fill="black"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M173.249 107.5V99.2309L181.5 99.2308L181.499 107.5H173.249Z"
        fill="black"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M231 99.2308L230.999 107.5H239.249H255.749V115.769H206.249V107.5H214.499V99.2309H222.749L231 99.2308Z"
        fill="black"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M387.75 99.2308L396 99.2309V132.308H387.75V140.577H379.5V132.308V124.039H387.75V99.2308Z"
        fill="black"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M90.7493 115.769V107.5L98.9995 107.5L98.9993 115.769H90.7493Z"
        fill="black"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M165 115.769L165 107.5L173.249 107.5L173.25 115.769H165Z"
        fill="black"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M330 115.769V107.5H371.25V115.769H330Z"
        fill="black"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M82.4999 124.038V115.769L90.7493 115.769L90.7499 124.038H82.4999Z"
        fill="black"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M115.499 115.769L123.75 115.769V124.038H115.5L115.499 115.769Z"
        fill="black"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M156.75 124.038V115.769L165 115.769L165 124.038H156.75Z"
        fill="black"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M198 124.038V115.769L206.249 115.769L206.25 124.038H198Z"
        fill="black"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M255.749 115.769L264 115.769V124.038H255.75L255.749 115.769Z"
        fill="black"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M330 115.769L330 173.654H321.75V115.769L330 115.769Z"
        fill="black"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M371.25 115.769L379.5 115.769L379.5 124.039L371.25 124.038L371.25 115.769Z"
        fill="black"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M82.4999 124.038L82.5 132.308H90.7499H107.25H123.75L123.75 124.038L132 124.038V132.308H148.5L148.5 124.039L156.75 124.038L156.75 140.577H148.5H140.25V157.115V165.385H132V148.846V140.577H65.9999H57.7499H49.5V157.115V165.385H41.25V132.308H74.2499V124.038L82.4999 124.038Z"
        fill="black"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M198 124.038L198 140.577H189.75V132.308V124.038L198 124.038Z"
        fill="black"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M264 124.038L272.25 124.038V140.577H264V132.308L264 124.038Z"
        fill="black"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M231 140.577V132.308H247.5V140.577H231Z"
        fill="black"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M346.5 140.577V132.308H363V140.577H346.5Z"
        fill="black"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M156.75 140.577L165 140.577V148.846H156.75L156.75 140.577Z"
        fill="black"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M189.75 140.577L189.75 181.923H181.5V165.385H173.25V198.462H165L165 148.846H173.25V157.115H181.5V140.577L189.75 140.577Z"
        fill="black"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M231 140.577L231 165.385V181.923H222.75V140.577L231 140.577Z"
        fill="black"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M247.5 140.577L255.75 140.577V181.923H247.5L247.5 140.577Z"
        fill="black"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M272.25 140.577L280.5 140.577V165.385H288.75V173.654H280.5V181.923H272.25L272.25 140.577Z"
        fill="black"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M346.5 140.577L346.5 181.923H338.25V140.577L346.5 140.577Z"
        fill="black"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M363 140.577L371.25 140.577V181.923H363L363 140.577Z"
        fill="black"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M387.75 140.577L396 140.577V181.923H387.75L387.75 140.577Z"
        fill="black"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M41.25 165.385L41.2498 181.923H32.9998V165.385H41.25Z"
        fill="black"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M132 165.385L132 181.923H123.75V165.385H132Z"
        fill="black"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M288.75 173.654L321.75 173.654L321.75 181.923H313.5V198.462H305.25V181.923H288.75L288.75 173.654Z"
        fill="black"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M24.7497 190.192V181.923L32.9998 181.923L32.9997 190.192H24.7497Z"
        fill="black"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M115.5 190.192V181.923L123.75 181.923L123.75 190.192H115.5Z"
        fill="black"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M189.75 181.923L198 181.923V198.462H189.75L189.75 181.923Z"
        fill="black"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M231 181.923H247.5L247.5 190.192H231L231 181.923Z"
        fill="black"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M272.25 181.923L272.25 198.462H264V181.923L272.25 181.923Z"
        fill="black"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M346.5 181.923H363L363 190.192H346.5L346.5 181.923Z"
        fill="black"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M387.75 181.923L387.75 198.462H379.5V181.923L387.75 181.923Z"
        fill="black"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8.25015 198.462V190.192L24.7497 190.192L24.7501 198.462H8.25015Z"
        fill="black"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M115.5 190.192L115.5 198.462H107.25V190.192L115.5 190.192Z"
        fill="black"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0 198.462L8.25015 198.462L8.24999 206.731H16.5H57.75H115.5H156.75V215H0V198.462Z"
        fill="black"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M156.75 206.731L156.75 198.462L165 198.462L165 206.731H156.75Z"
        fill="black"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M198 198.462L206.25 198.462V206.731H198L198 198.462Z"
        fill="black"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M255.75 206.731V198.462L264 198.462L264 206.731H255.75Z"
        fill="black"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M313.5 198.462L321.749 198.462V206.731H313.499L313.5 198.462Z"
        fill="black"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M371.25 206.731V198.462L379.5 198.462L379.5 206.731H371.25Z"
        fill="black"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M206.249 215L206.25 206.731H255.75L255.749 215H206.249Z"
        fill="black"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M321.75 215L321.749 206.731H371.25L371.25 215H321.75Z"
        fill="black"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M272.25 33.077V24.8077H280.5V33.077H272.25Z"
        fill="#46474C"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M305.25 24.8077H313.5V41.3462V57.8847H321.75L321.75 90.9616L288.75 90.9616V82.6923H297L297 74.4231H305.25V66.1539V41.3462V24.8077Z"
        fill="#46474C"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M272.25 33.077L272.25 57.8847H264L264 33.077H272.25Z"
        fill="#46474C"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M255.75 57.8847H264L264 74.4232H255.75L255.75 57.8847Z"
        fill="#46474C"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M231 24.8077H264V33.077L255.75 33.077V49.6154L247.5 49.6155V57.8847L231 57.8847V49.6155L222.75 49.6154L222.75 33.077H231V24.8077Z"
        fill="#777C7E"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M288.75 24.8077H297V33.077L296.999 49.6155H288.749V57.8847L280.5 57.8847L280.5 33.077H288.75V24.8077Z"
        fill="#777C7E"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M222.75 49.6154L231 49.6155V57.8847L247.5 57.8847V66.154H222.75L222.75 74.4232H214.5L214.5 57.8847H222.75V49.6154Z"
        fill="#D0E4EC"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M247.5 57.8847V49.6155L255.75 49.6154V57.8847L247.5 57.8847Z"
        fill="#D0E4EC"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M288.749 49.6155H296.999L297 57.8847V74.4231L288.75 74.4231L288.75 82.6923H280.5V90.9616H264L264 74.4232H272.25L272.25 57.8847H280.5L288.749 57.8847V49.6155Z"
        fill="#D0E4EC"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M140.25 90.9616V82.6924H156.75V90.9616H140.25Z"
        fill="#9EA5C1"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M231 8.26923H247.5L247.5 16.5385L239.25 16.5385H231L231 8.26923Z"
        fill="#4A21A5"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M123.749 74.4231V99.2308H115.499L115.5 66.154H132V74.4232L123.749 74.4231Z"
        fill="#4A21A5"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M164.999 82.6923L165 74.4232L173.249 74.4231V82.6923H164.999Z"
        fill="#4A21A5"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M222.75 82.6924V74.4232L239.25 74.4231V82.6923L222.75 82.6924Z"
        fill="#4A21A5"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M206.25 90.9616V82.6924H222.75L222.749 90.9615L206.25 90.9616Z"
        fill="#4A21A5"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M189.75 99.2308V90.9616H206.25L206.249 99.2308H189.75Z"
        fill="#4A21A5"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M181.499 107.5L181.5 99.2308H189.75L189.749 107.5H181.499Z"
        fill="#4A21A5"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M98.9993 115.769L98.9995 107.5H107.249V115.769L98.9993 115.769Z"
        fill="#4A21A5"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M173.25 115.769L173.249 107.5H181.499L181.499 115.769H173.25Z"
        fill="#4A21A5"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M90.7499 124.038L90.7493 115.769H98.9993L98.9989 124.038H90.7499Z"
        fill="#4A21A5"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M165 124.038L165 115.769H173.25L173.249 124.038H165Z"
        fill="#4A21A5"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M82.4999 124.038H90.7499L90.7499 132.308H82.5L82.4999 124.038Z"
        fill="#4A21A5"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M156.749 132.308L156.75 124.038H165L164.999 132.308H156.749Z"
        fill="#4A21A5"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M247.5 8.26923H272.25L272.25 16.5385L264 16.5385L247.5 16.5385L247.5 8.26923Z"
        fill="#4A21A5"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M379.5 99.2308L363 99.2308V90.9616L330 90.9616V66.154H346.5L346.5 74.4231H354.75H379.5L379.5 99.2308Z"
        fill="#4A21A5"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M115.499 115.769L115.499 99.2308H123.749V74.4231L132 74.4232V90.9616H140.25V107.5L132 107.5V115.769L123.75 115.769L115.499 115.769Z"
        fill="#4A21A5"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M181.5 74.4232V82.6924V90.9616L173.25 90.9616L173.249 99.2309L165 99.2308L164.999 82.6923H173.249V74.4231L181.5 74.4232Z"
        fill="#4A21A5"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M239.25 82.6923V74.4231L255.75 74.4232L255.75 82.6923H239.25Z"
        fill="#4A21A5"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M222.749 90.9615L222.75 82.6924L239.25 82.6923L239.25 90.9616H231L222.749 90.9615Z"
        fill="#4A21A5"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M206.249 99.2308L206.25 90.9616L222.749 90.9615L222.749 99.2309H214.499L206.249 99.2308Z"
        fill="#4A21A5"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M206.249 99.2308L206.249 107.5H198L198 115.769L189.75 115.769L189.75 124.038L181.5 124.039V132.308H173.25V140.577L156.75 140.577L156.749 132.308H164.999L165 124.038H173.249L173.25 115.769H181.499L181.499 107.5H189.749L189.75 99.2308H206.249Z"
        fill="#4A21A5"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M313.501 115.769V107.5H305.251H264.001H239.249H230.999L231 99.2308H272.25H305.25H321.75L321.75 115.769L313.501 115.769Z"
        fill="#4A21A5"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M379.5 99.2308H387.75L387.75 107.5H379.5L379.5 99.2308Z"
        fill="#4A21A5"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M115.499 115.769L115.5 124.038H107.25L107.25 132.308H90.7499L90.7499 124.038H98.9989L98.9993 115.769L107.249 115.769H115.499Z"
        fill="#4A21A5"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M313.501 115.769L313.5 124.038H288.75H280.5V115.769L313.501 115.769Z"
        fill="#4A21A5"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M272.25 8.26923H313.5L313.5 16.5385H280.5L272.25 16.5385L272.25 8.26923Z"
        fill="#7C5BC4"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M181.5 90.9616V82.6924H189.75V90.9616L181.5 90.9616Z"
        fill="#7C5BC4"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M239.25 90.9616L239.25 82.6923H255.75V90.9616H239.25Z"
        fill="#7C5BC4"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M173.249 99.2309L173.25 90.9616L181.5 90.9616V99.2308L173.249 99.2309Z"
        fill="#7C5BC4"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M222.749 99.2309L222.749 90.9615L231 90.9616V99.2308L222.749 99.2309Z"
        fill="#7C5BC4"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M387.75 107.5L387.75 124.039H379.5L379.5 115.769L371.25 115.769V107.5H330V115.769L321.75 115.769L321.75 99.2308L321.75 90.9616H330L363 90.9616V99.2308L379.5 99.2308L379.5 107.5H387.75Z"
        fill="#7C5BC4"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M173.249 99.2309V107.5L165 107.5L165 99.2308L173.249 99.2309Z"
        fill="#7C5BC4"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M206.249 107.5L206.249 99.2308L214.499 99.2309V107.5H206.249Z"
        fill="#7C5BC4"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M123.75 124.038V115.769L132 115.769V107.5L140.25 107.5V124.039H148.5L148.5 132.308H132V124.038L123.75 124.038Z"
        fill="#7C5BC4"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M198 115.769L198 107.5H206.249V115.769L198 115.769Z"
        fill="#7C5BC4"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M313.501 115.769L280.5 115.769L272.25 115.769V107.5L305.251 107.5H313.501V115.769Z"
        fill="#7C5BC4"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M189.75 124.038L189.75 115.769L198 115.769V124.038L189.75 124.038Z"
        fill="#7C5BC4"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M313.501 115.769L321.75 115.769V173.654L288.75 173.654V165.385L313.5 165.385V157.115H288.75V148.846H313.5V140.577H288.75V132.308H313.5L313.5 124.038L313.501 115.769Z"
        fill="#7C5BC4"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M181.5 132.308V124.039L189.75 124.038V132.308L181.5 132.308Z"
        fill="#7C5BC4"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M173.25 140.577V132.308H181.5L181.5 140.577L173.25 140.577Z"
        fill="#7C5BC4"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M173.25 140.577L173.25 148.846H165V140.577L173.25 140.577Z"
        fill="#7C5BC4"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M148.5 99.2309H156.75V107.5H165L165 115.769L156.75 115.769V124.038L148.5 124.039V99.2309Z"
        fill="#4A21A5"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M313.5 124.038L313.5 132.308H288.75V140.577H313.5V148.846H288.75V157.115H313.5V165.385L288.75 165.385H280.5V140.577L272.25 140.577V124.038L264 124.038V115.769L255.749 115.769V107.5H264.001L272.25 107.5V115.769L280.5 115.769V124.038H288.75H313.5Z"
        fill="#4A21A5"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M107.25 132.308L107.25 124.038H115.5H123.75L123.75 132.308H107.25Z"
        fill="#4A21A5"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M181.5 140.577L181.5 132.308L189.75 132.308V140.577L181.5 140.577Z"
        fill="#4A21A5"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M181.5 140.577V157.115H173.25V148.846L173.25 140.577L181.5 140.577Z"
        fill="#4A21A5"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M49.5 140.577H57.7499L57.7498 165.385L49.5 165.385V157.115V140.577Z"
        fill="#A6A093"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M140.25 140.577H148.5L148.499 165.385L140.25 165.385V157.115V140.577Z"
        fill="#A6A093"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M49.5 165.385L49.4996 181.923L41.2498 181.923L41.25 165.385H49.5Z"
        fill="#A6A093"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M140.25 165.385L140.249 181.923L132 181.923L132 165.385H140.25Z"
        fill="#A6A093"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M32.9997 190.192L32.9998 181.923H41.2498L41.2495 190.192L32.9997 190.192Z"
        fill="#A6A093"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M123.75 190.192L123.75 181.923H132L132 190.192L123.75 190.192Z"
        fill="#A6A093"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M32.9997 190.192L32.9998 198.462H41.2498H90.7498L115.5 198.462L115.5 206.731H57.75H16.5H8.24999L8.25015 198.462H24.7501L24.7497 190.192H32.9997Z"
        fill="#A6A093"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M115.5 198.462L115.5 190.192H123.75L123.749 198.462L115.5 198.462Z"
        fill="#A6A093"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M57.7499 140.577H65.9999L65.9998 148.846H74.2498V181.923H65.9998V190.192H57.7498V198.462L41.2498 198.462H32.9998L32.9997 190.192L41.2495 190.192L41.2498 181.923L49.4996 181.923L49.5 165.385L57.7498 165.385L57.7499 140.577Z"
        fill="#747067"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M148.5 140.577H156.75L156.75 148.846H165L164.999 173.654H156.749L156.75 198.462L148.499 198.462V206.731L115.5 206.731L115.5 198.462L123.749 198.462L123.75 190.192L132 190.192L132 181.923L140.249 181.923L140.25 165.385L148.499 165.385L148.5 140.577Z"
        fill="#747067"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M65.9999 140.577H132V148.846V165.385H123.75V181.923L115.5 181.923V190.192L107.25 190.192V198.462L90.7498 198.462L57.7498 198.462V190.192H65.9998V181.923H74.2498V148.846H65.9998L65.9999 140.577Z"
        fill="#54514B"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M164.999 173.654L165 198.462L156.75 198.462L156.749 173.654H164.999Z"
        fill="#54514B"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M148.499 206.731V198.462L156.75 198.462L156.75 206.731L148.499 206.731Z"
        fill="#54514B"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M231 148.846V140.577H247.5V165.385H239.25V148.846H231Z"
        fill="#7B818F"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M346.5 140.577H363L363 165.385H354.75V148.846H346.5L346.5 140.577Z"
        fill="#7B818F"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M239.25 165.385H247.5L247.5 181.923H231L231 173.654H239.25V165.385Z"
        fill="#9FA2A9"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M354.75 165.385H363L363 181.923H346.5L346.5 173.654H354.75V165.385Z"
        fill="#9FA2A9"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M239.25 148.846V165.385V173.654H231L231 165.385L231 148.846H239.25Z"
        fill="#5A5E68"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M346.5 148.846H354.75V165.385V173.654H346.5V148.846Z"
        fill="#5A5E68"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M206.249 115.769H255.749L255.75 124.038H222.749V132.308H214.5V165.385H206.25V173.654H189.75V140.577H198L198 124.038H206.25L206.249 115.769Z"
        fill="#5D6164"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M338.25 115.769L371.25 115.769L371.25 124.038L338.25 124.038V115.769Z"
        fill="#5D6164"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M255.75 124.038H264L264 132.308L255.75 132.308L255.75 124.038Z"
        fill="#5D6164"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M371.25 124.038L379.5 124.039V132.308L371.25 132.308L371.25 124.038Z"
        fill="#5D6164"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M330 115.769L338.25 115.769V124.038L371.25 124.038L371.25 132.308L379.5 132.308V140.577H387.75L387.75 181.923L379.5 181.923V198.462L371.25 198.462V206.731H321.749V198.462L313.5 198.462V181.923H321.75L321.75 173.654H330L330 115.769ZM338.25 140.577V181.923H346.5L346.5 190.192H363L363 181.923H371.25V140.577L363 140.577V132.308H346.5V140.577L338.25 140.577Z"
        fill="#3B3E40"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M255.75 206.731H206.25V198.462L198 198.462V181.923L189.75 181.923L189.75 173.654H206.25V165.385H214.5V132.308H222.749V124.038H255.75L255.75 132.308L264 132.308V140.577H272.25L272.25 181.923L264 181.923V198.462L255.75 198.462V206.731ZM222.75 140.577V181.923H231L231 190.192H247.5L247.5 181.923H255.75V140.577L247.5 140.577V132.308H231V140.577L222.75 140.577Z"
        fill="#3B3E40"
      />
    </svg>
  );
};
const Container = styled.div`
  padding-left: 55px;
  padding-right: 55px;
  background: #000;
  width: 100%;
  max-height: 565px;
`;
const Card = styled.div`
  padding-top: 72px;
  padding-bottom: 72px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const EarnRewards = styled.div`
  width: 564px;
  height: 420px;
  flex-shrink: 0;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  border-radius: 24px;
  background: var(--ECA227, #eca227);
  position: relative;
  overflow: hidden;
`;
const EarnRewardText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-left: 48px;
  padding-top: 56px;
  padding-right: 224px;
  flex-shrink: 0;
`;

const Text = styled.div`
  max-width: 393px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  z-index: 2;
  h3 {
    color: #000;
    font-family: Poppins;
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    line-height: 120%; /* 57.6px */
    letter-spacing: -1.92px;
    margin: 0;
  }
  p {
    max-width: 393px !important;
    color: var(--Text-primary, #000);
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 0;
  }
`;

const EarnRewardImage = styled.img`
  width: 564px;
  height: 420px;
  flex-shrink: 0;
  transform: scale(1, 0.7);
  position: absolute;
  bottom: -63px;
  z-index: 0;
`;

const Feedback = styled.div`
  width: 564px;
  height: 420px;
  flex-shrink: 0;
  flex-shrink: 0;
  position: relative;
  border-radius: 24px;
  border: 1px solid var(--4A21A5, #4a21a5);
  overflow: hidden;
`;
const FeedbackText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-left: 48px;
  padding-top: 56px;
  padding-right: 224px;
  flex-shrink: 0;
  z-index: 2;
`;
const TextFeedback = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  z-index: 2;
  h3 {
    color: var(--FFFFFF, #fff);
    font-family: Poppins;
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    line-height: 120%; /* 57.6px */
    letter-spacing: -1.92px;
    margin: 0;
  }
  p {
    color: var(--A0A0A0, #a0a0a0);
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 0;
  }
`;

const Ellipse1 = styled.div`
  position: absolute;
  width: 529.422px;
  height: 667.984px;
  right: 199px;
  flex-shrink: 0;
  border-radius: 667.984px;
  background: #49237d;
  filter: blur(158.78712463378906px);
  overflow: hidden;
  z-index: 0;
`;

const Ellipse2 = styled.div`
  position: absolute;
  width: 705.375px;
  height: 890.195px;
  top: 88px;
  left: 159px;
  flex-shrink: 0;
  border-radius: 890.195px;
  background: var(--4A21A5, #4a21a5);
  filter: blur(132.55679321289062px);
  overflow: hidden;
  z-index: 0;
`;
const FeedbackBackground = styled.img`
  position: absolute;
  right: 0;
  bottom: 20px;
  width: 320.191px;
  height: 370.743px;
  flex-shrink: 0;
  opacity: 0.8;
  z-index: 0;
`;
const TruckDiv = styled.div`
  transform: scale(0.7);
  position: absolute;
  bottom: -35px;
  right: -60px;
  z-index: 0;
`;

const NoiseBG = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  opacity: 0.6;
  background: url(${noise}) lightgray 0% 0% / 7.652240991592407px
    7.652240991592407px repeat;
  mix-blend-mode: color-burn;
`;

const Cards = () => {
  return (
    <Container>
      <Card>
        <EarnRewards>
          <EarnRewardText>
            <Text>
              <h3>Earn Rewards</h3>
              <p>
                Join the roster of paid contributors and coordinate with fellow
                builders to get involved.
              </p>
            </Text>
            <div
              style={{
                zIndex: 2,
              }}
            >
              <Button>Start Here</Button>
            </div>
          </EarnRewardText>
          <EarnRewardImage src={RewardsImage} />
        </EarnRewards>
        <Feedback>
          <NoiseBG src={noise} />
          <Ellipse1 />
          <FeedbackText>
            <TextFeedback>
              <h3>Request Feedback</h3>
              <p>
                We are here to listen, support, and bring projects to life! Ask
                questions and share updates.
              </p>
            </TextFeedback>
            <div
              style={{
                zIndex: 2,
              }}
            >
              <Button variant="primary">See Activity</Button>
            </div>
          </FeedbackText>
          <Ellipse2 />

          <FeedbackBackground src={FeedbackImage} />
          <TruckDiv>
            <TruckSVG />
          </TruckDiv>
        </Feedback>
      </Card>
    </Container>
  );
};

return { Cards };
