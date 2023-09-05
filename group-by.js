const array= [
    {id:1,name:"Bilal", city:"Lahore"},
    {id:2,name:"Bilal", city:"Lahore"},
    {id:3,name:"Hafsa", city:"Karachi"},
    {id:4,name:"Rehan", city:"Lahore"},
    {id:5,name:"Saqib", city:"Karachi"},
    {id:6,name:"Farhan", city:"Islamabad"}
    ]

function groupByProblem(array,key){
        let result = {};
        let arr = [];
        array.forEach(element => {
            if(result[element[key]])
            {
                arr = arr.concat(result[element[key]]);
            }
            arr.push(element);
            result[element[key]] = arr;
            arr = [];
        });
        return result;
}
    
let result = groupByProblem(array,'name');