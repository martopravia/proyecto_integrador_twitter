import React from "react";

const News = () => {
  return (
    <div className="whatsHappening">
      <h4>What's happening</h4>
      <div className="mb-3">
        <p className="category">Programming · Trending</p>
        <p className="hashtag">#MongoVsSequelize</p>
        <p className="category">97.5K Tweets</p>
      </div>
      <div className="mb-3">
        <p className="category">Entertainment · Trending</p>
        <p className="hashtag">#StarWars</p>
        <p className="category">97.5K Tweets</p>
      </div>
      <div className="mb-3">
        <p className="category">News · Trending</p>
        <p className="hashtag">#LifeInMars</p>
        <p className="category">97.5K Tweets</p>
      </div>
    </div>
  );
};

export default News;
