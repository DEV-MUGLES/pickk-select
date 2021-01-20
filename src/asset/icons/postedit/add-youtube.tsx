export default function YoutubeAddIcon({ style, fillOut, fillIn }) {
  return (
    <svg style={style} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 25">
      <path
        fill={fillOut}
        fillRule="evenodd"
        d="M32.6,3C31.5,0,21.9,0,17,0C12,0,2.4,0,1.3,3S0,10,0,12.3c0,2.4,0.2,6.4,1.3,9.3c1.1,3,10.7,3,15.7,3
	c4.9,0,14.6,0,15.7-3c1.1-3,1.3-7,1.3-9.3C33.9,10,33.7,6,32.6,3z"
      />
      <polygon points="13.5,17.4 13.5,7.3 22.1,12.3 " fill={fillIn} />
    </svg>
  );
}
