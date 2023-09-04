const array= [
    {id:1,name:"Bilal", city:"Lahore"},
    {id:1,name:"Bilal", city:"Lahore"},
    {id:3,name:"Hafsa", city:"Karachi"},
    {id:4,name:"Rehan", city:"Lahore"},
    {id:5,name:"Saqib", city:"Karachi"},
    {id:6,name:"Farhan", city:"Islamabad"}
    ]

function groupByProblem(array,key){
        let result = {};
        let keys = [];
        const length = array.length;
        for(let i=0;i<length;i++){
            result[array[i][key]] = array.filter((arr) => arr[key] === array[i][key] );
        }
        array.forEach(element => {
            result[element[key]] = array.filter((arr) => arr[key] === element[key] );
        });
        return result;
}
    
let result = groupByProblem(array,'id');



