import QuoteForm from "../components/quotes/QuoteForm";

const NewQuote = () => {
  const onAddQuoteHandler = (newQuote) => {
    console.log(newQuote);
  };

  return <QuoteForm onAddQuote={onAddQuoteHandler} />;
};

export default NewQuote;
