const search_Input  =document.getElementById('search-input');
const search_button =document.getElementById('search-button');
const Image =document.getElementById('icon');


async function get_Weather(city){
	var res= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7eb49387f6afa36b4e29dcd6c861dfae&units=metric`);
	if(res.status==404){
		document.getElementById('error').style.display="block";
	}else {
		document.getElementById('error').style.display="none";
	}

	document.getElementById('bx-water').style.display = 'inline';  
    document.getElementById('bx-wind').style.display = 'inline';



	var data= await res.json();
	console.log(data)
	document.getElementById('celcius').innerHTML = Math.round(data.main.temp )+"°C";
	document.getElementById('city').innerHTML =data.name ;
	document.getElementById('humidity1p').innerHTML = Math.round(data.main.humidity) +"%" + `<p style="	font-size: 20px;">Humidity</p>` ;
	document.getElementById('wind1p').innerHTML = Math.round(data.wind.speed )+ "Km/h" + `<p style="	font-size: 20px;">Wind</p>`;

	if(data.weather[0].main== "Clouds"){
	Image.src="./image/cloudy.png"
	}else if(data.weather[0].main== "Clear"){
	Image.src="./image/sun.png"
    }else if(data.weather[0].main== "Rain"){
	Image.src="./image/run.png"
    }else if(data.weather[0].main== "Drizzle"){
	Image.src="./image/Drizzle.jfif"
    }else if(data.weather[0].main== "Mist"){
	Image.src="./image/sun_num.png"
    }
    //console.log(data.weather[0].main)
}

search_button.addEventListener('click' , () =>{
get_Weather(search_Input.value);	
})
search_Input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {  
        get_Weather(search_Input.value);
    }
});