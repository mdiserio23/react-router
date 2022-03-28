import { useParams } from "react-router-dom";

const QuoteDetail = () => {
  const params = useParams();
  return (
    <>
      <h1>Quote detail Page</h1>
      <p>{params.quoteId}</p>
    </>
  );
};

export default QuoteDetail;
