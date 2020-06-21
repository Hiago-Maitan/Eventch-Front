import axios from 'axios';

const regEmpresaAPI = axios.create({
	baseURL: 'https://eventech.outsystemscloud.com/Core/rest/Company/v1',
});

export default regEmpresaAPI;

// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// class App extends React.Component {
//   state={
//     curTime : new Date().toLocaleString(),
//   }
//   render(){
//     return (
//       <div className="App">
//         <p>Current Time : {this.state.curTime}</p>
//       </div>
//     );
//   }
// }

// export default App