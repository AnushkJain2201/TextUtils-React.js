import React ,{ useState } from "react";
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

function App() {

  const [mode , setMode] = useState('light');
  const [text , setText] = useState('Enable Dark Mode');
  const [alert, setAlert] = useState(null)

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      setText('Disable Dark Mode');
      document.body.style.backgroundColor = 'black';
      showAlert("Dark Mode Has Been Enabled" , "success");
      document.title = "TextUtils - DarkMode";
    }
    else{
      setMode('light');
      setText("Enable Dark Mode");
      document.body.style.backgroundColor = 'white';
      showAlert("Dark Mode Has Been Disabled" , "success");
      document.title = "TextUtils - LightMode";
    }
  }

  const showAlert = (message , type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    } , 2000);
  }  

  return (
    <>
      <Navbar title="TextUtils" mode = {mode} toggleMode = {toggleMode} text = {text}/>
      <Alert alert = {alert}/>
      <div className="container my-5">
      <TextForm showAlert = {showAlert} heading="Enter The Text To Analyze" mode = {mode}/>
      {/* <About /> */}
      </div>
    </>
  );
}

export default App;
