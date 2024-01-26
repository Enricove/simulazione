import { useRouteError } from "react-router-dom";
import Header from "../components/Header";

export default function ErrorPage() {
  const error:unknown = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <Header />
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
     
    </div>
  );
}