import { Container, Form } from "./styles"

import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { Textarea } from "../../components/Textarea"
import { NoteItem } from "../../components/NoteItem"
import { Section } from "../../components/Section"
import { Button } from "../../components/Button"

export function New() {
  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <h1>Criar Nota</h1>
            <a href="/">voltar</a>
          </header>

          <Input
            placeholder="Título"
          />
          <Textarea placeholder="Observações" />

          <Section title="Links úteis">
            <NoteItem
              value="https://www.google.com"
            />
            <NoteItem
              placeholder="Novo link"
              isNew
            />
          </Section>

          <Section title="Marcadores">
            <div className="tags">
              <NoteItem
                value="react"
              />
              <NoteItem
                placeholder="Nova tag"
                isNew
              />
            </div>
          </Section>

          <Button title="Salvar"/>
        </Form>
      </main>
    </Container>
  )
}