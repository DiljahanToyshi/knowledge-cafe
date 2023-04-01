import React, { useState } from "react";

const Card = (props ) => {

    const {card} =props;
 
const [cardTitle,setCardTitle] = useState([])
const title = card.map((t) => t.title)
console.log(title)
    let total = 0;
for (const vlog of card){
    total = total + parseInt(vlog.readingtime);
    // console.log(vlog.title);
    // console.log(card[0].title)
};

  return (
    <div className="sticky top-4 lg:mt-5">
      <div className="border-violet-800 bg-violet-200 ">
        <p className=" p-3 text-lg text-center text-violet-700 font-medium text-#6047EC">
          Spent time on read :{total} min
        </p>
      </div>

      <div className="  bg-zinc-200 mt-5">
        <p className="font-semibold text-2xl text-center">
          Bookmarked Blogs :{card.length}
        </p>
        <div className="p-3">
          {title.map((titles) => (
           <h4>{titles}</h4>
          ))}
        </div>
        <br />
      </div>
    </div>
  );
};

export default Card;
