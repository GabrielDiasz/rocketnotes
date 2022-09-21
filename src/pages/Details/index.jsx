import { Container, Links, Content } from "./styles"

import { Tag } from "../../components/Tag"
import { Header } from "../../components/Header"
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"
import { Section } from "../../components/Section"

export function Details() {

  return (
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title="Excluir nota"></ButtonText>

          <h1>Introdução ao React</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex debitis eaque dolores aliquam adipisci qui et asperiores pariatur praesentium quos, provident vel corporis iusto architecto in? Eum ducimus nam enim? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa itaque corrupti saepe tenetur omnis reprehenderit odit voluptates cupiditate commodi. Necessitatibus iure aliquam expedita voluptatem quod iste quae numquam tempore sunt.</p>

          <Section title="Links úteis">
            <Links>
              <li><a href="#">Rocketseat</a></li>
              <li><a href="#">Rocketseat</a></li>
              <li><a href="#">Rocketseat</a></li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="Express"></Tag>
            <Tag title="Node"></Tag>
          </Section>

          <Button title="Voltar" />
        </Content>
      </main>
    </Container>
  )

}