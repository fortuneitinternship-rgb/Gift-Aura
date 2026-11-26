import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { searchSuggestions } from "../data/products";
import "./SearchBar.css";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const navigate = useNavigate();
  const wrapperRef = useRef(null);

  const filtered = query
    ? searchSuggestions.filter((s) =>
        s.toLowerCase().includes(query.toLowerCase())
      )
    : searchSuggestions;

  const handleSearch = (value) => {
    const q = value ?? query;
    if (!q.trim()) return;
    setShowSuggestions(false);
    navigate(`/search?q=${encodeURIComponent(q)}`);
  };

  const clearSearch = () => {
    setQuery("");
    setShowSuggestions(true);
  };

  // close dropdown when clicking outside
  useEffect(() => {
    const onClick = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  return (
    <div className="search-wrapper" ref={wrapperRef}>
      <div className="search-bar">
        <span className="search-icon" onClick={() => handleSearch()}>🔍</span>
        <input
          type="text"
          value={query}
          placeholder="Search for gifts..."
          onChange={(e) => {
            setQuery(e.target.value);
            setShowSuggestions(true);
          }}
          onFocus={() => setShowSuggestions(true)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        />
        {query && (
          <button className="clear-btn" onClick={clearSearch} aria-label="Clear search">
            ✕
          </button>
        )}
      </div>

      {showSuggestions && (
        <ul className="suggestions-list">
          {filtered.length > 0 ? (
            filtered.map((s, i) => (
              <li key={i} onClick={() => { setQuery(s); handleSearch(s); }}>
                🔍 {s}
              </li>
            ))
          ) : (
            <li className="no-suggestions">No suggestions found</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;