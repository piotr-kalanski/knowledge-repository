# Example unit tests in React

# Configuration

- Create react app

        npx create-react-app react-unit-test

- Run eject
 
        npm run eject

- Install enzyme

        npm install --save-dev enzyme
        npm install --save-dev enzyme-adapter-react-16

- Create [src/setupTests.js] file with content:

``` js
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
```

- add below to package.json:

```js
    "jest": {
        
        [...]

        "setupFilesAfterEnv": [
            "<rootDir>/jest.setup.js"
        ]
    }
```

## Run test

    npm run test

## References
- https://www.robinwieruch.de/react-testing-jest-enzyme
- https://create-react-app.dev/docs/running-tests/