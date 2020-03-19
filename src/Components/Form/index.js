import React from "react";

const Form = props => {
  return (
    <form>
      <div>
        <p>Gender</p>
        <input type="radio" />
        <input type="radio" />
      </div>
      <div>
        <p>Age</p>
        <input></input>
      </div>
      <div>
        <p>Weight</p>
        <input></input>
      </div>
      <div>
        <p>Height</p>
        <input></input>
      </div>
      <div>
        <p>Activity</p>
        <select></select>
      </div>
      <div>
        <p>Body Fat %</p>
        <input></input>
      </div>
      <button>Calculate</button>
    </form>
  );
};

export default Form;
