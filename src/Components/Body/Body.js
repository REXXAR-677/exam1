import React, { useState, useEffect, useContext } from "react";
import useHttp from "../../Hooks/useHttp";
import filterContext from "../../Store/filter-context";
import { news } from "../../Assets/news";

const Body = () => {
  const [data, setData] = useState([]);
  // const [data, setData] = useState(news);
  const ctx = useContext(filterContext);
  const url = ctx.url;

  const { isLoading, error, data: dataFetched } = useHttp(url);
  useEffect(()=>{setData(dataFetched.hits)},[dataFetched])
  
  if (isLoading) {
    return <h1>Loading ...</h1>;
  }
  ctx.calculatePagination(data.length, ctx.postsPerPage);
  
  if(error){
    console.log(error)
    return <h4>Something went wrong while fetching!</h4>
  }
  
  const currentPosts = data.slice(ctx.indexOfFirstPost, ctx.indexOfLastPost);

  return (
    <div>
      {error && <h3>Something went wrong!</h3>}
      <ol>
        {currentPosts.map((i) => (
          <li key={i.objectID}>
            <p>{i.story_title || i.title}</p>
            <button
              onClick={() => {
                console.log(i);
              }}
            >
              fav
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Body;
