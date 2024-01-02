// import logo from './logo.svg';
import './App.css';
import {useState} from 'react'; 

function App() {

  const[input,setInput]=useState();
  const[logo,setLogo]=useState();
  const[heading,setHeading]=useState('');

  function changeHandler(event){
    setInput(event.target.value);
  }

  function submitHandler(event){
    event.preventDefault();
    setLogo(input);
    setHeading(input);
    setInput('');
  }

  return (
    <>
    <h1>Generate your QR like this</h1>
    <div className='form-container'>
      <form>
      <input type="text" placeholder='Enter full Roll Number' onChange={changeHandler} value={input} required></input>
      <input type="submit" onClick={submitHandler}></input>
      </form>
      
    </div>
    <div className='image-container'>
      <img src={`https://chart.googleapis.com/chart?chs=500x500&cht=qr&chld=H&chl=${logo}`}></img>  
    </div>
    <h1>{heading}</h1>
  
    </>
  );
}

export default App;
