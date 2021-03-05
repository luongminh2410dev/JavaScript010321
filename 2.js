// let a = 10
// console.log(a)

// const arrName = ['Tèo', 'Tí', 'Tít', 'Mít']
// for(const name of arrName)
// {
//     console.log(name)
// }
    // Doi voi array - for in lay ra index, con for of lay ra value 
    // Doi voi object - for in lay ra key trong object
// For of - lay ra gia tri tung phan tu trong array
// arrNumber = [1,5,7,11,44]
// function multiply(arr)
// {
//     let result = 1
//     for(const number of arr)
//     {
//         result *= number
//     }
//     return result
// }
// console.log(multiply(arrNumber))

// // For in - lay ra cac key trong object
// let apartment = {
//     bedroom: {
//       area: 20,
//       bed: {
//         type: 'twin-bed',
//         price: 100
//       }
//     }
//   };

// function getkey(object){
//     for(keyName in object)
//     {
//         console.log(keyName)
//         // console.log(typeof object[keyName])
//         if(typeof object[keyName] == 'object')
//         {
//             getkey(object[keyName])
//         }
//     }   
// }
// getkey(apartment)

  //Cach su dung continue
// for(var i = 1; i <=10; i ++)
// {
//   if(i % 2 != 0)
//   {
//     continue
//   }
//   console.log(i)
// }



    // Tu dinh nghia ham forEach()
// Array.prototype.forEach2 = function(callback)
// {
//   var output = []
//   for(var i in this)
//   {
//       if(this.hasOwnProperty(i))
//       {
//         var result = callback(this[i], i)
//         output.push(result)
//       }
//   }
//   return output
// }

    // Su dung ham forEach()
// formValues = [
//     {
//       field: 'name', 
//       value: 'Sơn Đặng' 
//     },
//     {
//       field: 'age',
//       value: 18
//     }
// ]
// function getRequestBodyFromValues(formValues) {
//   var obj={};
//   formValues.forEach(function (item)
//   {
//       obj[item.field]=item.value;
//   })
//   console.log(obj)
// }
// getRequestBodyFromValues(formValues)


    // Tu dinh nghia ham every
// Array.prototype.every2 = function(callback){
//     for(var i in this)
//     {
//         if(this.hasOwnProperty(i))
//         {
//             var result = callback(this[i])
//             if(!result)
//             {
//                 return false
//             }
//         }
//     }
//     return true
// }

    // Su dung ham every()
// let numbers = [-4, 2, 3]

// function checkPositiveNumbers(numbers) {
//     return numbers.every2(function(item){
//       return item > 0
//     })
// }
// console.log(checkPositiveNumbers(numbers))



    // Tu dinh nghia ham find()
// Array.prototype.find2 = function(callback)
// {
//   for(var i in this)
//   {
//      if(this.hasOwnProperty(i))
//      {
//          var result = callback(this[i])
//          if(result)
//          {
//              return this[i]
//          }
//      }
//   }
//   return null
// }

    // Su dung ham find()
// let monsters = [
//     {
//         name: 'Cá heo',
//         attack: 50,
//         speed: 100,
//         hitpoint: 100,
//     },
//     {
//         name: 'Khủng long',
//         attack: 150,
//         speed: 80,
//         hitpoint: 180,
//     },
// ]
// function findAMonsterByAttack(monsters) {
//   let v = monsters.find2(function(monter){
//       return monter.attack === 150
//   })
//   if(v)
//   {
//     return v
//   }
//   return null
// }
// console.log(findAMonsterByAttack(monsters))



    // Tu dinh nghia ham filter()
Array.prototype.filter2 = function(callback)
{
  output = []
  for(var i in this){
    if(this.hasOwnProperty(i))
    {
        var result = callback(this[i])
        if(result)
        {
            output.push(this[i])
        }
    }
  }
  return output
}

    // Su dung ham filter()
strings = ['Javascript', 'PHP', 'Học PHP','Java']
keyword = 'Java'
function findStringsInArrayByKeyword(keyword, strings) {
  let r = strings.filter2(function (item){
      return item.search(keyword) != -1
  })
  if(r)
  {
      return r
  }
  return ""
}
console.log(findStringsInArrayByKeyword(keyword,strings))



// array1 = [1, 2, 6, 8]
// array2 = [2, 9, 6]
// function findEqualValues(array1, array2)
// {
//     let mang = []
//     array1.forEach(function (item)
//     {
//       array2.forEach(function (item2)
//       {
//         if(item == item2)
//         {
//           mang.push(item)
//         }
//       })
//     })
//     return mang
// }

// console.log(findEqualValues(array1,array2))



    // ARRAY MAP()
// let inputs = [0, 1, 2]
// function convertToBoolean(inputs) {
//     return inputs.map(function convert(item){
//         if(item)
//         {
//           return true
//         }
//         return false
//     })
// }

  // let inputs = [1, 2, 3]
  // function convertToBoolean(inputs) {
  //     // return inputs.forEach(function(item){
  //     //   if(item)
  //     //   {
  //     //     return true
  //     //   }
  //     //   return false
  //     // })
  //     return inputs.map(function convert(item){
  //         return String(item) 
  //     })
  // }
  // console.log(convertToBoolean(inputs))  


// numbers = [{}, 1, [], 2, 'hi', 0, 6]
// function sumNumbers(inputs) {
//   return inputs.reduce(function(a,b){
//       if(typeof b == 'number')
//       {
//         return a + b
//       }
//       return a 
//   }, 0)
// }
// console.log(sumNumbers(numbers))
    // Ham includes() de tim kiem trong string, array
// let arr1 = ['F8','Minh','F9']
// function run(input) {
    
//   if(typeof input == 'string' || typeof input == 'object'){
//       if(input.includes('F8')){
//           return true
//       }
//   }
//   return false
// }
// console.log(run(arr1))