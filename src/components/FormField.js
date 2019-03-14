import React from 'react';

export default (props) => (
  <div className="form-group ">
    <label className="label">{props.title}</label>
    <div className="">
      <input
        name={props.name}
        className="form-control"
        type={props.type || 'text'}
        value={props.value}
        onChange={props.onChange}
        autoComplete="off"
        onBlur={props.onBlur}
      />

      <span className="valid-feedback">
        <i className={props.icon}></i>
      </span>

      {props.touch && props.error && (
        <span className="invalid-feedback">
          <i className="is-invalid"></i>
        </span>
      )}

      {props.touch && !props.error && (
        <span className="is-valid">
          <i className="fas fa-check"></i>
        </span>
      )}

      {props.touch && props.error && (
        <p className="invalid-feedback">{props.title} is invalid</p>
      )}
    </div>
  </div>
);