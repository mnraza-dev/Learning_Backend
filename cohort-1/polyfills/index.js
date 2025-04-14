const arr = [1,2, 3,4, 5,6]

// Error: .forEach is not a function or does not exist

arr.forEach(function(val,i){
    console.log("value of index", i, "is", val);
    
})