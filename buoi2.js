        // BT
// namesOnly = [
//     {
//       name: "Angelina Jolie",
//       age: 80
//     },
//     {
//       name: "Eric Jones",
//       age: 2
//     },
//     {
//       name: "Paris Hilton",
//       age: 5
//     },
//     {
//       name: "Kayne West",
//       age: 16
//     },
//     {
//       name: "Bob Ziroll",
//       age: 100
//     }
//   ]
// var newName= namesOnly.map(function(i){
//     return i.name
// })
// console.log(newName)

// Kiem tra chuoi co bat dau bang 'Java' khong
// str = 'Java is easy'
// function startWith(str){
//         if(str.slice(0,4).toString() === 'Java')
//         {
//                 console.log('Chuoi co bat dau bang Java' )
//         }
//         else{
//                 console.log('Ko bat dau bang Java')
//         }
// }
// startWith(str)


// Viết hàm kiểm tra giá trị max của 2 phần tử kế nhau
arr = [5,4,7,9,2,4]
function findMaxDiff(arr) {
        var kcmax = 0
        for(var item in arr)
        {
                var item2 = Number(item) + 1
                if(Math.abs(arr[item] - arr[item2]) >= kcmax)
                {
                        kcmax = Math.abs(arr[item] - arr[item2])
                }
        }
        if(kcmax == 0)
        {
                return 0
        }
        return kcmax
}
console.log(findMaxDiff(arr))
