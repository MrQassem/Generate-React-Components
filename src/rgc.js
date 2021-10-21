#!/usr/bin/env node
const readline = require("readline");
var fs = require('fs');
var path = require('path');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

createReactFolderAndFiles(process.argv.slice(2)[0])
return

function createReactFolderAndFiles(input) {
    
    let name
    let out = input //.split(' ')[0]
    let basename = path.basename(path.join(__dirname, out))
    
    name = basename

    let fullPath = path.join(path.join(process.cwd(), out, name))
    let fullPathDirName = path.dirname(fullPath)
    console.log('path: ',path.join(fullPathDirName,basename));

    // return
    fs.mkdirSync(fullPathDirName, { recursive: true }, (err) => {
        if (err) {
            return console.error(err);
        }
        console.log('Directory created successfully!');
    });

    fs.writeFile(path.join(fullPathDirName, basename + '.tsx'),
        `import React from 'react'
import "./${basename}.css";
interface Props{

}
const ${name}: React.FC<Props> = (props) => {
    return (
        <div>
            <h2>${basename} works!</h2>
        </div>
    )
}
export default ${name}`
        , (err) => { if (err) throw err; });

    fs.writeFile(path.join(fullPathDirName, basename + '.css'), ``, (err) => { if (err) throw err; })
    fs.writeFile(path.join(fullPathDirName, basename + '.scss'), ``, (err) => { if (err) throw err; })
    rl.close()
}