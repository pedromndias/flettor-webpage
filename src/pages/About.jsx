import { useEffect } from "react";
import photo01 from "../assets/photo-01.jpg"
import { Helmet } from 'react-helmet';

const About = () => {

  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0); 
  }, []);

  return (
    <div className="about">
      {/* Let's use react-helmet package to improve the SEO: */}
      <Helmet>
        <title>Flettor - Engenharia & Consultoria</title>
        <meta
          name="description"
          content="Conheça a Flettor, especializada em serviços de engenharia civil. Saiba mais sobre a nossa experiência e compromisso com a excelência."
        />
      </Helmet>
      <div className="about-text">
        <h1>FLETTOR - Engenharia & Consultoria</h1>
        <p>
            A Flettor Lda tem como objetivo e foco o desenvolvimento e implementação de soluções de engenharia civil na vertente de projeto, nomeadamente para a conceção de edifícios de habitação e de comércio/serviços.
        </p>
      </div>
      <img className="about-text-picture" src={photo01} alt="construction" />
      <div className="about-text">
        <p>
            Pretende proporcionar soluções sustentadas, atuais, inovadoras e que permitam criar valor ao nosso sistema inter-urbano. Para tal é de realçar a nossa capacidade em ir ao encontro de soluções técnicas que se adequem a uma arquitetura e sua envolvente exterior definida num determinado espaço físico, e que facilitem a sua realização em fase de obra. Não obstante, cada projeto pretende oferecer soluções seguras, duradouras e que tragam o conforto desejado dos seus clientes e utentes.
        </p>
      </div>

    </div>
  )
}

export default About