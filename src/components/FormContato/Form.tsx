import { useState } from 'react';
import toast from 'react-hot-toast';
import { sendContactMail } from '../../services/sendMail';
import { FormContainer, Input, TextArea } from './styles';
import theme from '../../styles/theme';

export default function Form() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');

  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    if (!nome || !email || !mensagem) {
      toast('Preencha todos os campos para enviar sua mensagem!', {
        style: {
          background: theme.error,
          color: '#fff'
        }
      });
      return;
    }

    try {
      setLoading(true);
      await sendContactMail(nome, email, mensagem);
      setNome('');
      setEmail('');
      setMensagem('');
      toast('E-mail enviado com sucesso!', {
        style: {
          background: theme.secondary,
          color: '#fff'
        }
      });
    } catch {
      toast('Ocorreu um erro ao tentar enviar sua mensagem. Tente novamente!', {
        style: {
          background: theme.error,
          color: '#fff'
        }
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <FormContainer data-aos="fade-up">
      <form onSubmit={handleSubmit}>
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
        <button disabled={loading} type="submit">
          ENVIAR
        </button>
      </form>
    </FormContainer>
  );
}
