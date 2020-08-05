import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css';

function TeacherItem(){
  return(
  <article className="teacher-item">
<header>
  <img src="https://avatars1.githubusercontent.com/u/60990935?s=460&u=6eac8c5d69de73a638cad6d0dab0889cb32f4283&v=4" alt="Eder Daniel Domingues"/>
  <div>
    <strong>Eder Daniel Domingues</strong>
    
    <span>Incentivos</span>
  </div>
</header>
<p>
  <br/> <br/>
  Perseverança é meu estilo de vida.<br/><br/>Nunca desisto de atingir meus objetivos, por mais dificeis que sejam, acreditando <br/>sempre que em Deus eu posso tudo, luto com todas as minhas forças e busco <br/>ajudar o máximo de pessoas a encontrar o caminho do conhecimento, neste momento estudo programação de computadores, contra todos os que dizem <br/>que pela minha idade eu não teria chances de aprender e mesmo que aprendesse não teria chances no mercado de trabalho, não me importo, se Deus me deu<br/> inteligência para estudar e aprender, com certeza, está preparando um ótimo futuro para mim no mundo da programação.
</p>
<footer>
  <p>
    Preço / hora
    <strong> R$ 80,00</strong>
  </p>
  <button type="button">
    <img src={whatsappIcon} alt="Whatsapp" />
    Entrar em contato
  </button>
</footer>
</article>
  )
}
export default TeacherItem;
