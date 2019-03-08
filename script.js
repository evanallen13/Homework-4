'use strict'
let array = []

// XMLHttpsRequest 
let alpha = function(arr){
    let newArr = [];
  for (let i=0; i < arr.length; ++i){
    newArr.push(arr[i].email);
  }
  return (newArr.sort());
}
let div = function(arr){
    arr = alpha(arr);
    let divEl = document.getElementById('emails');
    for (let i=0; i < arr.length; i++){
        let child = document.createElement('p');
        let text = document.createTextNode(`${arr[i]}`);
        child.append(text);
        divEl.appendChild(child);
    }
    };

let httpRequest = function(){
    const req = new XMLHttpRequest();
    req.open('GET','https://jsonplaceholder.typicode.com/users');
    req.onload = function(){
        if (req.status == 200){
            console.log('Status:',req.status);
            array = JSON.parse(req.response);
            div(array);
        }else{
            console.log('ERROR',req.statusText);
        }
    }
    req.onerror = function(){
            console.log('Network Error');
    }
    req.send()
}
httpRequest();

// Fetch 
fetch('https://jsonplaceholder.typicode.com/users',{
    method:'get'
}).then(function(response){
    console.log(response)
}).catch(function(err){
    console.log('GoodBye');
});

