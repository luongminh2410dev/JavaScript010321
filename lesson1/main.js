// alert('Hi javascript')
// console.log('Hello')
// confirm('Xac nhan ban du tuoi?')
// prompt('Xac nhan b du tuoi?')

// set noi dung sau khi chay 1000 milis
setTimeout(function() {
    alert('Thong bao')
}, 1000)

// set noi dung lien tuc sau 1000 milis
// setInterval(function() {
//     console.log('So random ' + Math.random)
// }, 1000);

var myString = '    Hoc JS tai F8!    '
// Su li chuoi

    // Length
    console.log(myString.length)

    // Find Index
    console.log(myString.search('JS'))

    // Cut String
    console.log(myString.slice(4,6))

    // Replace - ghi de 
    console.log(myString.replace(/JS/g,'JavaScript'))

    // // Convert to upper case
    // console.log(myString.toLocaleUpperCase())

    // // Convert to lower case
    // console.log(myString.toLocaleLowerCase())

    // Trim - loai bo khoang trang thua o 2 dau
    console.log(myString.trim())

    // Split
    var languages1 = 'JavaScript, PHP, Ruby'
    console.log(languages1.split(', '))

    // Get a character by index
    var myString2 = 'Luong Minh'
    console.log(myString2.charAt(2))

    var title = 'Học Javascript tại F8'
    var language = title.slice(4,14).substring()
    var rest = title.slice(15).toString()

    console.log( `Language is ${language} and rest is ${rest}`)


// Kiem tra kieu du lieu co phai NaN ko
    var result = 20 / 'ABC'
    console.log(isNaN(result))

// Lam tron number 
    var pi = Math.PI
    console.log(pi.toFixed(2))


// Mang 
    var languages = [
        'JavaScript',
        'PHP',
        'Ruby'
    ];
    console.log(languages[1])

    //noi cac phan tu trong mang thanh 1 string va them ki tu noi tuy y
    console.log(languages.join(' - ')) 

    // Lay ra element cuoi mang va xoa element do khoi mang
    console.log(languages.pop())
    console.log(languages)

    // Lay ra element dau mang va xoa element do khoi mang
    console.log(languages.shift())
    console.log(languages)

    // Them phan tu vao cuoi mang tra ve do dai moi cua mang
    console.log(languages.push('Dart','React Native'))
    console.log(languages)

    // Them phan tu vao dau mang tra ve do dai moi cua mang
    console.log(languages.unshift('JavaScript', 'Ruby'))
    console.log(languages)

    // Chen,xoa phan tu theo index trong mang
    languages.splice(1, 0, 'Dev C++')
    console.log(languages)

    // Noi 2 array 
    console.log(languages.concat(languages1))

    // Cat lay 1 or nhieu phan tu cua mang
    console.log(languages.slice(1,3))


// Object constructor
    function User(firstName, lastName, avatar){
        this.firstName = firstName
        this.lastName = lastName
        this.avatar = avatar
    }

    User.prototype.className = 'F8'
    var author = new User('Dang', 'Son', 'Avatar')
    var user = new User('Minh', 'Luong', 'Avatar')

    author.title = 'Code dạo cùng F8'
    user.comment = 'Bai nay kho qua'
    console.log(author.className)
    console.log(user)

    var a = 8.6
    console.log(Math.floor(a))