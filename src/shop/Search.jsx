import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Search = ({ products, GridList }) => {
  const [ searchTerm, setSearchTerm ] = useState("");
  const filteredProducts = products.filter((product) => {
    return (
      product &&
      product.name &&
      product.name
        .toLowerCase()
        .includes(searchTerm && searchTerm.toLowerCase())
    );
  });

  return (
    <div className="widget widget-search">
      <form action="" className="search-wrapper mb-3">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="search..."
          defaultValue={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">
          <i className="icofont-search-2"></i>
        </button>
      </form>
      {/* {showing search result} */}
      <div>
        {searchTerm &&
          filteredProducts.map((product) => (
            <Link key={product.id} to={`/shop/${product.id}`}>
              <div className="d-flex gap-3 p-2">
                <div>
                  <div className="pro-thumb h-25">
                    <img
                      src={product.img}
                      alt=""
                      width={70}
                      className="flex-{grow|shrink}-0"
                    />
                  </div>
                </div>
                <div className="product-content">
                    <p>
                        <Link to={`/shop/${product.id}`}>{product.name}</Link>
                    </p>
                    <h6>{product.price}</h6>
                </div>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

Search.propTypes = {
  GridList: PropTypes.string.isRequired,
  products: PropTypes.string.isRequired, // Add this line
};

export default Search;
