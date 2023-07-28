// function adder (x, y, callback) {
//     callback(x + y)
// }

// adder (5, 10, answer => console.log(answer))

// console.log('Done')

// ====

// function adder (x, y, callback) {
//     setTimeout(() => callback(x + y), 2000)
// }

// adder (5, 10, answer => console.log(answer))

// console.log('Done')

// ====

// const numbers = [5, 12, 32, 100]

// function myMap(arr, callback) {
//     let result = []
//     for (let item of arr) {
//         result.push(callback(item))
//     }
//     return result
// }

// const doubled = myMap(numbers, x => x * 2)

// console.log(doubled)

// ====

function getJoke(cb) {
    req = new XMLHttpRequest()
    req.addEventListener('load', event => cb(event.target.response.joke))
    req.open('GET','http://icanhazdadjoke.com/')
    req.setRequestHeader('Accept', 'application/json')
    req.responseType = 'json'
    req.send()
}

// getJoke(joke => console.log(joke))
// getJoke(joke => document.body.innerHTML += `<p>${joke}</p>`)

const jokes = []

getJoke(joke => {
    jokes.push(joke)
    getJoke(joke => {
        jokes.push(joke)
        getJoke(joke => {
            jokes.push(joke)
            console.log(jokes)
        })
    })
})
            
console.log('Loading....')