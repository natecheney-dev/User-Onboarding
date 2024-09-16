import React from 'react'

export default function FriendForm(props) {
    const {
        values,
        submit,
        change,
        disabled,
        errors,
      } = props

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
      }
    
      const onChange = evt => {
        /* 🔥 FIX THIS SO IT ALSO WORKS WITH CHECKBOXES */
        const { name, value, checked, type } = evt.target
        const valueToUse = type === 'checkbox' ? checked : value;
        change(name, valueToUse)
      }



    return(
        <form className='form-container' onSubmit={onSubmit}>
            <div className='form-group-submit'>
                <h2>Add a New User</h2>
                <button disabled={disabled}>submit</button>

                <div className='errors'>
          
                    <div>{errors.name}</div>
                    <div>{errors.email}</div>
                    <div>{errors.password}</div>
                    <div>{errors.terms}</div>
                </div>
            </div>
            <div className='form-group-inputs'>
                <h4>Information</h4>
                <label>Last Name: &nbsp;
                    <input
                     value={values.lastName}
                     onChange={onChange}
                     name='lastName'
                     type='text'
                    />
                </label>
                <label>First Name: &nbsp;
                    <input
                     value={values.firstName}
                     onChange={onChange}
                     name='firstName'
                     type='text'
                    />
                </label>
                <label>Email: &nbsp;
                    <input
                     value={values.email}
                     onChange={onChange}
                     name='email'
                     type='text'
                    />
                
                </label>
                <label>Password: &nbsp;
                    <input
                     value={values.password}
                     onChange={onChange}
                     name='password'
                     type='text'
                    />
                </label>
            </div>
            <label>Agree to Terms of Service: 
                <input
                    type='checkbox'
                    name='terms'
                    checked={values.terms}
                    onChange={onChange}
                />
        </label>

        </form>
    )
}