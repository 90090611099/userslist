import React from "react";
import './form.css';
import { Formik, Form, Field } from 'formik';


function validateEmail(value) {
    let error;
    if (!value) {
      error = 'Mail is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = 'Invalid email address';
    }
   
    return error;
    
  }
  
  function validateIP(value) {
    let error;
    if (!value) {
        error = 'IP is required';
      } else if (value.length < 3) {
      error = 'Min 3 characters, please';
    }
    return error;
  }


export default class Forms extends React.Component {
    constructor(){
        super();
        this.state = {
            user: {
                name: '',
                email: '',
                ip: '',
            },
            disabledIp: true,
            disabledMail: true
            }
        }
    

        myhandleSubmit = (data) => {
        
        let newUser = data;
        this.setState({
            user: newUser
        })
        this.props.addUser(newUser)
        this.setState({
            user: {
                name: '',
                email: '',
                ip: ''
            }})
      }
     
      
      render(){
        
          return(
            
            <div className="form-inputs">
             
             <Formik
              
              onSubmit={ (values) => {
                this.myhandleSubmit(values)
                
              }}
              >
             
             {({ errors, touched }) => (
        <Form>
         <Field name="name" placeholder="name" type="text" className="form"/>

          <Field name="email" placeholder="email" validate={validateEmail} className="form"/>
          {errors.email && touched.email && <div className="errorMsg">{errors.email}</div>}

          <Field name="ip" placeholder="ip" validate={validateIP}  className="form"/>
          {errors.ip && touched.ip && <div className="errorMsg">{errors.ip}</div>}
        
        
          <button type="submit" className="submitBtn">Submit</button>
        </Form>
      )}
    </Formik>
        </div>
        )
    }
}
  

