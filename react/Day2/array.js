const arr = [1, 2, 3, 4, 5]

arr.forEach((item, index, array) => {
  console.log(item, index, array)
  return item * 2
})

const output = arr.map((item, index, array) => {
  console.log(item, index, array)

  return {
    age: item + 20
  }
})

console.log(output)

const students = [
  {
    name: 'Riyaz',
    weight: 60
  },
  {
    name: 'Ajay',
    weight: 62
  },
  {
    name: 'Aman',
    weight: 56
  },
  {
    name: 'Aish',
    weight: 54
  },
  {
    name: 'Ankush',
    weight: 65
  }
]

const index = students.findIndex(item => {
  if (item.weight > 60) {
    return true
  } else {
    return false
  }
})
const notFoud = students.findIndex(item => item.weight > 70)

console.log(notFoud)

const person = students.find(item => item.weight > 60)
const overWeight = students.filter(item => item.weight > 65)

console.log(overWeight)

function myReduce (callBack, initalValue) {
  let acc = initalValue != null ? initalValue : this[0]
  let intialIndex = initalValue != null ? 0 : 1
  for (let i = intialIndex; i < this.length; i++) {
    acc = callBack(acc, this[i], i, this)
  }
  return acc
}

Array.prototype.myReduce = myReduce

const Arr = [1, 2, 3, 4, 5, 6]

const final = Arr.myReduce((acc, curr, index, array) => {
  console.log(acc, curr, index, array)
  return acc + curr
}, 0)

console.log(final)

const students = [
  {
    name: 'Zabi',
    gender: 'M',
    marks: 90
  },
  {
    name: 'Arti',
    gender: 'F',
    marks: 95
  },
  {
    name: 'Atul',
    gender: 'M',
    marks: 80
  },
  {
    name: 'Rahul',
    gender: 'M',
    marks: 83
  },
  {
    name: 'Gayatri',
    gender: 'F',
    marks: 84
  }
]

const result = students.reduce((acc, item) => {
  if (item.gender === 'F') {
    return acc + item.marks
  }
  return acc
}, 0)
