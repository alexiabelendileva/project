import React from "react";
import "./Pagination.css";
import 'animate.css';

function Pagination({ prev, next, onPrevious, onNext }) {
  const handlePrevious = () => {
    onPrevious();
  };

  const handleNext = () => {
    onNext();
  };
  return (
    <div className="navPag">
      <ul className="pagination">
        {prev ? (
          <li className="pageItem">
            <button className="pageLink" onClick={handlePrevious}>
              Previous
            </button>
          </li>
        ) : null}
        {next ? (
          <li className="pageItem">
            <button className="pageLink" onClick={handleNext}>
              Next
            </button>
          </li>
        ) : null}
      </ul>
    </div>
  );
}

export default Pagination;
