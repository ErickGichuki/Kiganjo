import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Hymns() {
  const [hymns, setHymns] = useState([]);
  const [processing, setProcessing] = useState(true);
  const [selectedHymn, setSelectedHymn] = useState(null);

  useEffect(() => {
    axios.get('https://jsons-7r1j.onrender.com/hymns')
    .then(res => {
      setHymns(res.data)
      setProcessing(false)
    })
    .catch((error) => {
      console.error('Error while fetching the hymns:', error);
      setProcessing(false);
    });
  },[]);

  const displayLyrics = (hymn) => {
    setSelectedHymn(hymn);
  };

  const goBack =() =>{
    setSelectedHymn(null);
  }

  return (
    <>
 
    <h4 style={{textAlign:'center',padding:'10px', color:'blue'}}>Hymns that uplifts</h4>
    {processing ? (
      <p style={{color:'green'}}>Processing...</p>
    ) : selectedHymn ? (
      <div>
        <h4>{selectedHymn.title}</h4>
        <p>{selectedHymn.lyrics}</p>
        <button id='goBack' onClick={goBack}>Go Back</button>
      </div>
    ) : (
      
      <table id='hymnsTable'>
        <thead>
          <tr>
            <th>Number</th>
            <th>Title</th>
            <th>Key</th>
          </tr>
        </thead>
        <tbody>
          
          { hymns.map((hymn, index) => (
            <tr id='hymnstr' key={index}>
              <td>{hymn.number}</td>
              <td onClick={()=>displayLyrics(hymn)}>{hymn.title}</td>
              <td>{hymn.key}</td>
            </tr>
          ))
      }
        </tbody>
      </table>
      )}
      
    </>
  )
}

export default Hymns;
