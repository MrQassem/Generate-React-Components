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
? Select an extension: (Use arrow keys)
> tsx
  jsx

? stylesheets? (Use arrow keys)
> scss
  css
  none
```

This command will generate

-   Card.tsx (or Card.jsx)
-   Card.scss (if you chose scss)
-   Card.css (if you chose either scss or css)

## Output

### Card.jsx

```jsx
import React from "react";
import "./Card.css";
const Card = () => {
    return (
        <div>
            <h2>Card works!</h2>
        </div>
    );
};
export default Card;
```

### Or Card.tsx

```tsx
import React from "react";
import "./Card.css";
interface Props {
  
}
const Card: React.FC<Props> = (props) => {
    return (
        <div>
            <h2>Card works!</h2>
        </div>
    );
};
export default Card;
```
