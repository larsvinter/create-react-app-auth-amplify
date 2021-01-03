import React from "react";

function FormComponent(props) {
  function formFieldUpdated(e) {
    const newObject = {};
    newObject[props.id] = e.target.value;
    props.onChange(newObject);
  }

  return (
    <div>
      <label>{props.label}</label>
      <input
        id={props.id}
        type={props.type}
        onChange={formFieldUpdated}
      ></input>
    </div>
  );
}

export default FormComponent;
