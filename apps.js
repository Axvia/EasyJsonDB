const Selee = require('./selee')
const db = new Selee()

//db.add("Selee", 10000000)
//db.subtract("Sample", 5000)

const newObject = { "Sample":"Example" }
const newArray = [ "Example" ]
// db.set("Sample", newArray)
const dataToget = db.get("Sample")
//console.log(dataToget)
const CheckData = db.has("Selee")
// console.log(CheckData)

// Push only work on Array
const newDatatoAdd = { "Sample":"Example" }
// db.push("Sample", newDatatoAdd) // Sorry
// db.delete("Example")
const fetched = db.fetch(3)
// console.log(fetched)



