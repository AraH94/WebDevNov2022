import { useState } from "react"

function App() {
	const [state, setState] = useState([]);
	const [isClicked, setIsClicked] = useState(false);


	const handleInput = (e) => {
		fetch(`https://dummyjson.com/products/search?q=${e.target.value}`)
			.then(red => red.json())
			.then(data => setState(data))
	}

	const handleForms = (e) => {
		const { name, value } = e.target;
		let obj = {}
		if (name === "") {
			obj = {
				'searchoption': value
			}
		} else {
			obj = {
				[name]: value
			}
		}
		console.log(obj);
	}

	// Show products when you click the search button
	const ClickHandler = () => {
		fetch('https://dummyjson.com/products/')
			.then(res => res.json())
			.then(data => {
				console.log(data);

				setIsClicked(!isClicked)

				setTimeout(() => {
					setState(data)
					setIsClicked(false)
				}, 3000)
			})
	}

	return (
		<div>
			<header>
				<nav className="navbar navbar-expand-md navbar-dark bg-dark">

					<div className="container">
						<a className="navbar-brand" href="#"><i className="fas fa-warehouse me-2"></i>1337's Warehouse</a>
						<button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse"
							data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false"
							aria-label="Toggle navigation">
							<span className="navbar-toggler-icon"></span>
						</button>
						<div className="collapse navbar-collapse" id="collapsibleNavId">
							<ul className="navbar-nav me-auto mt-2 mt-lg-0">
								<li className="nav-item">
									<a className="nav-link" href="#" aria-current="page" onClick={ClickHandler}>Products <span
										className="visually-hidden">(current)</span></a>
								</li>
								<li className="nav-item">
									<a className="nav-link" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo" href="#" aria-current="page">Summary Cart <span
										className="visually-hidden">(current)</span></a>
								</li>
							</ul>

						</div>
					</div>
				</nav>

			</header>

			<main className="my-3">
				<div className="container-md">

					<div className="row my-2">
						<div className="col-md-6">
							<div className="input-group">
								<input type="text" className="form-control searchinput" placeholder="Search products" onChange={(e) => {
									handleInput(e) 
									handleForms(e)
								}} name="search" />
								<button className="btn btn-primary searchbtn" type="submit" onClick={ClickHandler}>Search</button>
							</div>
						</div>
					</div>

					<div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 products">

						{/* <div className="col">
							<div className="card h-100 bg-secondary text-light">
								<img src="https://i.dummyjson.com/data/products/6/1.png" className="product-image"
									alt="Product Image" />
								<div className="card-body">
									<h5 className="card-title">Product Title</h5>
									<p className="card-text">Product Description</p>
									<a href="#" className="btn btn-primary buynow">Buy Now</a>
								</div>
							</div>
						</div> */}

						{
							console.log(state)
						}

						{
							state.products !== undefined ?
								state.products.map((item, index) => (
									<div className="col" key={index}>
										<div className="card h-100 bg-secondary text-light">
											<img src={item.thumbnail} className="product-image"
												alt="Product Image" />
											<div className="card-body">
												<h5 className="card-title">{item.title}</h5>
												<p className="card-text">{item.description}</p>
												<a href="#" className="btn btn-primary buynow">Buy Now</a>
											</div>
										</div>
									</div>
								))
								:
								'No data'
						}

					</div>
				</div>

			</main>

			<div className="modal fade modal-lg" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h1 className="modal-title fs-5" id="exampleModalLabel">Cart Summary</h1>
							<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
						</div>
						<div className="modal-body">

							<div className="container">
								<div className="row">
									<div className="col-md-8">
										<table className="table">
											<thead>
												<tr>
													<th>Product</th>
													<th>Price</th>
												</tr>
											</thead>
											<tbody className="cart-summary">
												<tr>
													<td>Product 1</td>
													<td>$20.00</td>
												</tr>

											</tbody>
										</table>
									</div>
									<div className="col-md-4">
										<h2>Cart Total</h2>
										<table className="table">
											<tbody>
												<tr>
													<td><strong>Total</strong></td>
													<td><strong className="total_price">€100.00</strong></td>
												</tr>
											</tbody>
										</table>

									</div>
								</div>
							</div>


						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-danger" data-bs-dismiss="modal">Clear</button>
							<button type="button" className="btn btn-primary">Checkout</button>
						</div>
					</div>
				</div>
			</div>

			<footer className="bg-light text-center text-lg-start">
				<div className="container p-4">
					<div className="row">
						<div className="col-lg-6 col-md-12 mb-4 mb-md-0">
							<h5 className="text-uppercase">Footer Content</h5>

							<p>
								Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis
								molestias. Fugiat pariatur maxime quis culpa corporis vitae repudiandae aliquam
								voluptatem veniam, est atque cumque eum delectus sint!
							</p>
						</div>

						<div className="col-lg-3 col-md-6 mb-4 mb-md-0">
							<h5 className="text-uppercase">Links</h5>

							<ul className="list-unstyled mb-0">
								<li>
									<a href="#!" className="text-dark">Link 1</a>
								</li>
								<li>
									<a href="#!" className="text-dark">Link 2</a>
								</li>
								<li>
									<a href="#!" className="text-dark">Link 3</a>
								</li>
								<li>
									<a href="#!" className="text-dark">Link 4</a>
								</li>
							</ul>
						</div>

						<div className="col-lg-3 col-md-6 mb-4 mb-md-0">
							<h5 className="text-uppercase mb-0">Links</h5>

							<ul className="list-unstyled">
								<li>
									<a href="#!" className="text-dark">Link 1</a>
								</li>
								<li>
									<a href="#!" className="text-dark">Link 2</a>
								</li>
								<li>
									<a href="#!" className="text-dark">Link 3</a>
								</li>
								<li>
									<a href="#!" className="text-dark">Link 4</a>
								</li>
							</ul>
						</div>
					</div>
				</div>

				<div className="text-center p-3" style={{ 'backgroundColor': 'rgba(0, 0, 0, 0.2' }}>
					© 2023 1337's warehouse. All rights reserved.
				</div>
			</footer>
		</div>
	)
}
export default App