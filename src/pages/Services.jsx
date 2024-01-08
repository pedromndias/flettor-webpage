import photo03 from "../assets/photo-03.jpg"

const Services = () => {
  return (
    <div className="services">
      <div className="services-text">
        <h1>Serviços</h1>
        <p>
        A Flettor Lda disponibiliza serviços em várias vertentes da Engenharia Civil nomeadamente:
        <li>Execução de projetos de estruturas, contenção periférica, de distribuição de águas e de rede de águas residuais e de acústica em edifícios de habitação ou de comércio;</li>
        <li>Apoio à gestão de projetos, com vista ao licenciamento em Câmaras Municipais e/ou outras entidades;</li>
        <li>Consultoria e apoio contínuo, em parceria com o coordenador ou gestor de projetos, na realização de projetos nas diferentes fases de concepção, desde o estudo prévio à fase da execução, e articulado sempre com outras áreas da construção, como a arquitetura, a eletromecânica, a rede elétrica, a segurança contra incêndios, entre outras;</li>
        <li>Apoio técnico em fase de obra, com possibilidade para pedidos de alteração em obra quando tecnicamente viável;</li>
        <li>Criação de peças desenhadas organizadas e de rápida leitura para preparação de obra;</li>
        <li>Criação de caderno de encargos na/s especialidade/s de engenharia em causa;</li>
        <li>Apoio a revisão de projetos;</li>
        <li>Apoio à preparação/organização e gestão de processos de concursos.</li>
        </p>
      </div>
      <div className="services-text-picture-container">
        <img src={photo03} className="services-text-picture" alt="projecting" />
      </div>
    </div>
  )
}

export default Services