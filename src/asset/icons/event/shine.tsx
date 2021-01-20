export default function Shine({ style, fill }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" style={style}>
      <path
        fill={fill}
        fillRule="evenodd"
        d="M10.2 0v9.5L3.5 2.8l-.7.7 6.7 6.7H0v1h9.5l-6.7 6.7.7.7 6.7-6.7v9.4h1v-9.4l6.7 6.7.7-.7-6.7-6.7h9.4v-1h-9.4l6.7-6.7-.7-.7-6.7 6.7V0z"
      />
    </svg>
  );
}
