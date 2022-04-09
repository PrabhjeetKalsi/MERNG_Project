import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import ApolloProvider from './ApolloProvider'

ReactDOM.render(ApolloProvider, document.getElementById('root'));
registerServiceWorker();
