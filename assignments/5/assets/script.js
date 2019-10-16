fetch('/assets/my.json')
.then(function(results){
	// console.log("first results:", results)
	return results.json()//convert the results into something we can use.
})
.then(function(jsonResults){

	console.log("results: ", jsonResults)

	document.querySelector("#root").insertAdjacentHTML('afterbegin', 
		`
		<h1 style="color:${jsonResults.colors.listofColors[1]};">${jsonResults.title}</h1> 
		`
	)

})
.catch(function(error){
	console.log("error message:", error)
})