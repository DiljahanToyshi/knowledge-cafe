import React, { useEffect, useState } from "react";
import SingleVLog from "../SingleVLog/SingleVLog";
import "./Vlog.css";
const Vlog = () => {
     const [vlogs, setVlogs] = useState([]);
    useEffect(() => {
      fetch("blog.json")
        .then((res) => res.json())
        .then((data) => 
            setVlogs(data.articles));
      
    }, []);

  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="col-span-2 ">
        {vlogs.map((vlog) => (
          <SingleVLog key={vlog.source.id}
          vlog ={vlog}></SingleVLog>
        ))}
      </div>

      <div>
        <h2>cart</h2>
      </div>
    </div>
  );
};

export default Vlog;
