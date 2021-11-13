import React, {useState} from 'react';

import Card from "../UI/Card/Card"
import Login from '../Login/Login';
import Navigation from '../Navigation';

const Form = () => {

    const [formIsSubmitted, setFormIsSubmitted] = useState(false)

    const submitForm = () => {
      setFormIsSubmitted(true)
    }

  return (
    <Card>
      {!formIsSubmitted ? <Login subm={submitForm} /> : <Navigation /> }
    </Card>
  );
};

export default Form;
