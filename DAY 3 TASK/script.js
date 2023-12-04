//DAY 3 TASK 
// QUESTION 1
let Object1 = {name: "person 1" , age: 5};
let Object2 = {age: 5 , name: "person 1"};
let JSON1 = JSON.stringify(Object1);
let JSON2 = JSON.stringify(Object2);
if (JSON1===JSON2){
    console.log("Both Objects are same");
}
else{
    console.log("Both Objects are not same");
}

//DAY 3 TASK 
// QUESTION 2

var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true)
request.send();
request.onload = function(){
    var data1 = request.response;
    var result = JSON.parse(data1);
    console.log(result);
    for (var i=0; i<result.length; i++){
        console.log(result[i].name.common,result[i].flags.png)
    }
    
}

// //DAY 3 TASK 
// // QUESTION 3

var request2 = new XMLHttpRequest();
request2.open("GET","https://restcountries.com/v3.1/all",true)
request2.send();
request2.onload = function(){
    var data2 = request2.response;
    var result2 = JSON.parse(data2);
    console.log(result2);
    for (var i=0; i<result2.length; i++){
        console.log(result2[i].name.common,result2[i].region,result2[i].subregion,result2[i].population)
    }
    
}