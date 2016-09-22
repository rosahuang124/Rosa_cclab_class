//global variable
var city = '';
var state = '';
var APIKey = '703939c0ca2aa618';

var loadWeather = function(response){
	console.log(response);

	//add an error catch before setting variables
	if(response.response.error){
		alert(response.response.error.description);
		return;
	}

	//set variables to elements of your response object
	var thisCity = response.location.city;
	var temp = Math.round(response.current_observation.temp_f) + "ºF";
	var weather = response.current_observation.weather;
	var icon = response.current_observation.icon_url;

	//set text of html elements to your variable
	$('.temperature').html(temp);
	$('.weather').html(weather);
	$('.weatherIcon').html('<img src="' + icon + '">');

	$('.currentCity').val(thisCity); 
}

var getWeather = function(){
	var myUrl = 'http://api.wunderground.com/api/' + APIKey + '/geolookup/conditions/q/' + state + '/' + city + '.json';


	//run the ajax call and load weather on success
	$.ajax({
		url: myUrl,
		dataType: "jsonp",
		success: function(response){
			loadWeather(response);
		}

	})
}

var setLocation = function(){
	//set the global variable 'city' to the value of .currentCity
	city = $('.currentCity').val();

	//set the global variable 'state' to the value of .currentState
	state = $('.currentState').val();

	//if the city is null or it equals '', alert the user and stop running the function
	if(city == null || city == '') {
		alert('You need to list a city!');
		return;
	}
	console.log('You want the weather for ' + city + ',' + state);

	//call getWeather() function now that city and state are set
	getWeather();
}



//init
var init = function(){
	console.log("What's the weather?");
}

$(document).ready(function(){
	init();//call init() function when the page loads

	$('#submit').click(function(e){
		e.preventDefault();
		setLocation();
	})
});