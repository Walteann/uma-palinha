import "./App.scss";

import { BrowserRouter} from 'react-router-dom';

import { RoutesApp } from './routes';

function App() {
    return <div className="App">
		<BrowserRouter>

			{/* <Routes>

				<Route path="/" element={<Welcome />}></Route>
				<Route path="/home" element={<Home />}>
					<Route path="filho1" element={<Page1/>}></Route>
					<Route path="filho2" element={<Page2/>}></Route>

				</Route>

			</Routes> */}

			<RoutesApp />

		</BrowserRouter>
	</div>;
}

export default App;
