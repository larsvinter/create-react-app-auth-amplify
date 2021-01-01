import React from "react";

function Gender(props) {
  let sex;
  if (props.name === "Rasmus") {
    sex = "hr";
  } else {
    sex = "fru";
  }
  return (
    <h1>
      hej med dig {sex} {props.name}
    </h1>
  );
}

export default Gender;
