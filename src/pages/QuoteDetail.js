import { Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { useParams, useRouteMatch } from "react-router-dom";
import { useEffect } from "react";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";
import LoadingSpinner from "../components/UI/LoadingSpinner";

const QuoteDetail = () => {
  const params = useParams();
  const { quoteId } = params;
  const match = useRouteMatch();
  const {
    sendRequest,
    status,
    data: loadingQuote,
    error,
  } = useHttp(getSingleQuote, true);

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  if (status === "pending") {
    return <LoadingSpinner />;
  }

  if (error) {
    return <p className="centered focused">{error}</p>;
  }

  if (status === "completed" && (!loadingQuote || loadingQuote.length === 0)) {
    return <p className="centered focused">Quotes does not exists</p>;
  }
  return (
    <>
      <HighlightedQuote text={loadingQuote.text} author={loadingQuote.author} />
      <Route path={match.path} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}>
            Go to Comments
          </Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </>
  );
};

export default QuoteDetail;
