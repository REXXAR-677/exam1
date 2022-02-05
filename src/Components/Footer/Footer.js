import { Fragment, useState, useContext, useEffect } from "react";
import filterContext from "../../Store/filter-context";
import ButtonsIcons from "./ButtonsIcons";

const Footer = (props) => {
  const [pagination, setPagination] = useState([]);
  const ctx = useContext(filterContext);
  
  useEffect(() => {
    let pag = [];
    for (let i = 1; i < Math.ceil(props.number / ctx.postsPerPage) + 1; i++) {
      pag.push(i);
    }
    setPagination(pag);
  },[props, ctx.postsPerPage]);

  return (
    <Fragment>
      <ButtonsIcons number={pagination.length} pagination={pagination} />
    </Fragment>
  );
};

export default Footer;
