import Container from 'react-bootstrap/Container';
import OrderEntry from './pages/entry/OrderEntry';
import CounterPage from './pages/counter/CounterPage';
import { OrderDetailsProvider } from './contexts/OrderDetails';
import { Switch, Route, Redirect } from 'react-router-dom';

function App() {
  return (
    <Container>
      <OrderDetailsProvider>
        {/* Summary page and entry page need provider */}
        <Switch>
          <Route exact path="/" component={OrderEntry} />
          <Route exact path="/counterpage" component={CounterPage} />
          {/* <OrderEntry /> */}
        </Switch>
      </OrderDetailsProvider>
      {/* confirmation page does not need provider */}
    </Container>
  );
}

export default App;
