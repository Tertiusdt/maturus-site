import './Contact.css'
import { useState } from 'react';

const Contact = () =>{
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
          ...prevState,
          [name]: value
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can handle form submission, like sending data to backend or displaying it
      };
    
      return (
        <div className='form-wrapper'>
          <h2>CONTACT US</h2>
          <form onSubmit={handleSubmit}>
            <div className='input-field'>
              <label htmlFor="firstName">First Name:</label>
              <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} />
            </div>
            <div className='input-field'>

              <label htmlFor="lastName">Last Name:</label>
              <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} />
            </div>
            <div className='input-field'>

              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
            </div>
            <div className='input-field'>

              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" value={formData.message} onChange={handleChange}></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      );
}

export default Contact