import { Card } from "./componentes/Card/card.jsx";
import { Estilos } from "./componentes/EstilosGlobais/estilos.jsx";
import { ProvedorTema } from "./componentes/ProvedorTema/ProvedorTema.jsx";

function App () {
  return (
      <ProvedorTema>
          <Estilos />
          <Card>
              <h1>Freelando</h1>
          </Card>
      </ProvedorTema>
  );
}

export default App;
