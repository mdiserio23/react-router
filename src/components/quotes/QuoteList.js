import { Fragment } from "react";
import { useHistory, useLocation } from "react-router-dom";
import QuoteItem from "./QuoteItem";
import classes from "./QuoteList.module.css";

const sortQuotes = (quotes, ascending) => {
  return quotes.sort((quoteA, quoteB) => {
    if (ascending) {
      return quoteA.id > quoteB.id ? 1 : -1;
    } else {
      return quoteA.id < quoteB.id ? 1 : -1;
    }
  });
};

const QuoteList = (props) => {
  const history = useHistory();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const isAscendingMode = queryParams.get("sort") === "asc";
  const sortedQuote = sortQuotes(props.quotes, isAscendingMode);

  const onSortingHandler = () => {
    history.push("/quotes/?sort=" + (isAscendingMode ? "desc" : "asc"));
  };

  return (
    <>
      <div className={classes.sorting}>
        <button onClick={onSortingHandler}>
          Sort {isAscendingMode ? "Desceding" : "Ascending"}
        </button>
      </div>
      <Fragment>
        <ul className={classes.list}>
          {sortedQuote.map((quote) => (
            <QuoteItem
              key={quote.id}
              id={quote.id}
              author={quote.author}
              text={quote.text}
            />
          ))}
        </ul>
      </Fragment>
    </>
  );
};

export default QuoteList;
