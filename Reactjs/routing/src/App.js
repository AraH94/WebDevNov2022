import Navigation from "./Navigation"
import Contact from "./Contact"
import Home from "./Home"
import {
	BrowserRouter,
	Route,
	Routes,
	Link
} from 'react-router-dom'
import Project from "./project"
import TodoDetail from './todoDetail'
import NotFound from "./404"
function App() {
	return (
		<BrowserRouter>
			<Navigation />
			{/* npm run build */}
			<Routes>
				<Route path={'/navigation'} element={<Navigation />} />
				<Route path={'/'} element={<Home />} />
				<Route path={'/home'} element={<Home />} />
				<Route exact path={'/home'} element={<Contact />} />
				<Route path={'/contact'} element={<Contact />} />
				<Route path={"/project/:id"} element={<Project />} />
				<Route path={'/todo/:id'} element={<TodoDetail />} />
				<Route path={"*"} element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App