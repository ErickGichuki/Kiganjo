import React, { useState,useEffect } from 'react';
import axios from 'axios';

function Beliefs() {
  const [beliefs, setBeliefs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://two8-fundamentals-server.onrender.com/beliefs')
    .then((res) => {
      setBeliefs(res.data);
      setLoading(false)
    })
    .catch((error) => {
      console.error('Error fetching beliefs:', error);
      setLoading(false);
    });
  },[]);

  return (
    <div>
    <h3 style={{margin:'10px', color:'blue'}}>Official Beliefs of the seventh-day Adventist Church</h3>
    {
      loading ? (
        <p style={{color:'green'}}>Loading...</p>
      ): (
     <div style={{margin:'20px',background:'white',padding:'20px'}}>
      {beliefs.map((belief, index) => (
        <div key={index} style={{marginBottom:'20px'}}>
          <p><strong>Number:</strong>{belief.number}</p>
          <h4>{belief.title}</h4>
          <p style={{border:'1px solid #ccc', borderRadius:'8px',padding:'15px', background:'#f2f2f2'}}>{belief.content}</p>
        </div>
      ))}
     </div>
    )}
    </div>
  )
}

export default Beliefs;
