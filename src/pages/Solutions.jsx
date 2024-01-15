import solutionPic01 from "../assets/solutions-01.png"
import solutionPic02 from "../assets/solutions-02.png"
import solutionPic03 from "../assets/solutions-03.png"
import solutionPic04 from "../assets/solutions-04.png"
import solutionPic05 from "../assets/solutions-05.png"
import solutionPic06 from "../assets/solutions-06.png"
import solutionPic07 from "../assets/solutions-07.png"
import solutionPic08 from "../assets/solutions-08.png"
import { useEffect } from "react";

const Solutions = () => {

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  return (
    <div className="solutions">
      <div className="solutions-text">
        <h1>SOLUÇÕES TÉCNICAS</h1>
        <p className="solutions-text-bigger">Os membros técnicos que colaboram com a Flettor possuem um vasto conhecimento técnico e experiência profissional, aliado a uma boa formação académica no campo da engenharia civil. Como garantia de qualidade e eficiência, podem proporcionar soluções adequadas e económicas com vista à execução de edifícios e infrastruturas complementares solicitados pelos seus clientes, destancando-se:</p>
        <ul>
          <li>Execução de projetos de estabilidade, águas e acústica para edifícios de habitação, comerciais e/ou de escritórios, na vertente de licenciamento, execução ou apoio em obra;</li>
          <li>O uso de soluções construtivas de betão armado em estruturas correntes, em pórticos ou em paredes resistentes, com lajes vigadas, aligeiradas e fungiformes;</li>
          <div className="solutions-pic-container">
            <img src={solutionPic01} alt="pilars" />
            <img src={solutionPic02} alt="ceiling" />
          </div>
          <li>Dimensionamento e execução de estruturas metálicas e mistas;</li>
          <img className="solutions-singlePic" src={solutionPic03} alt="metalic structure" />
          <li>Desenvolvimento e cálculo de estruturas metálicas, incluindo suas ligações metálicas;</li>
          <div >
            <img className="solutions-pic-container-2-first" src={solutionPic04} alt="metalic structure" />
            <img className="solutions-pic-container-2-second" src={solutionPic05} alt="metalic connection" />
          </div>
          <li>A utilização de estruturas pré-fabricadas, com comunicação e apoio de fornecedores deste tipo de soluções, quando haja necessidade de empregar rápidas soluções em obra, sem necessidade de cofragem;</li>
          <img className="solutions-singlePic" src={solutionPic06} alt="pre-made structure" />
          <li>Criação de estruturas em ambiente 3D integradas em BIM, para apoio em fase de projeto e/ou para auxílio na preparação de obra, com recurso a software REVIT (Autodesk);</li>
          <li>Execução de elementos estruturas em madeira com criação de ligações, entalhes e cortes;</li>
          <li>Desenvolvimento e cálculo de estruturas metálicas, incluindo suas ligações metálicas;</li>
          <li>Reabilitação de edifícios, indo ao encontro das necessidades do cliente para as pretensões em causa;</li>
          <li>Conceção de soluções de contenção geotécnicas, como muros de suporte em consola e/ou de contrafortes;</li>
          <img className="solutions-singlePic" src={solutionPic07} alt="" />
          <li>Conceção de soluções geotécnicas através de fundações com estacas ou microestacas, quando um estudo geológico e geotécnico assim o determine;</li>
          <li>Adoção de soluções pré-esforçadas em elementos correntes de edifícios;</li>
          <li>Execução de pontes de pequeno vão, pedonais ou rodoviárias;</li>
          <li>Execução de estruturas mistas;</li>
          <li>Execução de redes de distrubuição de águas e de esgotos prediais com ligação a rede pública, e com interpretação de plantas cadastrais quando necessário;</li>
          <img className="solutions-singlePic" src={solutionPic08} alt="" />
          <li>Execução e dimensionamento de soluções correntes de acústica com base na regulamentação portuguesa.</li>
        </ul>
      </div>
    </div>
  )
}

export default Solutions