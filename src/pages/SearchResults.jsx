
import React from "react";
import { useLocation } from "react-router-dom";

import { products } from "../data/products";
import ProductCard from "../components/ProductCard/ProductCard";

const SearchResults = () => {
  const { search } = useLocation();

  const query = new URLSearchParams(search).get("q") || "";

  const results = products.filter((p) =>
    p.name.toLowerCase().includes(query.toLowerCase()) ||
    p.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="container py-4">

      <h3 className="mb-3">
        Search results for "
        <span className="text-primary">{query}</span>"
      </h3>

      {results.length === 0 ? (
        <div className="text-center py-5">
          <h5>😕 No results found</h5>
          <p className="text-muted">
            Try a different keyword or browse our categories.
          </p>
        </div>
      ) : (
        <div className="row g-4">

          {results.map((p) => (
            <div className="col-6 col-md-4 col-lg-3" key={p.id}>
              <ProductCard product={p} />
            </div>
          ))}

        </div>
      )}

    </div>
  );
};

export default SearchResults;
