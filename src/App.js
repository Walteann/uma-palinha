import "./App.scss";

import { BrowserRouter} from 'react-router-dom';

import { RoutesApp } from './routes';
import { Provider } from "react-redux";
import { store } from './store';

function App() {
    return <div className="App">
		<Provider store={store}>
			<BrowserRouter>
				<RoutesApp />
			</BrowserRouter>
		</Provider>
	</div>;
}

export default App;
