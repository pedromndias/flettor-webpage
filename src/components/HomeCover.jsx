import LogoAnimation from "./LogoAnimation"

const HomeCover = ({onEnterClick}) => {

  return (
    <div className="cover-container">
      <div className="logo-animation">
        <LogoAnimation />
      </div>
      <div className="white-background">
        <button className="enter-button" onClick={onEnterClick}>
          Entrar
        </button>
      </div>
    </div>
  )
}

export default HomeCover