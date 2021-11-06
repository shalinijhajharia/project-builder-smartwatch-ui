var day_list=["Sunday","Monday","Tuesday","Wednesday","Thrusday","Friday","Saturday"];

var small_time=document.getElementsByClassName("time_small")[0];
var big_time=document.getElementsByClassName("time_big")[0];
var day=document.getElementsByClassName("day")[0];

var d=new Date();
small_time.innerHTML=d.getHours()+":"+d.getMinutes();
big_time.innerHTML=d.getHours()+":"+d.getMinutes();
day.innerHTML=day_list[d.getDay()]