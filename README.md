# Generate-React-Components - grc

grc let you generate react components in typescript in a folder you specify and it will include .tsx, .scss, .css files using a command line

## Installation

Use the package manager [npm] to install "@qasem.sami/rgc".

```bash
npm install -g "@qasem.sami/rgc"
```

## Usage

```python
rgc ./src/Components/Card
```

This command will generate

- Card.tsx
- Card.scss
- Card.css

## Output

### Card.tsx

```sh
import React from 'react'
import "./Card.css";
interface Props{

}
const Card: React.FC<Props> = (props) => {
    return (
        <div>
            <h2>Card works!</h2>
        </div>
    )
}
export default Card
```
