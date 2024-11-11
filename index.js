// fetch(`https://jsonplaceholder.typicode.com/users?_limit=5`, {
//     method: 'GET'
// })
// .then((res) => res.json())
// .then((data) => {
//     data.forEach((user) => {
//         const item = document.createElement('li')
//         item.innerText = user.name
//         list.appendChild(item)
//     })    
// })


// fetch(`https://jsonplaceholder.typicode.com/users/1`, {
//     method: 'PUT',
//     body: JSON.stringify({
//         name: 'Alex',
//         email: 'alex@gmail.com',
//     }),
//     headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//     }
// })
// .then((res) => res.json())
// .then((data) => {
//     data.forEach((user) => {
//         const item = document.createElement('li')
//         item.innerText = user.name
//         list.appendChild(item)
//     })    
// })

// fetch(`https://jsonplaceholder.typicode.com/users/1`, {
//     method: 'DELETE',
// })
// .then((res) => res.json())


// recursii

// const recursion = (num) => {
//     if(num === 0) {
//         return 1;
//     } else {
//         return num * recursion(num - 1)
//     }
// }

// console.log(recursion(3))


// const obj = {
//     a: 1,
//     b: {
//         c: {
//             d: {
//                 e: 2,
//                 func: () => console.log('pass')
//             }
//         }
//     }
// }

// const copy = { ...obj }
// const copy = JSON.parse(JSON.stringify(obj))

// const deepClone = (obj) => {
//     if(obj === null) return null
//     let clone = { ...obj }
//     Object.keys(clone).forEach((key) => {
//         clone[key] = typeof obj[key] === 'object' ? deepClone(obj[key]) : obj[key]
//     })

//     return clone;
// }

// const copy = deepClone(obj)

// copy.b.c.d.e = 3

// console.log(obj.b.c)
// console.log(copy.b.c)
// copy.b.c.d.func()

// setTimeout(() => {
//     console.log('show after 2 sec')
// }, 300)

// const interval = setInterval(() => {
//     console.log('show me eatch second')
// }, 1000)

// clearInterval(interval)

// console.log(1)
// setTimeout(() => {
//     console.log(2)
// }, 1000)
// setTimeout(() => {
//     console.log(3)
// }, 0)
// Promise.resolve().then(() => console.log(4))
// console.log(5)

// const p = () => {
//     return new Promise((res) => {
//         setTimeout(() => {
//             res('resolved')
//         }, 3000)
//     })
// }

// async function renderPage() {
//     console.log('rendering')
//     const users = await p()
//     console.log(users)
// }


// renderPage()


// const studenti = {
//     Alex: [9,8,10],
//     Victor: [6,7,7]
// }

// toFixed(1)

// {
//     Alex: 'Media: 9'
//     victor: 'Media 6.6'
// }

// const studentiMedia = (obj) => {
//     const clone = { ...obj }
//     Object.keys(clone).forEach((key) => {
//         const media = obj[key].reduce((acc, curr) => acc + curr)/obj[key].length
//         clone[key] = 'Media: ' + media.toFixed(1)

//     })

//     return clone
// }

// console.log(studentiMedia(studenti))
// const root = document.getElementById('root')

// const fetchData = async() => {
//     const useresResponse = await fetch('https://jsonplaceholder.typicode.com/users') 
//     const postsResponse = await fetch('https://jsonplaceholder.typicode.com/posts')

//     const users = await useresResponse.json()
//     const posts = await postsResponse.json()

//     return {users, posts}
// }

// const renderPage = async() => {
//     const {users, posts} = await fetchData()

//     users.forEach((user) => {
//         const listItem = document.createElement('div')
//         const userName = document.createElement('p')
//         userName.innerText = user.name

//         listItem.appendChild(userName)

//         posts.filter((post) => post.userId === user.id).forEach((post, idx) => {
//             const postTitle = document.createElement('p')
//             postTitle.innerText = `${idx + 1} ${post.title}`
//             listItem.appendChild(postTitle)
//         })

//         root.appendChild(listItem)
//     })

//     console.log(users)
//     console.log(posts)
// }


// De aratat pe pagina utilizatorii si titlu postarilor legate de ei
// ex: (fiecare utilizator are 10 postari, gasitile folosind id de la users si userId de la postari)
// Leanne Graham
// *sunt aut facere repellat provident occaecati excepturi optio reprehenderit
// *sunt aut facere repellat provident occaecati excepturi optio reprehenderit
// *sunt aut facere repellat provident occaecati excepturi optio reprehenderit
// *sunt aut facere repellat provident occaecati excepturi optio reprehenderit
// *sunt aut facere repellat provident occaecati excepturi optio reprehenderit
// *sunt aut facere repellat provident occaecati excepturi optio reprehenderit
// *sunt aut facere repellat provident occaecati excepturi optio reprehenderit
// *sunt aut facere repellat provident occaecati excepturi optio reprehenderit
// *sunt aut facere repellat provident occaecati excepturi optio reprehenderit
// *sunt aut facere repellat provident occaecati excepturi optio reprehenderit
// User 2 ......
// *sunt aut facere repellat provident occaecati excepturi optio reprehenderit
// *sunt aut facere repellat provident occaecati excepturi optio reprehenderit
// *sunt aut facere repellat provident occaecati excepturi optio reprehenderit
// *sunt aut facere repellat provident occaecati excepturi optio reprehenderit
// *sunt aut facere repellat provident occaecati excepturi optio reprehenderit
// *sunt aut facere repellat provident occaecati excepturi optio reprehenderit
// *sunt aut facere repellat provident occaecati excepturi optio reprehenderit
// *sunt aut facere repellat provident occaecati excepturi optio reprehenderit
// *sunt aut facere repellat provident occaecati excepturi optio reprehenderit
// *sunt aut facere repellat provident occaecati excepturi optio reprehenderit
