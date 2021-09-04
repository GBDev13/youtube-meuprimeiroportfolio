import { useState } from 'react';
import { FormContainer, Input, TextArea } from './styles';

export default function Form() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');

  return (
    <FormContainer>
      <form>
        <Input
          placeholder="Nome"
          value={nome}
          onChange={({ target }) => setNome(target.value)}
          required
        />
        <Input
          placeholder="E-mail"
          type="email"
          required
          value={email}
          onChange={({ target }) => setEmail(target.value)}
        />
        <TextArea
          placeholder="Mensagem"
          required
          value={mensagem}
          onChange={({ target }) => setMensagem(target.value)}
        />
      </form>
      <button type="button">ENVIAR</button>
    </FormContainer>
  );
}
