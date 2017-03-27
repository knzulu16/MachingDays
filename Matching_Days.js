var enteredDate=document.getElementById('calendar1');
var enteredDate2=document.getElementById('calendar2');
var days=document.getElementsByClassName('days');
console.log(days)
var myInputs=document.getElementById('myInputs');
var input=document.getElementsByName('input');
// var myBtn=document.querySelector('#myBtn');

myInputs.addEventListener('change',function(){
    var d = new Date(enteredDate.value);
    var e = new Date(enteredDate2.value);
    var input1Day = d.getDay();
    console.log(input1Day);
    var input2Day = e.getDay();

    for (var i = 0; i < days.length;i++){
      days[i].classList.remove('style1');
      days[i].classList.remove('style2');
      days[i].classList.remove('style3');
    }
    if (input1Day ===input2Day){
      days[input1Day].classList.add('style2');
    }
    else{
      days[input1Day].classList.add('style1');
      days[input2Day].classList.add('style3');
    }
  });


  //
  //   var n = weekday[d.getDay()];
  //   if (enteredDate.value=='Monday'){
  //     document.getElementById("table").innerHTML = n;
  //   table.ClassList.add('blue');
  // }
  //


// var weekday = new Array(7);
// weekday[0] = "Sunday";
// weekday[1] = "Monday";
// weekday[2] = "Tuesday";
// weekday[3] = "Wednesday";
// weekday[4] = "Thursday";
// weekday[5] = "Friday";
// weekday[6] = "Saturday";
//
// var textBox=document.querySelector('textBox');
// var table =document.querySelector('table');
// var calendar=document.getElementById('calendar');
//
// table.addEventListener('change',function(e){
//   var d = new Date();
//   var n = weekday[d.getDay()];
//   var enteredDate=d.value;
//
// if (enteredDate.value=='Monday'){
//   n.getElementById('Mon').select();
//   table.ClassList.add('blue');
// }
// else if(enteredDate.value=='Friday'){
//   n.getElementById('Fri').select();
//   table.ClassList.add('red');
// }
// else{
//   table.ClassList.('green');
// }
// });
