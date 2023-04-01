import React, { useEffect, useState } from "react";
import Bookmarked from "../Bookmarked/Bookmarked";

const Card = (props ) => {

    const {card} =props;



    let total = 0;
for (const vlog of card){
    total = total + parseInt(vlog.readingtime);
    
};

  return (
    <div className="sticky top-4">
      <div className="border-violet-800 bg-violet-200 ">
        <p className=" p-3 text-lg text-center text-violet-700 font-medium text-#6047EC">
          Spent time on read :{total} min
        </p>
      </div>

      <div className="  bg-zinc-200 mt-5">
        <p className="font-semibold text-2xl text-center">
          Bookmarked Blogs :{card.length}
        </p>
        <p className="m-5"></p>
        <br />
        <Bookmarked></Bookmarked>
      </div>
    </div>
  );
};

export default Card;
