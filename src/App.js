import React, {useState} from "react";
import Form from './Form'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import formSchema from './formSchema'
import * as yup from 'yup'
import './App.css';
import axios from 'axios'

const initialData= [
  {
  name: '',
  size: '',
  pepperoni: false,
  sausage: false,
  mushrooms: false,
  pineapple: false,
  instructions: ''
  }
]
const initialFormErrors = {
  name: '',

}

const App = () => {
const [formData, setFormData] = useState(initialData)
const [formErrors, setFormErrors] = useState(initialFormErrors)
const [order, setOrder] = useState([])

const update = (inputName, inputData)=>
  setFormData({...formData, [inputName]: inputData})


  const submit = ()=>{
    const newOrder = {
      name: formData.name,
      size: formData.size,
      instructions: formData.instructions,
      pepperoni: formData.pepperoni,
      sausage: formData.sausage,
      mushrooms: formData.mushrooms,
      pineapple: formData.pineapple,
    }
    setOrder([...order, newOrder])
    console.log(newOrder)
    setFormData({ 
    name: '',
    size: '',
    pepperoni: false,
    sausage: false,
    mushrooms: false,
    pineapple: false,
    instructions: ''})
    
        } 

        const checkboxChange = (name, isChecked) =>{
          setFormData({
            ...formData, [name]: isChecked
            })
          }
        const inputChange = (name, value) => {
         
          yup
            .reach(formSchema, name)
            .validate(value)
            .then(valid => {
              setFormErrors({
                ...formErrors,
                [name]: "",
              })
            })
            .catch(err => {
              setFormErrors({
                ...formErrors,
                [name]: err.errors[0],
              })
            })
      
          }
      

  return (
    
    <Router>
      
      <h1>Lambda Za</h1>
    
      <Link to='./'>Home</Link>
      <Link to='./pizza'>Order</Link>
      <Route path='/pizza' component={Form}>
      <Form 
           update={update}
           values={formData} 
           inputChange={inputChange} 
           checkboxChange={checkboxChange}
           errors = {formErrors}
           submit={submit}  />
      </Route>
      
      
        
     
    </Router>
  );
};
export default App;
