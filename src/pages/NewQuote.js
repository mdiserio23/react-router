import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import QuoteForm from "../components/quotes/QuoteForm";
import useHttp from "../hooks/use-http";
import { addQuote } from "../lib/api";

const NewQuote = () => {
  const { sendRequest, status } = useHttp(addQuote);
  const history = useHistory(); //to pass from a page to another page, object

  useEffect(() => {
    if (status === "completed") {
      history.push("/quotes"); //push allow back button, replace not allow
    }
  }, [history, status]);

  const onAddQuoteHandler = (newQuote) => {
    sendRequest(newQuote);
  };

  return (
    <QuoteForm
      isLoading={status === "pending"}
      onAddQuote={onAddQuoteHandler}
    />
  );
};

export default NewQuote;
