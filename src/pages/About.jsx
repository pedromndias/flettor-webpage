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
          content="Conheça a Flettor, especializada em serviços de engenharia civil em Portugal. Saiba mais sobre a nossa experiência e compromisso com a excelência."
        />
      </Helmet>
      <div className="about-text">
        <h1>FLETTOR - Engenharia & Consultoria</h1>
        <p>
          A Flettor tem como objetivo e foco o desenvolvimento e implementação de soluções de engenharia civil na vertente de projeto de estruturas e fundações, nomeadamente conceção de edifícios de habitação e de comércio/serviços. Disponibilizamos os nossos serviços principalmente nas regiões de Lisboa, Centro e Alentejo.
        </p>
      </div>
      <img className="about-text-picture" src={photo01} alt="construction" />
      <div className="about-text">
        <p>
            Pretende proporcionar soluções sustentadas, atuais, inovadoras e que permitam criar valor ao nosso sistema inter-urbano. Para tal, é de realçar a nossa capacidade de encontrar soluções técnicas que se adequem a cada arquitetura e sua envolvente exterior definida, e que facilitem a sua implementação em fase de obra. Não obstante, em cada projeto pretende-se fornecer soluções seguras, duradouras e que proporcionem o conforto desejado aos nossos clientes.
        </p>
      </div>

    </div>
  )
}

export default About