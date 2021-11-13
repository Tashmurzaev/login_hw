import React from 'react';

const Validation = (values) => {
    const validEmailRegex = RegExp(
        /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
        );

    const validNameRegex = RegExp(/^(?=.*?\d)(?=.*?[a-zA-Z])[a-zA-Z\d]+$/ );
        
  let errors = {};

  if (!values.fullname) {
    errors.fullname = 'Username must have digits and letters';
  } else if (!validNameRegex.test(values.fullname)) {
    errors.fullname = 'Username must have digits and letters';
  }

  if (!values.gmail) {
    errors.gmail = 'Gmail is not valid';
  } else if (!validEmailRegex.test(values.gmail)) {
    errors.gmail = 'Gmail is not valid';
  }

  if (!values.password) {
    errors.password = 'Password is required';
  } else if (values.password.length < 6) {
    errors.password = 'Password must be more than 6 characters';
  }
console.log(errors);
  return errors
};

export default Validation;
