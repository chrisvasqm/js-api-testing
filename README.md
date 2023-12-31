# API Testing using JavaScript

Sample project with a simple structure to showcase how to write an easy to use and maintanable API Testing Suite using JavaScript

## Getting started

In order to execute these tests, run the following commands on your Terminal:

```bash
npm install
```

> Requires NodeJS to be installed. Installs all the dependncies in your local machine.

And then:

```bash
npm test
```

> This will execute all the Mocha tests under the `/test` directory.

## Structure

At a high level, the following layers are being used: `Client` > `Service` > `Test`.

![layers](/src/img/apitestinglayers.png)

- `Client`: Handles overall configurations on how to call a REST, GraphQL or GRPC Web APIs.
- `Service`: Handles specific endpoint routes and individual logic while consuming the `Client` layer and provides a simple API.
- `Test`: Handles assertions on the data retrieved from the `Service` layer.

> Note: In this case we are using Mocha for the test framework and Chai for the assertions in the `Test` layer, but these can be replaced if needed.

The following layers should help decoupling the code with minimal impact to be able to replace any parts of the code while helping the readers map the features and endpoints that we are trying to test easier since the `Test` doesn't know anything about calling endpoints, the `Service` doesn't know anything about calling Web APIs, and ultimately the `Client` setups general configurations to be used across the board.

## Tips

In the case of using VS Code as your code editor, would recommend the following extensions:

1. [Mocha](https://marketplace.visualstudio.com/items?itemName=Compulim.vscode-mocha)
2. [Mocha Test Explorer](https://marketplace.visualstudio.com/items?itemName=hbenl.vscode-mocha-test-adapter)
3. [ES6 Mocha Snippets](https://marketplace.visualstudio.com/items?itemName=spoonscen.es6-mocha-snippets)

Specially the `Mocha Test Explorer`, which enables a new panel on the left to quickly browse, execute, view results and jump into the code more easily.