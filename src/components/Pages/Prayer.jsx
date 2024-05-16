import React, { useState } from 'react'

function Prayer() {
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    email: '',
    prayerRequest:''
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch("http://localhost:3000/prayers",{
      method: "POST",
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(formData)
    })
    .then(response => {
      if (response.ok) {
        setFormData({
          name:'',
          number:'',
          email:'',
          prayerRequest:''
        });
      } else {
        console.error('failed to submit');
      }
    })
    .catch (error => {
      console.error('Error:', error);
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };


  return (
    <div id='prayer_Container'>
      <form onSubmit={handleSubmit}>
        <h3 id='prayerh3'>Sweet hour of prayer</h3>
        <h4 id='prayerh4'>1 John 5:14-15</h4>
        <p>And this is the confidence that we have in him, that if we ask any thing according to his will, he heareth us:</p>
        <p>And if we know that he hear us, whatsover we ask, we know that we have the petitions that we desired of him.</p>
        <input 
         type='text' 
         placeholder='Enter your Name'
         name='name'
         value={formData.name}
         onChange={handleChange}
          required 
          />
        <input 
         type='tel' 
         placeholder='Enter your Number'
         name='number'
         value={formData.number}
         onChange={handleChange}
        />
        <input 
         type='email' 
         placeholder='Enter your Email'
         name='email'
         value={formData.email}
         onChange={handleChange}
         /><br></br>
        <input 
        type='text'
        placeholder='Write your prayer requests here'
         name='prayerRequest'
         value={formData.prayerRequest}
         onChange={handleChange}
         /><br></br>
        <button id='prayer'type='submit' >Submit</button>
      </form>
    </div>
  )
}

export default Prayer;
