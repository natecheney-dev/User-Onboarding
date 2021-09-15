import React, { useState, useEffect } from 'react'
import './App.css';
import axios from 'axios';
import * as yup from 'yup';
import NewUser from './NewUser'
import NewUserForm from './NewUserForm'
import schema from './formSchema'
import { validate } from 'uuid';


const initialFormValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  terms: false
}
const initialFormErrors = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
}
const initialUser = [];
const initialDisabled = true;


function App() {
  const [user, setUser] = useState(initialUser);
  const  [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  

  const getUser = () =>{
    axios.get(`https://reqres.in/api/users`)
      .then(res=>{
        
        setUser(res.data.data)
      })
      .catch(err => console.error(err))
  }

  const postUser = aNewUser => {
    axios.post('https://reqres.in/api/users', aNewUser)
    .then(res=>{
      setUser([res.data, ...user]);

      setFormValues(initialFormValues);
    })
    .catch(err=>{
      console.error(err)
      setFormValues(initialFormValues);
    })
  }


  const validate = (name, value) => {
    yup.reach(schema,name)
      .validate(value)
      .then(() => setFormErrors({...formErrors, [name]: ''}))
      .catch(err => setFormErrors({...formErrors, [name]: err.errors[0] }))
  }

  const inputChange = (name, value) => {
    
    validate(name,value);
    setFormValues({
      ...formValues,
      [name]: value 
    })
  }

  const formSubmit = () => {
    const aNewUser = {
      first_name: formValues.firstName.trim(),
      last_name: formValues.lastName.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      // terms: ['terms'].filter(item => !!formValues[item])
    }
    
    postUser(aNewUser);
  }
  useEffect(() => {
    getUser()
  }, [])
  
  useEffect(() => {
    schema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])


  console.log(user);
  
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>User-Onboarding</h1>
      </header>
      <NewUserForm
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
      />
      {
        user.map(user => {
          return (
            <NewUser key={user.id} details={user} />
          )
        })
      }
    </div>
  );
}

export default App;
