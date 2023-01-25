import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <h1> Oops! Something went Wrong</h1>
      <p>{error.statusText}</p>
      <p>{error.status}</p>
      <button> TRY AGAIN</button>
    </div>
  );
};

export default Error;
