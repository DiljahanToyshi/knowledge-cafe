import React, { useState } from 'react';

const Bookmarked = () => {
const [bookmarked,setBookmarked] =useState([]);
const handlebookmarked =(bookmark) =>{
    const exist =bookmarked.find(book => book.id === bookmark.id);
    if(exist){
        Swal.fire("Alredy Added");
        console.log('added')
    };
   setBookmarked([...bookmarked,bookmark]);
}
    return (
      <div>
        
      </div>
    );
};

export default Bookmarked;