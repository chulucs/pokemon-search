import React from 'react';
import classes from "./Pagination.module.scss";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className={classes.pagination}>
        {pageNumbers.map(number => (
          <li key={number} className={classes['page-item']}>
            <a onClick={() => paginate(number)} href='!#' className={classes['page-link']}>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;