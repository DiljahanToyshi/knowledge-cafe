import React from "react";

const Card = ({ card }) => {
  return (
    <div>
      <div className="border-violet-800 bg-violet-200 ">
        <p className=" p-3 text-lg text-center text-violet-700 font-medium text-#6047EC">
          Spent time on read :{} min
        </p>
      </div>

      <div>
        <p className="font-semibold text-2xl text-center bg-zinc-200 mt-5">
          Bookmarked Blogs :{card.length}
        </p>
      </div>
    </div>
  );
};

export default Card;
