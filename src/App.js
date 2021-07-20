
import './App.css';


import HomeTemplate from './container/HomeTemplate';
import HomePage from './container/HomeTemplate/HomePage';
const showUserLayout=()=>{
  return <HomeTemplate
      Component={HomePage}
  />



}


function App() {
  return showUserLayout();
  

}

export default App;
