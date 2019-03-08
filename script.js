'use strict'
let array = []

// 
let div = function(arr){
    document.write('<div>');
    for (let i=0; i < arr.length; i++){
        document.write(`<p>${arr[i].email}</p>`)
    }
    document.write('</div>');
    };

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



