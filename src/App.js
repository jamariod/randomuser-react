import React from "react";
import Cardusers from "./components/card";
import "./App.css";
import "bulma/css/bulma.css";
import { Section, Container, Columns, Column } from "bloomer";

function App() {
  return (
    <div className="App">
      <header clasName="App-header">
        <p>User Profiles</p>
      </header>
      <Section>
        <Container>
          <Columns>
            <Column>
              <Cardusers />
            </Column>
            <Column>
              <Cardusers />
            </Column>
            <Column>
              <Cardusers />
            </Column>
          </Columns>
        </Container>
      </Section>
    </div>
  );
}

export default App;
