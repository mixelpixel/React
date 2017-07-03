# LESSON FOUR LECTURE NOTES
## [@20s](https://youtu.be/vi8oJD5EcX8?t=20s) **Debugging Applications in Chrome Developer Console**
- keyword: `debugger;`
## [@10m](https://youtu.be/vi8oJD5EcX8?t=10m) **npm and Routing**
- multiple pages inside an application
- package.json file
- node modules: bloat? Generally don't send node modules folder to github
- https://reacttraining.com/react-router/web/guides/quick-start
- install router in application `npm install --save react-router-dom` (`--save` saves it to the package.json file)
## [@18m53s](https://youtu.be/vi8oJD5EcX8?t=18m52s) **Using Router in the App**
- `import { BrowserRouter as Router, Route, Link } from 'react-router-dom'`;
- 3 basic components: Router, Route and Link
- wrap the App return in the Router component
- Link has a property "to", e.g. `<Link to="/about">About</Link>`
- Route has a property "path", e.g. `<Route path="/about" component={} />`
- Link and Route point to `/about` so we use an About.js file.
  ```jsx
  impoer React from 'react';

  export default () = > (<h2>About<h2>);
  ```

  Same as:
  ```jsx
  impoer React from 'react';

  export default () = > {
    return <h2>About<h2>;
  };
  ```

- and we import the About component into App.js
## [@34m13s](https://youtu.be/vi8oJD5EcX8?t=34m13s) **More complexity**
## [@38m20s](https://youtu.be/vi8oJD5EcX8?t=38m20s) **Single Page Application**
- loading a whole new page vs. changing the state of the page you have loaded
