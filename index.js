import express from "express";
import {Person} from './Person.js'

const app = express()
const router = express.Router()
const port = +process.env.PORT || 3500

app.use(
    express.json(),
    router
)

router.get('^/$|/class', (req, res)=>{
    res.json({
        status: res.statusCode,
        msg: 'You\'re Home Dawwwwwgg!'
    })
})

router.get('/person1', (req,res)=>{
// calling out the constructor function
    let person1 = new Person()
    person1.FirstName = "Ntokozo"
    person1.LastName = " Sithebe"
    person1.Age = 22
    person1.display()
    res.end('Check the console chilleee')
})

router.get('/person2', (req, res)=>{
    let person2 = new Person()
    person2.FirstName = 'Tanya'
    person2.LastName = 'Williams'
    person2.Age = 25
    person2.display()
        res.end('Check the console browskiii')
})

router.get('/person3', (req, res)=>{
    let person3 = new Person()
    person3.FirstName = 'Amandla'
    person3.LastName = 'Lee'
    person3.Age = 34
    person3.display()
    res.end('Check the console')
})

// router.get('/*', (req, res)=>{
//     let all = Person()
//     Person.display()
//        res.end('Something ain\'t right boo-boo')

// })

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})