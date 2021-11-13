import React, { useState, useEffect } from 'react';
import Button from '../UI/Button/Button';

import Validation from '../Validation';

function Login(props) {
  const [values, setValues] = useState({
    fullname: '',
    gmail: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  const [dataIsCorrect, setDataIsCorrect] = useState(false);
  console.log(errors);

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  const handleLoginSubmit = (e) => {
    e.preventDefault();

    // if (errors ) {
    //   return;
    // }

    let sliced = values.password.split('').reverse();
    sliced = [...sliced, ...values.password.slice(0, 2).split('')];

    let data = {
      name: values.fullname,
      gmail: values.gmail,
      password: values.password,
      encrytp: sliced.join(''),
    };
    props.onAddData(data);

    setErrors(Validation(values));
    setDataIsCorrect(true);
  };

  // useEffect(() => {
  //   if (Object.keys(errors).length === 0 && dataIsCorrect) {
  //   props.subm(true)

  //   }

  // }, [errors]);

  return (
    <>
      <form onSubmit={handleLoginSubmit}>
        <lable htmlFor="fullname">Name</lable>
        <input
          name="fullname"
          value={values.fullname}
          onChange={handleChange}
        />
        {errors.fullname && <p>{errors.fullname}</p>}
        <lable htmlFor="gmail">G-Mail</lable>
        <input
          type="gmail"
          name="gmail"
          value={values.gmail}
          onChange={handleChange}
        />
        {errors.gmail && <p>{errors.gmail}</p>}
        <lable htmlFor="password">Password</lable>
        <input
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
        />
        {errors.password && <p>{errors.password}</p>}

        <button type="submit">Sign up</button>
      </form>
    </>
  );
}

export default Login;
