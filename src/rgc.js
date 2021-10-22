#!/usr/bin/env node

var fs = require("fs");
var path = require("path");
var inquirer = require("inquirer");

const { tsx, tsx_css } = require("./FilesTemplates/tsx");
const { jsx, jsx_css } = require("./FilesTemplates/jsx");

let componentName = process.argv.slice(2)[0];
let choice = "";
let styles = "";
inquirer
    .prompt([
        {
            type: "list",
            message: "Select an extension:",
            name: "choice",
            choices: ["tsx", "jsx"],
        },
        {
            type: "list",
            message: "stylesheets?",
            name: "styles",
            choices: ["scss", "css", "none"],
        },
    ])
    .then((answers) => {
        choice = answers.choice;
        styles = answers.styles;
        createReactFolderAndFiles(componentName, choice, styles);
    })
    .catch((error) => {
        console.log(error);
    });
return;

function createReactFolderAndFiles(input, choice, styles) {
    // output file
    let out = input;
    let basename = path.basename(path.join(__dirname, out));

    let fullPath = path.join(path.join(process.cwd(), out, basename));
    let fullPathDirName = path.dirname(fullPath);

    // create directory - directories
    fs.mkdirSync(fullPathDirName, { recursive: true }, (err) => {
        if (err) {
            return console.error(err);
        }
        console.log("Directory created successfully!");
    });

    //   define which tsx or jsx to choose based on the style and extension
    let outputChoice;
    if ((styles == "scss" || styles == "css") && choice == "jsx") {
        outputChoice = jsx_css(basename);
    } else if ((styles == "scss" || styles == "css") && choice == "tsx") {
        outputChoice = tsx_css(basename);
    } else if (styles == "none" && choice == "jsx") {
        outputChoice = jsx(basename);
    } else if (styles == "none" && choice == "tsx") {
        outputChoice = tsx(basename);
    }
    //  create the tsx or jsx file
    fs.writeFile(
        path.join(fullPathDirName, basename + `.${choice}`),
        outputChoice,
        (err) => {
            if (err) throw err;
        }
    );
    // create stylesheets if applicable
    if (styles == "scss") {
        fs.writeFile(
            path.join(fullPathDirName, basename + ".scss"),
            ``,
            (err) => {
                if (err) throw err;
            }
        );
        fs.writeFile(
            path.join(fullPathDirName, basename + ".css"),
            ``,
            (err) => {
                if (err) throw err;
            }
        );
    } else if (styles == "css") {
        fs.writeFile(
            path.join(fullPathDirName, basename + ".css"),
            ``,
            (err) => {
                if (err) throw err;
            }
        );
    }
}
