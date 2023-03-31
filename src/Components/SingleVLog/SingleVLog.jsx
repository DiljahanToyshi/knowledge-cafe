import React from 'react';

const SingleVLog = (props) => {
    console.log(props.vlog)
const {
  author,
  authorimg,
  description,
  publishedAt,
  readingtime,
  urlToImage,
  title,
} = props.vlog;
    return (
      <div className='mb-4'>
        <img src={urlToImage} className="h-96 " alt="" />
      </div>
    );
};

export default SingleVLog;