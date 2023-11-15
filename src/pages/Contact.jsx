
function Contact({onSubmitHandler}) {
  const formData ={
    name: '',
    email: '',
    phone: ''
  }
const handleInputChange = (e) => {
    console.log(e.target.value);
}
  return (
    <div>
       <h2>Contact us!</h2>
       <form onSubmit={onSubmitHandler}>
          <div>
            <input 
              name="name" 
              type="text" 
              placeholder='Enter your name'
              required
              value={formData.name}
              onChange={handleInputChange} />
              {errors.name && <p className='errors'>{errors.name}</p>}
          </div>
         <div>
          <input 
            name="email" 
            type="text" 
            placeholder='Enter your email'
            required
            value={formData.email}
            onChange={handleInputChange} />
            {errors.email && <p className='errors'>{errors.email}</p>}
         </div>
         <div>
           <input 
            name="phone" 
            type="text" 
            placeholder='Enter your phone number'
            required
            value={formData.phone}
            onChange={handleInputChange} />
            {errors.phone && <p className='errors'>{errors.phone}</p>}
         </div>
          <div>
           <input type="submit" value="submit" className='btn btn-dark' />        
          </div>
       </form>
    </div>
  );
}

export default Contact;