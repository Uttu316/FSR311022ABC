const arr = [1,2,3,4,5]

 arr.forEach((item,index,array)=>{
    console.log(item,index,array)
    return item*2
})



const output = arr.map((item,index,array)=>{
    console.log(item,index,array)

   
        return {
            age:item+20
        }
   
})

console.log(output)


const students = [
    {
        name:'Riyaz',
        weight:60
    },
    {
        name:'Ajay',
         weight:62
    },
    {
        name:'Aman',
         weight:56
    },
    {
        name:'Aish',
         weight:54
    },
    {
        name:'Ankush',
         weight:65
    }
    ]
    
const index = students.findIndex((item)=>{
    if(item.weight>60){
        return true
    }else{
        return false
    }
}) 
const notFoud = students.findIndex((item)=>item.weight>70) 

console.log(notFoud)

const person = students.find((item)=>item.weight>60) 
const overWeight = students.filter((item)=>item.weight>65) 

console.log(overWeight)
