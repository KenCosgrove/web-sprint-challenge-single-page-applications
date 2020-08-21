import React from 'react'


const Form = (props) => {
    const {values, submit, update, errors, inputChange, checkboxChange} = props
   
    const onInputChange = event =>{
        const {name, value} =event.target
        inputChange(name, value)
        update(name, value)
    }
    
    const onCheckboxChange = event => {
        const {name, checked} = event.target
        checkboxChange(name, checked)
    }

    const onSubmit = event =>{
        event.preventDefault();
        submit()
    }

    return (
       
       <form onSubmit={onSubmit}>
             <div className='errors'>
                  <div>{errors.name}</div>
             </div> 
            <label >
                Name: <input
                 value={values.name} 
                 name="name" 
                 type="text"
                 onChange={onInputChange}/>
            </label>
            <br/>
            <label>Size:&nbsp;
        
          <select onChange={onInputChange} value={values.size}  name="size">
            <option value="">-- Select a Size --</option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </label>
            <br/>
            <label >
                pepperoni: <input 
                checked={values.pepperoni} 
                name="pepperoni"  
                onChange={onCheckboxChange} 
                type="checkbox"/>
            </label>
             <br/>
             <label >
                sausage: <input 
                checked={values.sausage} 
                name="sausage"  
                onChange={onCheckboxChange} 
                type="checkbox"/>
            </label>
            <br/>
            <label >
                mushrooms: <input 
                checked={values.mushrooms} 
                name="mushrooms"  
                onChange={onCheckboxChange} 
                type="checkbox"/>
            </label>
            <br/>
            <label >
                pineapple: <input 
                checked={values.pineapple} 
                name="pineapple"  
                onChange={onCheckboxChange} 
                type="checkbox"/>
            </label>
            <br/>
            <label >
                Special Instructions: <input
                 value={values.instructions} 
                 name="instructions" 
                 type="text"
                 onChange={onInputChange}/>
            </label>
            <br/>

            <button  >Add to Order</button>
       </form>
       
    )
}

export default Form
