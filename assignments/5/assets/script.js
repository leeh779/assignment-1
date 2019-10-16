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



fetch('https://api.spacexdata.com/v3/launches/latest')
.then(function(results){
	return results.json()
})
.then(function(jsonResults){

	console.log("results: ", jsonResults)

	document.getElementById("rocket").innerHTML = `

	`

	document.getElementById("info-maintop").innerHTML = `
	Flight_number: <span class="info-maintop-point">${jsonResults.flight_number}</span><br>
	Mission_name: <span class="info-maintop-point">${jsonResults.mission_name}</span><br>
	Rocket_name: <span class="info-maintop-point">${jsonResults.rocket.rocket_name}</span><br>
	Launch_success: <span class="info-maintop-point"><a class="info-maintop-link" href="${jsonResults.links.video_link}">?????</a></span>
	`
})
.catch(function(error){
	console.log("error message:", error)
})