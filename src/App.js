import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Frase from './components/Frase';

function App(){

  const [frase, setFrase] = useState({});

  

  const consultarAPI = async () => {
    const url = 'https://breaking-bad-quotes.herokuapp.com/v1/quotes';
    const resultado =  await axios(url)

    setFrase(resultado.data[0]);
  }

  //llamando a la API siempre que el componente se monta (renderiza)
  useEffect( () =>{
    consultarAPI();
  }, [] );

  console.log(frase);

  return(
    <div className="contenedor">
      <Frase 
        frase={frase}
      />
      
      <button onClick={consultarAPI}>
        Generate a new quote
      </button>
    </div>  
  )
}

export default App;