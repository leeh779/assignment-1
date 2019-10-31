fetch('/assets/my.json')
.then(function(results){
	// console.log("first results:", results)
	return results.json()//convert the results into something we can use.
})
.then(function(jsonResults){

	//console.log("results: ", jsonResults)
	// document.querySelector("#root").insertAdjacentHTML('afterbegin', 
	// 	`
	// 	<h1 style="color:${jsonResults.colors.listofColors[1]};">${jsonResults.title}</h1> 
	// 	`
	// )

})
.catch(function(error){
	console.log("error message:", error)
})


//SpaceX
// fetch('https://api.spacexdata.com/v3/launches/latest')
// .then(function(results){
// 	return results.json()
// })
// .then(function(jsonResults){

// 	console.log("results: ", jsonResults)

// 	document.getElementById("rocket").innerHTML = `

// 	`

// 	document.getElementById("info-maintop").innerHTML = `
// 	Flight_number: <span class="info-maintop-point">${jsonResults.flight_number}</span><br>
// 	Mission_name: <span class="info-maintop-point">${jsonResults.mission_name}</span><br>
// 	Rocket_name: <span class="info-maintop-point">${jsonResults.rocket.rocket_name}</span><br>
// 	Launch_success: <span class="info-maintop-point"><a class="info-maintop-link" href="${jsonResults.links.video_link}">?????</a></span>
// 	`
// })
// .catch(function(error){
// 	console.log("error message:", error)
// })

// SkyBox
// let scene, camera, renderer;
// function init() {
// 	scene = new THREE.Scene;

// 	camera = new THREE.PerspectiveCamera(55, window.innerWidth/window.innerHeight, 45, 30000);
// 	camera.position.set(-900, -200, -900);

// 	renderer = new THREE.WebGLRenderer({antialias:true});
// 	renderer.setSize(window.innerWidth, window.innerHeight);
// 	document.body.appendChild(renderer.domElement);

// 	let controls = new THREE.OrbitControls(camera);
// 	controls.addEventListener('change',renderer);
// 	//limit a zoom distance
// 	controls.minDistance = 500;
// 	controls.maxDistance = 1500;

// 	let materialArray = [];
// 	let texture_ft = new THREE.TextureLoader.load('assets/imgs/space_ft.png');
// 	let texture_bk = new THREE.TextureLoader.load('assets/imgs/space_bk.png');
// 	let texture_up = new THREE.TextureLoader.load('assets/imgs/space_up.png');
// 	let texture_dn = new THREE.TextureLoader.load('assets/imgs/space_dn.png');
// 	let texture_rt = new THREE.TextureLoader.load('assets/imgs/space_rt.png');
// 	let texture_lf = new THREE.TextureLoader.load('assets/imgs/space_lf.png');

// 	materialArray.push(new THREE.MeshBasicMaterial({map:texture_ft}));
// 	materialArray.push(new THREE.MeshBasicMaterial({map:texture_bk}));
// 	materialArray.push(new THREE.MeshBasicMaterial({map:texture_up}));
// 	materialArray.push(new THREE.MeshBasicMaterial({map:texture_dn}));
// 	materialArray.push(new THREE.MeshBasicMaterial({map:texture_rt}));
// 	materialArray.push(new THREE.MeshBasicMaterial({map:texture_lf}));

// 	//put materials within the cube, not outside of it
// 	for(let i=0;i<6;i++)
// 		materialArray[i].side = THREE.BackSide;


// 	let skyboxGeo = new THREE.BoxGeometry(10000, 10000, 10000);
// 	let skybox = new THREE.Mesh(skyboxGeo, materialArray);
// 	scene.add(skybox);

// 	animate();
// }
// function animate() {
// 	renderer.render(scene,camera);
// 	requestAnimationFrame(animate);
// }
// init();