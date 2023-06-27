import './App.css';
import CaixaTelefone from './InputNumero';
import { Stack } from '@chakra-ui/react'


function App() {
  return (
    
    <div className="App">
      <Stack id='backGround'>
        <Stack id='caixa'>
        <strong style={{fontSize:"20px",marginTop:'15px'}} >Digite seu número de telefone</strong><br/>
        <strong style={{fontSize:"15px"}} >Não coloque "0" na frente de DDD</strong><br/><br/>
        <CaixaTelefone />
        </Stack>
      </Stack>
    </div>
    
  );
}

export default App;
