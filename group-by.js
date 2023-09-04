const array= [
    {id:1,name:"Bilal", city:"Lahore"},
    {id:1,name:"Bilal", city:"Lahore"},
    {id:3,name:"Hafsa", city:"Karachi"},
    {id:4,name:"Rehan", city:"Lahore"},
    {id:5,name:"Saqib", city:"Karachi"},
    {id:6,name:"Farhan", city:"Islamabad"}
    ]

function groupByProblem(array,key){
    let keys = [];
    let result = {};
    let temp = [];
    for(let i=0;i<array.length;i++){
        if(!keys.includes(array[i][key]))
        {
            keys.push(array[i][key]);
            temp = array.filter(function(arr) {
                return arr[key] === array[i][key]
            });
            result[array[i][key]] = temp;

        }
        temp = [];
    }
    return result;
}

let result = groupByProblem(array,'id');



