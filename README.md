# EasyJsonDB
A simple module for JSON database. with auto backup every 12 hours.


```
Prepare:
1. Create new folder and name it as 'EasyJsonDB' or whatever youwant.
  📁 EasyJsonDB
2. Put the file 'EasyJsonDB.js' inside folder 'EasyJsonDB'
  📁 EasyJsonDB
    🗄️ EasyJsonDB.js
    🗄️ apps.js
3. Inside folder 'EasyJsonDB', create new folders again
  📁 EasyJsonDB
    📁 backup
    📁 database
    🗄️ EasyJsonDB.js
    🗄️ apps.js
4. Inside folder 'database', create new file and name it as 'storage.json'
  📁 EasyJsonDB
    📁 backup
    📁 database
      🗄️ storage.json
    🗄️ EasyJsonDB.js
    🗄️ apps.js
```

```js
//Usage:
  const EasyJsonDB = require('./EasyJsonDB') // Search the right location that where you put the file
  const db = new EasyJsonDB()
  
  // Add new item and setup the number
    // The number will changed if you using the same name/key
  db.add("EasyJsonDB", 1000)
    // The output will be like this
    {
        "EasyJsonDB": 1000
    }
  
  // Subtract the number
   db.subtract("EasyJsonDB", 100)

  // Set the item to array
  const newArray = [ "Example" ]
  db.set("Sample", newArray)
    // The output will be like this
    {
        "Selee": [ "Example" ]
    }

  // Get data from item
  db.get("Selee")
  
  // Check the item if exists.
  db.has("Selee")

  // Add new data to the array
  const newDatatoAdd = { "Sample":"Example" }
  db.push("Selee", newDatatoAdd)
      // The output will be like this
    {
        "Selee": [ 
            {
              "Sample":"Example" 
            }
          ]
    }
  
  // Delete the item from database
  db.delete("Selee")
  
  // Fetch the name from database
  db.fetch(number)
  // the 'number' is the amount name that will show
```
