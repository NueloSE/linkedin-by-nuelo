import React, { useEffect, useState } from 'react';

function Rightbar() {

	
	const [news,setNews] = useState([])
   const getNews = () => {
    fetch(
      `https://newsapi.org/v2/everything?q=Apple&sortBy=popularity&apiKey=68f1b6492b654b448da8e6aceeed3d52`
    )
      .then((res) => res.json())
      .then(json => setNews(json.articles));
  };

  useEffect(()=>{
	getNews()
  },[])

  const newsList = news.slice(1,5)

  return (
    <div
      style={{
        borderRadius: '10px',
        backgroundColor: 'white',
        height: '400px',
        paddingTop: '5px',
        paddingLeft: '20px',
      }}
    >
      <h4>News Feed</h4>
	  {newsList.map((eachNews)=>{
		return <>
		<li style={{marginTop:"20px"}}>{eachNews.title}</li>
		</>
	  })}
    </div>
  );
}

export default Rightbar;
