import React, { useContext } from "react";
import SmurfContext from "../contexts/SmurfContext";
import Smurf from "./smurf";

const SmurfList = ({ SmurfContext }) => {
  //   const { SmurfList } = useContext(SmurfContext);
  return (
    <div className="smurfVillage">
      {SmurfContext.map(SmurfContext => {
        return <Smurf value={SmurfContext} key={SmurfContext.id} />;
      })}
    </div>
  );
};

export default SmurfList;

// import React from "react";

// const SmurfList = () => {
//   return <p></p>;
// };

// export default SmurfList;
