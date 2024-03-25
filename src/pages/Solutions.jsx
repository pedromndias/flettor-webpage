import solutionPic01 from "../assets/solutions-01.png"
import solutionPic02 from "../assets/solutions-02.png"
import solutionPic03 from "../assets/solutions-03.png"
import solutionPic04 from "../assets/solutions-04.png"
import solutionPic05 from "../assets/solutions-05.png"
import solutionPic06 from "../assets/solutions-06.png"
import solutionPic07 from "../assets/solutions-07.png"
import solutionPic08 from "../assets/solutions-08.png"
import { useEffect } from "react";
import { Helmet } from 'react-helmet';

const Solutions = () => {

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  return (
    <div className="solutions">
      <Helmet>
        <title>Soluções Técnicas em Engenharia Civil - Flettor</title>
        <meta
          name="description"
          content="Descubra as soluções técnicas em engenharia civil oferecidas pela Flettor. Do design estrutural à execução, oferecemos expertise em diversas áreas."
        />
      </Helmet>
      <div className="solutions-text">
        <h1>SOLUÇÕES TÉCNICAS</h1>
        <p className="solutions-text-bigger">Os membros técnicos que colaboram com a Flettor possuem um vasto conhecimento técnico e experiência profissional, aliado a uma sólida formação académica no campo da engenharia civil. Como garantia de qualidade e eficiência, oferecem soluções adequadas e económicas para a execução de edifícios e suas infraestruturas complementares, destacando-se:</p>
        <ul>
          <li>Execução de projetos de estabilidade e geotecnia para edifícios de habitação, comerciais e/ou serviços, para licenciamento, execução ou apoio a obra;</li>
          <li>Uso de soluções construtivas de betão armado para estruturas correntes (porticadas ou de paredes resistentes), e com dimensionamento de lajes vigadas, aligeiradas e fungiformes;</li>
          <div className="solutions-pic-container">
            <img src={solutionPic01} alt="pilars" />
            <img src={solutionPic02} alt="ceiling" />
          </div>
          <li>Dimensionamento e execução de estruturas metálicas e mistas;</li>
          <img className="solutions-singlePic" src={solutionPic03} alt="metalic structure" />
          <li>Desenvolvimento e cálculo de estruturas metálicas, incluindo pormenorização de ligações aparafusadas e/ou ancoradas;</li>
          <div >
            <img className="solutions-pic-container-2-first" src={solutionPic04} alt="metalic structure" />
            <img className="solutions-pic-container-2-second" src={solutionPic05} alt="metalic connection" />
          </div>
          <li>Utilização de estruturas pré-fabricadas, com contacto e apoio de fornecedores especializados, quando haja a necessidade de empregar rápidas soluções em obra, sem necessidade de cofragem;</li>
          <img className="solutions-singlePic" src={solutionPic06} alt="pre-made structure" />
          <li>Modelação de estruturas em ambiente 3D e devidamente parametrizadas no apoio à fase de projeto e/ou para auxílio na preparação de obra, e com recurso a software REVIT (Autodesk);</li>
          <li>Execução de soluções estruturais em madeira, com pormenorização de ligações metálicas, entalhes e cortes;</li>
          <li>Reabilitação de edifícios, atendendo às necessidades específicas do cliente e suas pretensões;</li>
          <li>Conceção de soluções de contenção geotécnicas, como muros de suporte em consola e/ou de contrafortes;</li>
          <img className="solutions-singlePic" src={solutionPic07} alt="" />
          <li>Conceção de soluções geotécnicas através de fundações com estacas ou microestacas, quando um estudo geológico e geotécnico assim o determine;</li>
          <li>Adoção de soluções pré-esforçadas em elementos correntes de edifícios;</li>
          <li>Execução de pontes de pequeno vão, pedonais ou rodoviárias;</li>
          <li>Implementação de estruturas mistas, de metal e betão, e recurso a lajes com chapas colaborantes;</li>
          <li>Realização de mapas de quantidades e estimativais orçamentais para execução de estrutura e soluções geotécnicas.</li>
        </ul>
      </div>
    </div>
  )
}

export default Solutions