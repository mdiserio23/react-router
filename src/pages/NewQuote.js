import { useHistory } from "react-router-dom";
import QuoteForm from "../components/quotes/QuoteForm";

const NewQuote = () => {
  const history = useHistory(); //to pass from a page to another page, object
  const onAddQuoteHandler = (newQuote) => {
    console.log(newQuote);

    history.push("/quotes"); //push allow back button, replace not allow
  };

  return <QuoteForm onAddQuote={onAddQuoteHandler} />;
};

export default NewQuote;
