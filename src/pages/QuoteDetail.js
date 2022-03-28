import { Route } from "react-router-dom";
import { useParams } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const QUOTES_DUMMY_DATA = [
  { id: "1", author: "Moz", text: "React is good" },
  { id: "2", author: "Mozzir", text: "React is very good" },
];

const QuoteDetail = () => {
  const params = useParams();
  const quote = QUOTES_DUMMY_DATA.find((item) => item.id === params.quoteId);

  if (!quote) {
    return <p>Quotes does not exists</p>;
  }
  return (
    <>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </>
  );
};

export default QuoteDetail;
