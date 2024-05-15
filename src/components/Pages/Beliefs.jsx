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

    function handleClick() {
     console.log('clicked the title of the song')
    }
  return (
    <>
    <h3 style={{margin:'10px', color:'blue'}}>Official Beliefs of the seventh-day Adventist Church</h3>
    {
      loading ? (
        <p style={{color:'green'}}>Loading...</p>
      ): (
     <table id='beliefsTable' style={{margin:'20px',background:'white'}}>
      <thead >
        <tr style={{color:'green'}}>
          <th>Number</th>
          <th>Title</th>
          <th>Brief Explanation</th>
        </tr>
      </thead>
      <tbody>
      {beliefs.map((belief, index) => {
        return (
          <tr key={index}>
            <td>{belief.number}</td>
            <td onClick={() => handleClick()}>{belief.title}</td>
            <td>{belief.content}</td>
          </tr>

      );
      })}
      </tbody>
     </table>
    )}
    </>
  )
}

export default Beliefs;
