import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
  <Navbar title = "TextUtils"  aboutapp="about TextUtils"/>
  {/* <Navbar /> */}
  <div className="container">
    <TextForm heading = "Enter the text to analyze below"></TextForm>
  </div>
  </>
  ) 
}


export default App;
