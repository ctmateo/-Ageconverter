const getValue = () =>{
  let inputValue = document.getElementById('age').value
  let result= inputValue * 365;
  document.getElementById('value').innerHTML = result; 
}

const reset = () => {
  document.getElementById('age').value="";
  document.getElementById('value').innerHTML="0";
}


