import QuoteList from "../components/quotes/QuoteList";

const QUOTES_DUMMY_DATA = [
  { id: "1", author: "Moz", text: "React is good" },
  { id: "2", author: "Mozzir", text: "React is very good" },
];

const AllQuotes = () => {
  return <QuoteList quotes={QUOTES_DUMMY_DATA} />;
};

export default AllQuotes;
