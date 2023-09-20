//DOM DAY 01
// Code to change the year for every 1 second 
const year = document.getElementById('yearNumber');
year.style.fontSize = '24px'
const colors = ['red','blue','green','yellow','orange','brown'];

setInterval(()=>{
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  year.style.color = randomColor;
},1000);

//Code to display the current date and time and also replicating the above function in this block of code also
function displayDate(){
  const date = new Date();
  const today = date.getDate();
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const month = monthNames[date.getMonth()];
  const year = date.getFullYear();
  const hour = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  const datestring = `${month} ${today},${year} ${hour}:${minutes}:${seconds}`;
  document.querySelector("#dateDisplay").innerText = `${datestring}`;
} 
displayDate();

setInterval(displayDate,1000);

const yearBox = document.getElementById("dateDisplay");
const boxColors = ['orange','beige','aqua','blueviolet','yellowgreen'];
setInterval(()=>{
  const randomBoxColor = boxColors[Math.floor(Math.random() * boxColors.length)];
  yearBox.style.color = randomBoxColor;
},1000)

//Code to change the background color of the boxes using the DOM

//first box
const challenges = document.querySelector(".listedItems-1");
if(challenges){
  challenges.style.backgroundColor = "green";
}else{
  console.log("Error in changing!!");
}
// end
//second box
const challenges2 = document.querySelector(".listedItems-2");
if(challenges2){
  challenges2.style.backgroundColor = "yellow";
}else{
   console.log("error in changing")
}
//end 
//rest of the boxes

const allListedItems = document.querySelectorAll(".listedItems");
if(allListedItems){
  allListedItems.forEach(item => {
    item.style.backgroundColor = "red";
  });
}else{
  console.log("Error in changing");
}
