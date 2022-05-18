let key="6dfc2d6d10d3b7a147285e875e77192c";
async function getWeatherData(){
    try{
        let city=document.querySelector("#city").value

        let res= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`)
        
    
        let data= await res.json(); 
        append(data);
    }
    
    catch(err){
        console.log(err)
    }
    
    
}
function append(data){
document.querySelector("#container").innerHTML="";
let name=document.createElement("p");
name.innerHTML=data.name

let Temp=document.createElement("p");
Temp.innerHTML=`temp ${data.main.temp}`

let pressure=document.createElement("p");
pressure.innerHTML=data.main.pressure
document.querySelector("#container").append(name,Temp,pressure)

}