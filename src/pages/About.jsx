import photo01 from "../assets/photo-01.jpg"

const About = () => {
  return (
    <div className="about">
      <div className="about-text">
        <h1>Flettor - Engenharia & Consultoria</h1>
        <p>
            A Flettor Lda tem como objetivo e foco o desenvolvimento e implementação de soluções de engenharia civil no âmbito do projeto, nomeadamente no sector da construção de edifícios.
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