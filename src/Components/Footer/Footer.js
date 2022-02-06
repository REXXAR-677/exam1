import { Fragment, useState, useContext, useEffect } from "react";
import filterContext from "../../Store/filter-context";
import paginationContext from "../../Store/pagination-context";
import ButtonsIcons from "./ButtonsIcons";

const Footer = (props) => {
  const [pagination, setPagination] = useState([]);
  const ctxFilter = useContext(filterContext);
  const userFilter = ctxFilter.userFilter === "All";
  const ctxPagination = useContext(paginationContext);
  useEffect(() => {
    let arr = [];
    const getPagination = () => {
      let start = Math.floor((ctxPagination.currentPage - 1) / 9) * 9;
      return (arr = Array(9)
        .fill()
        .map((_, index) => start + index + 1));
    };
    getPagination();
    setPagination(arr);
  }, [props]);
  return (
    <Fragment>
      {userFilter && <ButtonsIcons number={pagination.length} pagination={pagination} />}
    </Fragment>
  );
};

export default Footer;
