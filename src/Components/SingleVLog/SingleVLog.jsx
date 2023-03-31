import React from 'react';

const SingleVLog = (props) => {
   
    
const {
  author, authorimg,description,publishedAt,readingtime,urlToImage,title,} = props.vlog;
  const handleAddToVLog = props.handleAddToVLog;
    return (
      <div className="m-5 mb-12">
        <img src={urlToImage} className=" h-3/6" alt="" />
        <div className="flex justify-between mt-3">
          <div className="flex gap-3">
            <div>
              <img className="h-12 rounded-full" src={authorimg} alt="" />
            </div>
            <div>
              <p className="font-medium text-lg">{author}</p>
              <p>{publishedAt}</p>
            </div>
          </div>
          <div className="flex gap-2">
            <p>{readingtime} min read</p>
            <span onClick={()=> handleAddToVLog(props.vlog)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                />
              </svg>
            </span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M6.32 2.577a49.255 49.255 0 0111.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 01-1.085.67L12 18.089l-7.165 3.583A.75.75 0 013.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </div>
        </div>
        <p className="text-4xl font-semibold mt-2">{title}</p>
        <div className="m-2 flex gap-2">
          <p> #trending</p>
          <p>#technology</p>
        </div>
      </div>
    );
};

export default SingleVLog;