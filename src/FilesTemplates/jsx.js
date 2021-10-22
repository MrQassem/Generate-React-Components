const jsx = (filename) => {
  return `import React from 'react'
const ${filename} = () => {
    return (
        <div>
            <h2>${filename} works!</h2>
        </div>
    )
}
export default ${filename}`;
};
const jsx_css = (filename) => {
  return `import React from 'react'
  import "./${filename}.css";
  const ${filename} = () => {
      return (
          <div>
              <h2>${filename} works!</h2>
          </div>
      )
  }
  export default ${filename}`;
};
module.exports.jsx = jsx;
module.exports.jsx_css = jsx_css;
