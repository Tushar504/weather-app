
let key="6dfc2d6d10d3b7a147285e875e77192c"
async function getweather(){
    let city=document.querySelector("input").value
  let res= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`)
  let data= await res.json();
  append(data)
   


   let res1=await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=${7}&appid=${key}&units=metric`)
  let data1=await res1.json();
 
  var arrays=data1.list
  var final2=[];
  var final3=[];
  for(var r=0;r<arrays.length;r++){
    final2.push(arrays[r].main.temp_max)
    final3.push(arrays[r].main.temp_min)
  }
  
  append1(final2,final3);
}

let date=new Date();


function append(data){
  document.querySelector("#append").innerHTML="";
  document.querySelector("#info").innerHTML="";
  var image=document.createElement("img");
  image.src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png"

   var Temp=document.createElement("h1");
   Temp.textContent=data.main.temp

  var up=document.createElement("h4");
  up.textContent="°C"

  var div1=document.createElement("div");

  var p1=document.createElement("p");
  p1.textContent=`Max temp: ${data.main.temp_max}°C`

  var p2=document.createElement("p");
  p2.textContent=`Min Temp: ${data.main.temp_min}°C`

  var p3=document.createElement("p");
  p3.textContent=`Humidity: ${data.main.humidity}%`

div1.append(p1,p2,p3) ;
document.querySelector("#append").append(image,Temp,up,div1)

document.querySelector("#gmap_canvas").src=`https://maps.google.com/maps?q=${data.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`

var h=document.createElement("h1");
h.textContent=data.name

var p4=document.createElement("h3");
p4.textContent=date;

document.querySelector("#info").append(h,p4)
}

function append1(final2,final3){
  
  document.querySelector("#forecast").innerHTML="";
  document.querySelector("h2").innerHTML="";

  var day=date.getDay();

  var obj={
    "sun":0,
    "Mon":1,
    "Tue":2,
    "Wed":3,
    "Thu":4,
    "Fri":5,
    "Sat":6,
  }
  var arr=[0,1,2,3,4,5,6];
  var arr1=[];
  var Final=[];
  var final1=["https://ssl.gstatic.com/onebox/weather/48/sunny_s_cloudy.png","https://ssl.gstatic.com/onebox/weather/48/sunny.png","https://ssl.gstatic.com/onebox/weather/48/sunny_s_cloudy.png","https://ssl.gstatic.com/onebox/weather/48/sunny.png","https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png","https://ssl.gstatic.com/onebox/weather/48/sunny.png","https://ssl.gstatic.com/onebox/weather/48/partly_cloudy.png"]
  
  var count=0;
 for(var i=0;i<arr.length;i++){
    if(arr[i]==day){
      arr1.push(arr[i]);
      count++
      if(day<6&& count<=6){
      day++;
      }
      else if(day==6 && count<=6){
        day=0;
        i=-1;
      }

    }

  }
  
  for(var j=0;j<arr1.length;j++){
      for(var key in obj){
        if(arr1[j]==obj[key]){
         Final.push(key);
         break;
        }
      }
  }
  
let arrayforappending=[];
 function makeobj(a,b,c,d){
   this.day=a,
   this.img=b,
   this.max_t=c,
   this.min_t=d
   arrayforappending.push(this);
   }
   for(var t=0;t<Final.length;t++){
  var obj1=new makeobj(Final[t],final1[t],final2[t],final3[t])
   }
  
  
   arrayforappending.map(function(ele){
    var div1=document.createElement("div");

    var image=document.createElement("img");
    image.src=ele.img
  
  var h=document.createElement("h3");
  h.textContent=ele.day;
 
  var H=document.createElement("h3")
    H.textContent=`${ele.max_t}`;
  
  
    var H1=document.createElement("h3")
    H1.textContent=`${ele.min_t}`;

  div1.append(h,image,H,H1)
  document.querySelector("#forecast").append(div1)
  document.querySelector("h2").textContent="forecast of a city for next 7 days"
})
}




