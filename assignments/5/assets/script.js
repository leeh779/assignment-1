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
fetch('https://api.spacexdata.com/v3/launches/latest')
.then(function(results){
	return results.json()
})
.then(function(jsonResults){

	console.log("results: ", jsonResults)

	// document.getElementById("launch-vid").innerHTML = `
	// 	<iframe class="launch-vid-child" width="640" height="480" src="https://www.youtube.com/embed/${jsonResults.links.youtube_id}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
	// `

	document.getElementById("info-1").innerHTML = `
	Flight_number: <span class="info-shake">${jsonResults.flight_number}</span>
	`

	document.getElementById("info-2").innerHTML = `
	Mission_name: <span class="info-shake">${jsonResults.mission_name}</span><br>
	`

	document.getElementById("info-3").innerHTML = `
	Rocket_name: <span class="info-shake">${jsonResults.rocket.rocket_name}</span><br>
	`

	// document.getElementById("info-4").innerHTML = `
	// Launch_success: <span class="info-shake"><a class="info-maintop-link" href="${jsonResults.links.video_link}">?????</a></span>
	// `
	// https://www.youtube.com/embed/fZh82-WcCuo
	//<iframe class="launch-vid" width="640" height="480" src="https://www.youtube.com/embed/fZh82-WcCuo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
})
.catch(function(error){
	console.log("error message:", error)
})