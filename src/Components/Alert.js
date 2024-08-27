import React from "react";

export default function Alert(props) {
  return (
    <div style={{ height: "50px" }}>
      {props.alert && (
        <div
          className={`alert alert-${props.alert.type} alert-dismissible fade show container my-2`}
          role="alert"
        >
          <b>{props.alert.type}</b>: {props.alert.msg}
        </div>
      )}
    </div>
  );
}
