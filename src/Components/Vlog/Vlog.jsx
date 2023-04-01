import React, { useEffect, useState } from "react";
import SingleVLog from "../SingleVLog/SingleVLog";
import "./Vlog.css";
import Card from "../Card/Card";
const Vlog = () => {
  const [vlogs, setVlogs] = useState([]);
  const [card, setCard] = useState([]);
  useEffect(() => {
    fetch("blog.json")
      .then((res) => res.json())
      .then((data) => setVlogs(data.articles));
  }, []);

  //     useEffect(() =>{
  //       const storedCart = getShoppingCart();
  //      for(const id in storedCart){
  //       const savedVLog = vlogs.find(vlog => vlog.id === id)
  //       console.log(savedVLog);
  //  }},[vlogs])

  const handleAddToVLog = (vlog) => {
    const newCard = [...card, vlog];
    setCard(newCard);
    const previousBookmark = JSON.parse(localStorage.getItem("bookmark"));
    let bookmark =[];
    if(previousBookmark){
      const isBookMarked = previousBookmark.find(
        (pd) => pd.author === vlog.author);
      
      if (isBookMarked){
     Swal.fire("Alredy Added");
      } 
      else{
        bookmark.push(...previousBookmark,vlog);
        localStorage.setItem("bookmark", JSON.stringify(bookmark));
        console.log(bookmark);
      }
    }
    else{
      bookmark.push( vlog);
      localStorage.setItem("bookmark", JSON.stringify(bookmark));
      console.log('nai')
    }
  };
  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="col-span-2 ">
        {vlogs.map((vlog) => (
          <SingleVLog
            key={vlog.source.id}
            vlog={vlog}
            handleAddToVLog={handleAddToVLog}
          ></SingleVLog>
        ))}
      </div>

      <div>
        <h2>cart</h2>
        <Card  card={card}></Card>
      </div>
    </div>
  );
};

export default Vlog;
