import React from "react";

function FormattedDate(props) {
  const formatted =
    ((props.months / 12) | 0) + " years and " + (props.months % 12) + " months";
  return <span>{formatted}</span>;
}

export default FormattedDate;
