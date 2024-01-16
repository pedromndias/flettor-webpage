import { useEffect } from "react";
import { Helmet } from 'react-helmet';

const Contact = () => {

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  return (
    <div className="contact">
      <Helmet>
        <title> Contacte-nos - Flettor</title>
        <meta
          name="description"
          content="Entre em contacto com a Flettor. Estamos disponíveis para discutir os seus projetos e fornecer soluções personalizadas em engenharia civil."
        />
      </Helmet>
      <h1>CONTACTO</h1>
      <p className="contact-big">
        Qualquer consulta, informação ou pedido de cotação pode contactar por um dos seguintes canais:</p>
      <ul className="contact-ul">
        <li>T: +351 927563746 (Engº Nuno Alvarenga)</li>
        <li>M: geral@flettor.pt</li>
      </ul>
      <br />
      <p className="contact-big">Horário de contacto:</p>
      <ul className="contact-ul">
        <li>De 2ª-Feira a 6ª-Feira.</li>
        <li>Das 09:00 às 17:00.</li>
      </ul>
      <br />
      <p>
        OBSERVAÇÃO: Qualquer pedido de realização de projeto à Flettor deve ser devidamente analisado e discutido previamente entre os demais intervenientes (projetistas, fornecedores e cliente), na tentativa de se encontrar as melhores soluções de projeto e de construção, promover as devidas sinergias em prol da satisfação e exigências do cliente e reduzir problemas que advêm constantemente das fases de licenciamento e/ou de construção.
      </p>
    </div>
  )
}

export default Contact