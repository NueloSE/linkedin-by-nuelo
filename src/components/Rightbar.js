import React, { useEffect, useState } from 'react';

function Rightbar() {
  // 	const [news,setNews] = useState([])
  //    const getNews = () => {
  //     fetch(
  //       `https://newsapi.org/v2/everything?q=Apple&sortBy=popularity&apiKey=68f1b6492b654b448da8e6aceeed3d52`
  //     )
  //       .then((res) => res.json())
  //       .then(json => setNews(json.articles));
  //   };

  //   useEffect(()=>{
  // 	getNews()
  //   },[])

  //   const newsList = news.slice(1,5)

  return (
    <div
      style={{
        borderRadius: '10px',
        backgroundColor: 'white',
        height: '400px',
        paddingTop: '10px',
        paddingLeft: '20px',
      }}
    >
      <h4>News Feed</h4>
      {/* {newsList.map((eachNews)=>{
		return <>
		<li style={{marginTop:"20px"}}>{eachNews.title}</li>
		</>
	  })} */}

      <li>
        The artificial intelligence industry is experiencing an unprecedented boom as major tech
        companies unveil new advancements in generative AI, impacting fields ranging from healthcare
        to education.
      </li>
      <li style={{ paddingTop: '20px' }}>
        World leaders at the UN Climate Summit have agreed on a historic framework to reduce carbon
        emissions by 40% by 2030, marking a significant step in the fight against global warming.
      </li>
      <li style={{ paddingTop: '20px' }}>
        Scientists have developed a new form of immunotherapy showing remarkable success in
        eliminating cancer cells in early clinical trials, offering new hope for patients with
        hard-to-treat cancers.
      </li>
      <li style={{ paddingTop: '20px' }}>
        After a prolonged bear market, Bitcoin and Ethereum prices surged 20%, fueling optimism
        about the future of decentralized finance and blockchain technology.
      </li>
    </div>
  );
}

export default Rightbar;
