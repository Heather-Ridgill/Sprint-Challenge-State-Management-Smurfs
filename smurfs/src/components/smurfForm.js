import React, { useContext } from "react";
import FormContext from "../contexts/FormContext";
// import React, { useEffect } from "react";
// import { connect } from "react-redux";
// import { getSmurf, addSmurf } from "../actions";

// const SmurfForm = ({ getSmurf, addSmurf, smurfs, isFetching, error }) => {
//     useEffect (() => {
//         getSmurf ();
//         addSmurf ({ name: "name", age: "age", height: "height"});
//     }, [getSmurf]);
//     console.log(smurfs);
//     if(isFetching) {
//         return <h3>Fetching Smurfs</h3>;
//     }

//     export default connect (
//         mapStateToProps,
//         {getSmurf, addSmurf}
//     )(SmurfForm);

const SmurfForm = () => {
  const { formValue, handleChanges, newSmurf } = useContext(FormContext);
  return (
    <form onSubmit={newSmurf}>
      <p>New Smurf Sign In Form</p>
      <label htmlFor="name">What is your name?</label>
      <input
        type="text"
        name="name"
        value={formValue.name}
        placeholder="My Name"
        onChange={handleChanges}
      />
      <label htmlFor="age">How old are you?</label>
      <input
        type="text"
        name="age"
        value={formValue.age}
        placeholder="Age"
        onChange={handleChanges}
      />
      <label htmlFor="height">How tall are you?</label>
      <input
        type="text"
        name="height"
        value={formValue.height}
        placeholder="Height"
        onChange={handleChanges}
      />
      <button type="submit">New Smurf</button>
    </form>
  );
};

export default SmurfForm;
