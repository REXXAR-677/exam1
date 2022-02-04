import React, { useState, useEffect } from "react";
import useHttp from "../../Hooks/useHttp";

const Body = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(8);
  const [data, setData] = useState([]);
  const { isLoading, error, data: dataFetched } = useHttp(
    "https://hn.algolia.com/api/v1/search_by_date?query=reactjs&page=0"
  );
  useEffect(()=>{setData(dataFetched.hits)},[dataFetched])
  
  if (isLoading) {
    return <h1>Loading ...</h1>;
  }
  
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost)

  return (
    <div>
      {error && <h3>Something went wrong!</h3>}
      <ol>{currentPosts.map((i) => (
        <li key={i.objectID}>{i.story_title}</li>
      ))}</ol>
    </div>
  );
};

export default Body;
