'use strict';
const { writeFile, readFile, exists, copyFile, readdir } = require('fs')
const { promisify } = require('util')
const writeFileAsync = promisify(writeFile)
const readFileAsync = promisify(readFile)
const existsAsync = promisify(exists)

class Selee {
    constructor(selee) {
        this.selee = selee
        this.storage = require('./database/storage.json')
        this.path = './database/storage.json'
        setInterval(this.parse, 5000) // You can set it to 12 hours or 1 day or 1 week
    }
    add(item, number) {
        if (typeof number !== 'number') return Callback("Number not string")
        if (!this.storage[item]) this.storage[item] = 0; this.storage[item] += number
        this.save()
    }
    subtract(item, number) {
        if (typeof number !== 'number') return Callback("Number not string")
        if (!this.storage[item]) this.storage[item] = 0; this.storage[item] -= number
        this.save()
    }
    set(item, value){
        this.storage[item] = value;
        this.save()
    }
    get(item) {
        return this.storage[item]
    }
    has(item) {
        return Boolean(this.storage[item])
    }
    push(item, element){
        try {
            this.storage[item].push(element)
            this.save()
        } catch (error) {
            Callback("Item not array!")
        }
    }
    delete(item){
        delete this.storage[item];
        this.save()
    }
    fetch(number){
        if (typeof number !== 'number') return Callback("Number not string")
        if (number < 0||number === 0) return;
        let ObjectData = Object.getOwnPropertyNames(this.storage).splice(0, number).join(", ")
        return String(ObjectData)
    }
    async parse(){
        try {
            const jsonData = await readFileAsync('./database/storage.json')
            const procparse = JSON.parse(jsonData)
            if (procparse) {
                const doneParsing = true
                backupData(doneParsing)
            }
        } catch (error) {
            Callback("Failed to parse the database. Error"+error)
        }
    }
    save(){
        writeFileAsync(this.path, JSON.stringify(this.storage, null, 4))
    }

}
function backupData(doneParsing){
    if (doneParsing !== true) Callback("Please parse the database before backup data")
    readdir('./database/', (error, files) => {
        if (error) return;
        const jsonFile = files.filter(f => f.endsWith(".json"))
        jsonFile.forEach(json => {
            const src = `./database/${json}`
            const dest = `./backup/${json}`
            copyFile(src, dest, function(error) {
                if (error) return Callback("Failed to backup database.")
                return Callback("Success backup database.")
            })
        })
    })
}

let Callback = function Callback(message){
    return console.log(String(message))
}
module.exports = Selee





