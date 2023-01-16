const Output = document.getElementById('output')
const Username = document.getElementById('username')
const myBtn = document.getElementById('myBtn')
const myImg = document.getElementById('myImg')

function ClickHandler() {
	console.log('Event Handler')
	Output.innerText = Username.value
}

function ChangeHandler() {
	console.log('Change Handler')
	Output.innerText = Username.value
}

function MouseOverHandler() {
	console.log('test mouseoverhandler !!!')
	myImg.src = "https://pbs.twimg.com/profile_images/697950843199303680/obyZ2Qrv_400x400.jpg"
	myBtn.className = 'btn btn-primary btn-lg'
}

function MouseOutHandler() {
	console.log('test mouseouthandler !!!')
	myImg.src = "https://img.thedailybeast.com/image/upload/dpr_2.0/c_crop,h_1440,w_1440,x_0,y_0/c_limit,w_128/d_placeholder_euli9k,fl_lossy,q_auto/v1511225089/171120-tomasky-clinton-tease_vvzufl"
	myBtn.className = 'btn btn-danger btn-lg'
}

