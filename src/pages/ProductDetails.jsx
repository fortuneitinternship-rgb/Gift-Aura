import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard/ProductCard";
import "./ProductDetails.css";

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  const [activeImg, setActiveImg] = useState(0);
  const [qty, setQty] = useState(1);
  const [tab, setTab] = useState("description");
  const [message, setMessage] = useState("");

  if (!product) {
    return (
      <div className="container py-5 text-center">
        <h4>Product not found</h4>
        <Link to="/shop" className="btn btn-primary mt-3">Back to Shop</Link>
      </div>
    );
  }

  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="container py-4">
      {/* Breadcrumb */}
      <nav className="breadcrumb-nav">
        <Link to="/">Home</Link> /{" "}
        <Link to="/shop">Shop</Link> /{" "}
        <Link to={`/category/${product.category}`}>{product.category}</Link> /{" "}
        <span>{product.name}</span>
      </nav>

      <div className="row g-4">
        {/* Gallery */}
        <div className="col-md-5">
          <div className="main-image">
            <img src={product.gallery[activeImg]} alt={product.name} />
          </div>
          <div className="thumbnails">
            {product.gallery.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`thumb-${i}`}
                className={activeImg === i ? "active" : ""}
                onClick={() => setActiveImg(i)}
              />
            ))}
          </div>
        </div>

        {/* Info */}
        <div className="col-md-7">
          <h2>{product.name}</h2>
          <div className="rating-row">
            ⭐ {product.rating} ({product.reviews} reviews)
          </div>

          <div className="price-row">
            <span className="price">₹{product.price}</span>
            <span className="mrp">₹{product.mrp}</span>
            <span className="discount">{product.discount}% OFF</span>
          </div>

          <p className="desc">{product.description}</p>

          {/* Quantity */}
          <div className="qty-row">
            <label>Quantity:</label>
            <button onClick={() => setQty(Math.max(1, qty - 1))}>−</button>
            <span>{qty}</span>
            <button onClick={() => setQty(qty + 1)}>+</button>
          </div>

          {/* Personalization message */}
          <div className="personalization">
            <label>🎁 Gift Personalization / Message</label>
            <textarea
              rows={2}
              placeholder="Write your personalized message here..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>

          {/* Actions */}
          <div className="action-buttons">
            <button className="btn btn-primary" onClick={() => alert(`Added ${qty} to cart`)}>
              🛒 Add to Cart
            </button>
            <button className="btn btn-warning" onClick={() => alert("Buy Now clicked")}>
              ⚡ Buy Now
            </button>
            <button className="btn btn-outline-danger" onClick={() => alert("Added to wishlist")}>
              ❤️ Wishlist
            </button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="product-tabs mt-5">
        <div className="tab-headers">
          {["description", "specifications", "reviews"].map((t) => (
            <button
              key={t}
              className={tab === t ? "active" : ""}
              onClick={() => setTab(t)}
            >
              {t.charAt(0).toUpperCase() + t.slice(1)}
            </button>
          ))}
        </div>

        <div className="tab-content">
          {tab === "description" && <p>{product.description}</p>}
          {tab === "specifications" && (
            <table className="table table-sm">
              <tbody>
                {Object.entries(product.specs).map(([k, v]) => (
                  <tr key={k}>
                    <td><strong>{k}</strong></td>
                    <td>{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
          {tab === "reviews" && (
            <div>
              <div className="review">
                <strong>Priya</strong> ⭐⭐⭐⭐⭐
                <p>Beautiful gift, very well packed!</p>
              </div>
              <div className="review">
                <strong>Rahul</strong> ⭐⭐⭐⭐
                <p>Good quality, delivered on time.</p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Related Products */}
      {related.length > 0 && (
        <div className="related-products mt-5">
          <h4 className="mb-3">Related Products</h4>
          <div className="row g-4">
            {related.map((p) => (
              <div className="col-6 col-md-3" key={p.id}>
                <ProductCard product={p} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;