import { useState, useContext, useEffect } from "react";
import paginationContext from "../../Store/pagination-context";
import ButtonsIcons from "./ButtonsIcons";

const Footer = () => {
  const [pagination, setPagination] = useState([]);
  const ctxPagination = useContext(paginationContext);

  useEffect(() => {
    let arrayOfPageNumbers = [];
    const getPagination = () => {
      let pageNumbers = Math.floor((ctxPagination.currentPage - 1) / 9) * 9;
      return (arrayOfPageNumbers = Array(9).fill().map((_, index) => pageNumbers + index + 1));
    };
    getPagination();
    setPagination(arrayOfPageNumbers);
  }, [ctxPagination.currentPage]);

  return (
    <div>
      <ButtonsIcons number={pagination.length} pagination={pagination} />
    </div>
  );
};

export default Footer;
