import { useEffect } from "react";
import { Helmet } from 'react-helmet';

const PrivacyPol = () => {
    useEffect(() => {
        window.scrollTo(0, 0); 
      }, []);

  return (

    <div className="priv-pol">
        <Helmet>
            <title>Política de Privacidade - Flettor</title>
            <meta
                name="description"
                content="Conheça a política de privacidade da Flettor. Saiba como protegemos e utilizamos as suas informações pessoais."
            />
        </Helmet>
        <h2>POLÍTICA DE PRIVACIDADE</h2>
        <h3>Última atualização: 18/01/2024</h3>
        <p>
        Bem-vindo à Flettor. A sua privacidade é uma prioridade para nós. Esta Política de Privacidade esclarece como tratamos as suas informações pessoais que recolhemos ou que nos são fornecidas através do nosso site.
        </p>
        <h3>1. Informações Recolhidas</h3>
        <p>Quando visita o nosso site, não recolhemos informações pessoais automaticamente através de cookies ou tecnologias semelhantes. As informações que poderemos recolher são limitadas e incluem:</p>
        <ul>
            <li>Dados de identificação pessoal (nome, endereço de e-mail, contacto telefónico) fornecidos voluntariamente por si.</li>
            <li>Dados de navegação, incluindo o seu endereço IP, tipo de navegador utilizado e páginas visitadas, mas apenas de forma anónima e agregada.</li>
        </ul>
        <h3>2. Utilização das Informações</h3>
        <p>Utilizamos as informações recolhidas de forma limitada e apenas para:</p>
        <ul>
            <li>Melhorar a sua experiência no nosso site.</li>
            <li>Fornecer e otimizar os nossos serviços.</li>
        </ul>
        <h3>3. Proteção das Informações</h3>
        <p>Implementámos medidas de segurança para proteger as suas informações contra acessos não autorizados, alterações, divulgações ou destruições.</p>
        <h3>4. Partilha de Informações</h3>
        <p>Não partilhamos, vendemos ou transferimos as suas informações pessoais a terceiros sem o seu consentimento explícito, salvo quando necessário para cumprir obrigações legais ou fornecer um serviço solicitado.</p>
        <h3>5. Links para Outros Sites</h3>
        <p>O nosso site pode conter links para websites de terceiros. Não somos responsáveis pelas políticas de privacidade ou conteúdos desses sites externos.</p>
        <h3>6. Alterações nesta Política</h3>
        <p>Reservamo-nos o direito de atualizar ou modificar esta Política de Privacidade a qualquer momento. Aconselhamos que consulte periodicamente esta página para se manter informado.</p>
        <h3>7. Contacto</h3>
        <p>Para qualquer questão relacionada com esta Política de Privacidade, por favor, entre em contacto connosco através do nosso e-mail geral@flettor.pt.</p>
    </div>
  )
}

export default PrivacyPol