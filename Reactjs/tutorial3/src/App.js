// In terminal first -> npm install and then npm start

function App() {
	const handleForms = (e) => {
		// console.log(e.target);
		// console.log(e);
		// console.log(e.target.name)
		// https://javascript.info/destructuring-assignment
		// const {x,y,z} = {x:1,y:2,z:3}
		const { name, value } = e.target;
		// const obj = {
		// 	[name]: value // firstname: 'Joe'
		// }
		let obj = {}
		if (name === "") {
			obj = {
				'selectedoption': value // firstname: 'Joe'
			}
		} else {
			obj = {
				[name]: value // firstname: 'Joe'
			}
		}
		console.log(obj);
	}
	return (
		<div className="container my-5">
			<div className="row justify-content-center">
				<div className="col-md-7">
					<p className="display-6 fw-bold" style={{ 'color': '#ffffff' }}>
						Let's work together
					</p>
					<div className="terms w-75 form-text">
						<p className="lead">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis debitis, harum a impedit
							mollitia, ad excepturi iure nulla earum totam unde nemo perferendis, dicta possimus tempora
							magnam
							commodi hic dolorem.
						</p>
						<p className="lead">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis debitis, harum a impedit
							mollitia, ad excepturi iure nulla earum totam unde nemo perferendis, dicta possimus tempora
							magnam
							commodi hic dolorem.
						</p>
						<p className="lead">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis debitis, harum a impedit
							mollitia, ad excepturi iure nulla earum totam unde nemo perferendis, dicta possimus tempora
							magnam
							commodi hic dolorem.
						</p>
						<p className="lead">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis debitis, harum a impedit
							mollitia, ad excepturi iure nulla earum totam unde nemo perferendis, dicta possimus tempora
							magnam
							commodi hic dolorem.
						</p>
					</div>
				</div>

				<div className="col-md-4 text-dark p-4 h-50 bg-light contactform">
					<h1 className="text-center h3 mb-4 text-muted">How can we help?</h1>
					<form>
						<div className="row">
							<div className="col-md-6">
								<label htmlFor="basic-url" className="form-label">Name *</label>
								<div className="input-group mb-3">
									<input type="text" className="form-control" id="basic-url" placeholder="name" onChange={handleForms} name="firstname" aria-describedby="basic-addon3" />
								</div>
							</div>

							<div className="col-md-6">
								<label htmlFor="basic-url" className="form-label">Organization *</label>
								<div className="input-group mb-3">
									<input type="text" className="form-control" id="basic-url" placeholder="name" onChange={handleForms} name="organization" aria-describedby="basic-addon3" />
								</div>
							</div>
						</div>

						<label htmlFor="basic-url" className="form-label">Email *</label>
						<div className="input-group mb-3">
							<input type="text" className="form-control" id="basic-url" onChange={handleForms} name="email" aria-describedby="basic-addon3" />
						</div>

						<label htmlFor="basic-url" className="form-label">Project Description *</label>
						<div className="input-group">
							<textarea className="form-control" rows="8" aria-label="With textarea" onChange={handleForms} name="description"></textarea>
						</div>

						<div className="row mt-4">
							<div className="col md-6">
								<label htmlFor="basic-url" className="form-label">Budget *</label>
								<select className="form-select" aria-label="Default select example" onChange={handleForms} name="budget">
									<option defaultValue={'choose'}>Choose...</option>
									<option value="1">One</option>
									<option value="2">Two</option>
									<option value="3">Three</option>
								</select>
							</div>
							<div className="col md-6">
								<label htmlFor="basic-url" className="form-label">Target Lunch *</label>
								<div className="input-group mb-3">
									<input type="text" className="form-control" id="basic-url" onChange={handleForms} name="target lunch" aria-describedby="basic-addon3" />
								</div>
							</div>
						</div>
						<button className="btn btn-success w-100">Send</button>
					</form>
				</div>
			</div>
		</div>
	)
}

export default App
