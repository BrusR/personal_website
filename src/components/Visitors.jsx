import React from 'react'
import styles from '../style'
import { useEffect } from 'react'
import { useState } from 'react'
const Visitors = () => {
  function setVisitsMessage(msg) {
    var em_msg = document.querySelector('.num_visits_msg')
    em_msg.innerHTML = '<em>' + msg + '</em>'
  }
  
  useEffect(() => {
    const updateData = async () => {
      await fetch('https://zfgdv12khh.execute-api.us-east-1.amazonaws.com/dev/update_number_visits',
      {
        mode:'cors'
      }).then(json => {
        json.json().then(
          function(result){
            let json_parsed = JSON.parse(result.body)
            let data = json_parsed.number_visits
            console.log(data)
            setVisitsMessage('Congrats! You are the visitor number ' + data + ' to this site')
          })
      }).catch(err => console.log(err))
    }
    updateData();
  },[]);
  
  return(
    <div key='num_visitors' className={'flex-1 flex justify-center items-center \
flex-row m-3'}>
      <h2 className={styles.heading2 + ' text-center num_visits_msg'}></h2>
    </div>
  )
  
}

export default Visitors