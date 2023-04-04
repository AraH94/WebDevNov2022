import { Container} from "react-bootstrap";

import { Link } from 'react-router-dom';

import { useState } from 'react';

export default function Navigation() {

	const [menu, setMenu] = useState({
		todo: true,
		breakfast: false,
		lunch: false
	})

	return (
		<section id="menu-list" className="section-padding">
			<Container>
				<div className="row" id="menu-filters">

					<ul>
						<li><Link to={"/"} className={menu.todo ? "active filter" : ""} onClick={() => setMenu({ todo: true, breakfast: false, lunch: false })} data-filter=".menu-restaurant">Todo</Link></li>
						<li><Link to={"/breakfast"} className={menu.breakfast ? "active filter" : ""} onClick={() => setMenu({ todo: false, breakfast: true, lunch: false })} data-filter=".breakfast">Breakfast</Link></li>
						<li><Link to={"/lunch"} className={menu.lunch ? "active filter" : ""} onClick={() => setMenu({ todo: false, breakfast: false, lunch: true })} data-filter=".lunch">Lunch</Link></li>
					</ul>
				</div>
			</Container>
		</section>
	)
}
