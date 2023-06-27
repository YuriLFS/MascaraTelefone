import { ChangeEvent, useState } from 'react';
import { Input } from '@chakra-ui/react';
import { InputGroup } from "@chakra-ui/react";
import { InputLeftAddon } from '@chakra-ui/react';

function CaixaTelefone() {
  const [numero, setNumero] = useState("");
  const [ehValidoTelefone, setEhValidoTelefone] = useState(false);
  const [ehValidoDDD, setEhValidoDDD] = useState(false);

  function validarDDD(numero: string) {
    const telnumero = numero.replace(/[^\d]+/g, '');
    const DDD = /\d{2}/.exec(telnumero);

    const codigosDDD = [
      11, 12, 13, 14, 15, 16, 17, 18, 19,
      21, 22, 24, 27, 28, 31, 32, 33, 34,
      35, 37, 38, 41, 42, 43, 44, 45, 46,
      47, 48, 49, 51, 53, 54, 55, 61, 62,
      64, 63, 65, 66, 67, 68, 69, 71, 73,
      74, 75, 77, 79, 81, 82, 83, 84, 85,
      86, 87, 88, 89, 91, 92, 93, 94, 95,
      96, 97, 98, 99
    ];

    if (DDD !== null && codigosDDD.includes(parseInt(DDD[0]))) {
      return true;
    }

    return false;
  }

  function validar(numero: string) {
    const telnumero = numero.replace(/[^\d]+/g, '');

    if (!(telnumero.length >= 10 && telnumero.length <= 11)) {
      return false;
    }

    if (telnumero.length === 11 && telnumero.charAt(2) !== "9") {
      return false;
    }

    return true;
  }

  const mascara4 = (numero: string) => {
    const telIncomplete = /^(?!0)[(]?[0-9]{2}[)]?[\s-]?[0-9]{4,5}[\s-]?[0-9]{4}$/;
    const telValue = numero.replace(/[^\d]+/g, "");
  
    if (telIncomplete.test(telValue)) {
      if (telValue.length > 15) {
        return telValue.substring(0, 15); 
      }
  
      let telFormatted = telValue.replace(/^0/, "");
      telFormatted = telFormatted.replace(/(\d{2})(\d{4,5})(\d{4})/, "($1) $2-$3");
  
      return telFormatted;
    }
  
    return numero;
  };
  

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const telefone = event.target.value;
    setNumero(telefone);

    const validouTelefone = validar(telefone);
    const validouDDD = validarDDD(telefone);

    setEhValidoTelefone(validouTelefone);
    setEhValidoDDD(validouDDD);
  };

  const numeroFormatado4 = mascara4(numero);

  return (
    <>
      <InputGroup marginLeft={'12px'}>
      <InputLeftAddon children='+55' />
      <Input type="text" id="telefone" style={{textAlign:'center',backgroundColor:'white'}} focusBorderColor='black' placeholder="DDD + telefone" value={numeroFormatado4 || ''} onChange={handleChange} width={'80%'} marginBottom={'10px'} />
      </InputGroup>
      <p className={ehValidoDDD ? 'mensagem-valida validoSubilinhado' : 'mensagem-invalida invalidoSubilinhado'} >{ehValidoDDD ? 'DDD válido' : 'DDD inválido.'}</p>
      <p style={{marginBottom:'20px'}} className={ehValidoTelefone ? 'mensagem-valida validoSubilinhado' : 'mensagem-invalida invalidoSubilinhado'}>{ehValidoTelefone ? 'Telefone nos conformes' : 'Telefone inválido.'}</p>
    </>
  );
}

export default CaixaTelefone;
