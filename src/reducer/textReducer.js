const ADD_TEXT = "ADD_TEXT";

const placeholder = `# Hi I'm Javid
## This is a project for 
[freecodeCamp](https://www.freecodecamp.org/)

### ~~edit this to change markdown~~

> this is a blockquote

This is an _inline code_ \`<div id = "id"></div>\`
\

and a **multi-line code** :

\`\`\`
  const aFunction = (props) => {
    console.log(props);
  }
\`\`\`

 1. what else can we add.
 2. I guess a list.
 3. and an image, because why not!
 ![Javid](https://blog.flamingtext.com/blog/2022/01/17/flamingtext_com_1642408387_324626791.png)`;

const initialState = {
  text: placeholder,
};

const textReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TEXT:
      return Object.assign({}, state, { text: action.text });
    default:
      return state;
  }
};

export default textReducer;
