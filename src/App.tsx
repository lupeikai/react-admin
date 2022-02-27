import React, { useEffect } from 'react';
import './App.scss';
import axios from 'axios';

function App() {
  useEffect(()=>{
    axios.get('/ajax/moreComingList?token=&movieIds=1287590,1445469,1277950,1277951,1357865,1354748,1328669,1337941,345276,1359434&optimus_uuid=7927D76097E211ECB3CE3BDBF8552D9DB1227BE564804EB78671CE7DF1E1642C&optimus_risk_level=71&optimus_code=10').then(res=>{
      console.log(res,'res')
    })
  },[])
  return (
    <div className="App">
      app
      <div>12</div>
    </div>
  );
}

export default App;
