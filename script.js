
async function fetchJoke() {
    
      try {
        const res = await fetch('https://icanhazdadjoke.com/', {
          headers: { 'Accept': 'application/json' }
        })
          const data = await res.json()
          return data.joke
      }
      catch (err) {
        throw err
      }
}


fetchJoke()

function get5jokes() {
    const jokePromises = []
    for (let i = 0; i < 5; i++) {
      jokePromises.push(fetchJoke())
    }
    
    Promise.all(jokePromises)
      // .then(jokeResponses => Promise.all(jokeResponses.map(jr => jr.json())))
      .then(jokes => console.log(jokes))
      .catch(err => console.error(err))
}

function loadJokes(jokes=[]) {
    const allJokes = JSON.parse(localStorage.jokes ? localStorage.jokes : '[]').concat(jokes)
    localStorage.jokes = JSON.stringify(allJokes)
    document.querySelector('ul').innerHTML += allJokes.map(joke => `<li>${joke}</li>`).join('')
}

function get5Jokes() {
  const jokePromises = []
  for (let i = 0; i < 5; i++) {
    jokePromises.push(fetchJoke())
  }
  Promise.all(jokePromises)
    .then(loadJokes)
    .catch(err => console.error(err))
}

document.querySelector('button').addEventListener('click', get5Jokes)

loadJokes()


// ====

// async function asyncGetJoke() {
//     // fetchJoke()
//     // .then(result => console.log(result))
//     return await fetchJoke()
// }

// asyncGetJoke().then(x => console.log(x))

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

// function getJoke() {
//     return new Promise((resolved, rejected) => {
//         try{
//             req = new XMLHttpRequest()
//             req.addEventListener('load', event => cb(event.target.response.joke))
//             req.open('GET','http://icanhazdadjoke.com/')
//             req.setRequestHeader('Accept', 'application/json')
//             req.responseType = 'json'
//             req.send()
//         }
//         catch (e) {
//             rejected(e)
//         }
//     })
// }

// ====

    // const cb = joke => {
    //   jokes.push(joke)
    //   return getJoke()
    // }

    // getJoke()
//   .then(cb)
//   .then(cb)
//   .then(cb)
//   .then(cb)
//   .then(joke => {
//     jokes.push(joke)
//     console.log(jokes)
//   })
// console.log('Loading....')

// ====

// getJoke(joke => console.log(joke))
// getJoke(joke => document.body.innerHTML += `<p>${joke}</p>`)

// const jokes = []

// getJoke(joke => {
//     jokes.push(joke)
//     getJoke(joke => {
//         jokes.push(joke)
//         getJoke(joke => {
//             jokes.push(joke)
//             console.log(jokes)
//         })
//     })
// })

// ====

// const cb = joke => {
//     jokes.push(joke)
//     return getJoke()
// }

// getJoke()
//     .then(cb)
//     .then(cb)
//     .then(cb)
//     .then(cb)
//     .then(jokes => {
//         jokes.push(joke)
//         console.log(jokes)
//     })

// ====