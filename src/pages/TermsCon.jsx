import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from 'react-helmet';

const TermsCon = () => {
    useEffect(() => {
        window.scrollTo(0, 0); 
      }, []);
    return (
        <div className="terms-con">
            <Helmet>
                <title>Termos & Condições - Flettor</title>
                <meta
                    name="description"
                    content="Leia os termos e condições da Flettor para compreender as diretrizes e responsabilidades ao utilizar os nossos serviços."/>
            </Helmet>
            <h2>TERMOS E CONDIÇÕES</h2>
            <h3>1. Introdução</h3>
            <p>Bem-vindo à Flettor! Ao aceder e utilizar o nosso site, concorda com
            estes Termos e Condições ("T&C").</p>
            <h3>2. Utilização do Site</h3>
            <p>Ao aceder e utilizar o nosso site, compromete-se a cumprir estes T&C
            e todas as leis e regulamentos aplicáveis. Se não concorda com
            qualquer parte destes T&C, por favor, não utilize o nosso site.</p>
            <h3>3. Propriedade Intelectual</h3>
            <p>Todos os conteúdos, design, gráficos, logótipos e materiais
            disponíveis no nosso site são propriedade exclusiva da Flettor e
            estão protegidos por direitos de autor e outras leis de propriedade
            intelectual.</p>
            <h3>4. Limitação de Responsabilidade</h3>
            <p>A Flettor não será
            responsável por quaisquer danos diretos, indiretos, incidentais,
            consequenciais ou especiais resultantes ou relacionados com o uso ou
            incapacidade de usar o nosso site.</p>
            <h3>5. Política de Privacidade</h3>
            <p>Ao utilizar o nosso site, concorda com a nossa Política de
            Privacidade, que pode ser encontrada aqui:
            <Link to="/privacy-policy"> Política de Privacidade</Link>.</p>
            <h3>6. Modificações</h3>
            <p>Reservamo-nos o direito de atualizar ou modificar estes T&C a
            qualquer momento sem aviso prévio. É da sua responsabilidade revisar
            periodicamente estes T&C para estar ciente de quaisquer atualizações
            ou modificações.</p>
            <h3>7. Lei Aplicável</h3>
            <p>Estes T&C são regidos e interpretados de acordo com as leis de
            Portugal. Qualquer disputa ou reclamação relacionada com estes T&C
            será submetida à jurisdição exclusiva dos tribunais de Portugal.</p>
            <h3>8. Contacto</h3>
            <p>Se tiver alguma dúvida ou preocupação sobre estes T&C, entre em
            contacto connosco em geral@flettor.pt.</p>
        </div>
    );
};

export default TermsCon;
