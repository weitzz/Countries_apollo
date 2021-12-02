import './style/global.scss'
import Cards from './components/Cards';
import Header from './components/Header'
import { ApolloProvider } from '@apollo/client'
import { client } from './config/client-graphql';
import { CountriesContextProvider } from './context/CountriesContext';
function App() {

  return (
    <ApolloProvider client={client}>
      <Header />
      <CountriesContextProvider>
        <Cards />
      </CountriesContextProvider>
    </ApolloProvider>
  );
}

export default App;
