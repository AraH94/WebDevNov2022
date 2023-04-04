import Navigation from "./Navigation";

export default function Header() {
	return (
		<section id="menu-list" className="section-padding">
			<div className="container">
				<div className="row">
					<div className="col-md-12 text-center marb-35">
						<h1 className="header-h">Menu las carnes del Nahum</h1>
						<Navigation />
					</div>
				</div>
			</div>
		</section>
	)
}