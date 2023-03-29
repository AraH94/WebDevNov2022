// import { useState } from "react"

// function Search({ product}) {
// 	const [searchInput, setSearchInput] = useState('');
// 	const [filteredProducts, setFilteredProducts] = useState([...product]);

	// filter products based on search input
// 	const handleSearch = (e) => {
// 		setSearchInput(e.target.value);
// 		const keyword = e.target.value.toLowerCase();
// 		const filtered = product.filter((product) => product.name.toLowerCase().includes(keyword));
// 		setFilteredProducts(filtered);
// 	};
// 	return (
// 		<div>
// 			<input type="text" value={searchInput} onChange={(e) => handleSearch(e)} />
// 			<button>Search</button>
// 			{filteredProducts.map((products) => (
// 				<div key={products.id}>
// 					<img src={products.thumbnail} alt={products.name} />
// 					<h2>{products.name}</h2>
// 					<p>{products.description}</p>
// 				</div>
// 			))
// 			}
// 		</div >

		// <div class="col">
		// 	<div className="col-md-6">
		// 		<div className="input-group">
		// 			<input type="text" className="form-control searchinput" placeholder="Search products" onChange={handleForms} name="search" />
		// 			<button className="btn btn-primary searchbtn" type="submit">Search</button>
		// 		</div>
		// 	</div>

		// 	<div class="card h-100 bg-secondary text-light">
		// 		<img src={products.thumbnail} class="product-image"
		// 			alt="Product Image" />
		// 		<div class="card-body">
		// 			<h5 class="card-title">{products.title} - {products.price}</h5>
		// 			<p class="card-text">{products.description}</p>
		// 			<a href="#" class="btn btn-primary buynow" data-id="${product.id}">Buy now</a>
		// 		</div>
		// 	</div>
// 		// </div>
// 	)
// }

// export default Search