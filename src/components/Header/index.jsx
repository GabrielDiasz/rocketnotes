import { RiShutDownLine } from 'react-icons/ri' 
import { Container, Profile, Logout } from "./styles";

export function Header() {
  return (
    <Container>

      <Profile to="/profile">
        <img src="http://github.com/GabrielDiasz.png" alt="Foto do usuário" />

        <div>
          <span>Bem vindo</span>
          <strong>Gabriel Dias</strong>
        </div>
      </Profile>

      <Logout>
        <RiShutDownLine />
      </Logout>

    </Container>
  )
}