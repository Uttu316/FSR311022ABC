let obj1 = {
    name:'Utkarsh',
    age:24,
    city:'Agra'
}

// let obj2 = {name:'Utkars',age:24,city:'Agra'};
let obj2 = {...obj1,pincode:232434}

obj1.name = "Ajay"
obj2.age = 32;

console.log(obj1,obj2)



const arr = [1,2,3,4]

const arr2 = [...arr];

arr2[0] = 10;

arr.push(-1)

console.log(arr,arr2)


const arr = [1,[6,10],3,4]
const obj  ={
    name:'utkarsh',
    age:24
}


const [x,[h,n=-1],z,p] = arr;

console.log(x,z,p,h,n)




const [x,y,z,...newArr] = arr;

console.log(x,y,z,newArr)


const obj ={
    name:'utkarsh',
    address:{
        city:'Agra'
    }
}

const name='Simran';
const city='Mumbai'

const {name:myName,address:{city:myCity}} = obj;

console.log(name,myName,city,myCity)







