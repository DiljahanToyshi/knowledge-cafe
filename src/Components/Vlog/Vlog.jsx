import React, { useEffect, useState } from "react";
import SingleVLog from "../SingleVLog/SingleVLog";
import "./Vlog.css";
import Card from "../Card/Card";
const Vlog = () => {
     const [vlogs, setVlogs] = useState([]);
const [card,setCard] = useState([]);
    useEffect(() => {
      fetch("blog.json")
        .then((res) => res.json())
        .then((data) => 
            setVlogs(data.articles));
      
    }, []);

    const handleAddToVLog = (vlog) => {
     const newCard =[...card,vlog];
     setCard(newCard);
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
      <Card card ={card}></Card>
      </div>
    </div>
  );
};

export default Vlog;
