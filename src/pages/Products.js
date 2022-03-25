import { Link } from "react-router-dom";

const Products = () => {
  return (
    <>
      <h1>Products Page</h1>
      <section>
        <ul>
          <li>
            <Link to="/products/p1">A Book</Link>
          </li>

          <li>
            <Link to="/products/p2">A Carpet</Link>
          </li>

          <li>
            <Link to="/products/p3">A Personal computer</Link>
          </li>
        </ul>
      </section>
    </>
  );
};
export default Products;
