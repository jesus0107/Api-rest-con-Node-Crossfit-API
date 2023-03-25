const fs = require('fs');

const saveToDataBase = (DB) => {

    fs.writeFile(
        "./src/database/db.json",
        JSON.stringify(DB, null, 2),
        {encoding: "utf8"},
        (err) => {
            if (err)
            console.log(err);
        }
    )
}

module.exports = {saveToDataBase};
