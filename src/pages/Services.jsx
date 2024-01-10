import photo04 from "../assets/photo-04.jpg"

const Services = () => {
  return (
    <div className="services">
      <div className="services-text">
        <h1>SERVIÇOS</h1>
        <p>A Flettor Lda disponibiliza serviços em várias vertentes da Engenharia Civil nomeadamente:</p>
        <ul>
        <li>Execução de projetos de estruturas, contenção periférica, de distribuição de águas e de rede de águas residuais e de acústica em edifícios de habitação ou de comércio;</li>
        <li>Apoio à gestão de projetos, com vista ao licenciamento em Câmaras Municipais e/ou outras entidades;</li>
        <li>Consultoria e apoio contínuo, em parceria com o coordenador ou gestor de projetos, na realização de projetos nas diferentes fases de concepção, desde o estudo prévio à fase da execução, e articulado sempre com outras áreas da construção, como a arquitetura, a eletromecânica, a rede elétrica, a segurança contra incêndios, entre outras;</li>
        <li>Apoio técnico em fase de obra, com possibilidade para pedidos de alteração em obra quando tecnicamente viável;</li>
        <li>Criação de peças desenhadas organizadas e de rápida leitura para preparação de obra;</li>
        <li>Criação de caderno de encargos na/s especialidade/s de engenharia em causa;</li>
        <li>Apoio a revisão de projetos;</li>
        <li>Apoio à preparação/organização e gestão de processos de concursos.</li>
        </ul>
      </div>
        <img src={photo04} className="services-picture" alt="projecting" />
      <div className="services-text-alt services-text-bigger">
        <p>
          Os membros técnicos que colaboram com a Flettor possuem um vasto conhecimento técnico e experiência profissional, sendo o corpo de engenharia creditado na ordem dos engenheiros. Destaca-se a boa formação académica no campo da engenharia civil, bem como o rigor, a eficiência e o seu profissionalismo
        </p>
      </div>
      <div className="services-text services-text-bigger">
        <p>
          Como fundador da Flettor, Nuno Alvarenga Soares, assume um profundo gosto pela área da Engenharia Civil, tentando direcionar a Flettor e os seus cliente para projetos económicos, funcionais e bem articulados com a arquitetura. Tem a sua base de formação no Instituto Superior Técnico, passando por empresas do ramo de projeto, e desenvolvendo constantemente projetos no âmbito das estruturas, águas e esgotos e acústica. Tem-se dedicado nos seus últimos anos a projetos de estruturas para edifícios de habitação, comércio e escolas, onde uma diversidade de soluções construtivas são aplicadas.
        </p>
      </div>
    </div>
  )
}

export default Services