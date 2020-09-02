# Selee
A simple module for JSON database. with auto backup every 12 hours.


```
Prepare:
1. Create new folder and name it as 'Selee' or whatever youwant.
  📁 Selee
2. Put the file 'selee.js' inside folder 'Selee'
  📁 Selee
    🗄️ selee.js
    🗄️ apps.js
3. Inside folder 'Selee', create new folders again
  📁 Selee
    📁 backup
    📁 database
    🗄️ selee.js
    🗄️ apps.js
4. Inside folder 'database', create new file and name it as 'storage.json'
  📁 Selee
    📁 backup
    📁 database
      🗄️ storage.json
    🗄️ selee.js
    🗄️ apps.js
```

```js
//Usage:
  const Selee = require('./selee') // Search the right location that where you put the file
  const db = new Selee()
  
  // Add new item and setup the number
    // The number will changed if you using the same name/key
  db.add("Selee", 1000)
    // The output will be like this
    {
        "Selee": 1000
    }
  
  // Subtract the number
   db.subtract("Selee", 100)

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
