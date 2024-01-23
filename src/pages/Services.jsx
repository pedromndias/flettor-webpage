import photo04 from "../assets/photo-04.jpg"
import { useEffect } from "react";
import { Helmet } from 'react-helmet';

const Services = () => {

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  return (
    <div className="services">
      <Helmet>
        <title>Serviços de Engenharia Civil - Flettor</title>
        <meta
          name="description"
          content="Explore os serviços de engenharia civil oferecidos pela Flettor. Desde projetos estruturais a consultoria, estamos aqui para atender às suas necessidades."
        />
      </Helmet>
      <div className="services-text">
        <h1>SERVIÇOS</h1>
        <p className="services-text-bigger">A Flettor disponibiliza serviços em várias vertentes da Engenharia Civil nomeadamente:</p>
        <ul>
        <li>Execução de projetos de estruturas, contenção periférica, distribuição de águas, rede de águas residuais e acústica em edifícios de habitação e de comércio/serviços;</li>
        <li>Apoio à gestão de projetos, com vista ao bom licenciamento em Câmaras Municipais e/ou outras entidades;</li>
        <li>Consultoria e apoio contínuo, em parceria com o coordenador ou gestor de projetos, nas diferentes fases de conceção do projeto, desde o estudo prévio à sua execução, articulando-se sempre a arquitetura com as diversas especialidades (a estabilidade, a eletromecânica, a rede elétrica, a segurança contra incêndios, entre outras);</li>
        <li>Apoio técnico em fase de obra, com possibilidade para pedidos de alteração quando tecnicamente viável;</li>
        <li>Criação de peças desenhadas organizadas e de leitura rápida para a preparação da obra;</li>
        <li>Elaboração de caderno de encargos na/s especialidade/s de engenharia em causa;</li>
        <li>Revisão de projetos;</li>
        <li>Apoio na preparação, organização e gestão de processos de concursos para empreitadas;</li>
        </ul>
      </div>
        <img src={photo04} className="services-picture" alt="projecting" />
      <div className="services-text-alt services-text-bigger">
        <p>
          Os membros técnicos que colaboram com a Flettor possuem um vasto conhecimento técnico e experiência profissional, sendo o corpo de engenharia creditado na ordem dos engenheiros. Destaca-se a boa formação académica no campo da engenharia civil, bem como o rigor, a eficiência e o seu profissionalismo.
        </p>
      </div>
      <div className="services-text services-text-bigger">
        <p>
        Fundador da Flettor, Nuno Alvarenga Soares tem um profundo gosto pela área da Engenharia Civil, procurando orientar a Flettor e seus clientes para projetos económicos, funcionais e bem articulados com a arquitetura. Com formação base no Instituto Superior Técnico, com especialização no ramo de estruturas, acumulou experiência em empresas do ramo de projetos, dedicando-se continuamente ao cálculo e concepção de projetos de estabilidade, geotecnia, águas, esgotos e acústica. Nos últimos anos, concentrou seus esforços em projetos de estruturas para edifícios de habitação, de comércio e escolas, aplicando sempre as soluções construtivas adequadas em cada situação.
        </p>
      </div>
    </div>
  )
}

export default Services