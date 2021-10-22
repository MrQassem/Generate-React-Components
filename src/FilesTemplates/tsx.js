const tsx = (filename) => {
    return `import React from 'react'
interface Props{

}
const ${filename}: React.FC<Props> = (props) => {
    return (
        <div>
            <h2>${filename} works!</h2>
        </div>
    )
}
export default ${filename}`;
};
const tsx_css = (filename) => {
    return `import React from 'react'
  import "./${filename}.css";
  interface Props{
  
  }
  const ${filename}: React.FC<Props> = (props) => {
      return (
          <div>
              <h2>${filename} works!</h2>
          </div>
      )
  }
  export default ${filename}`;
};

module.exports.tsx = tsx;
module.exports.tsx_css = tsx_css;
