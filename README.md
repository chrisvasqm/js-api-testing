# API Testing using JavaScript

Sample project with a simple structure to showcase how to write an easy to use and maintanable API Testing Suite using JavaScript

## Structure

At a high level, the following layers are being used: `Client` > `Service` > `Test`.

![layers](/src/img/apitestinglayers.png)

- `Client`: Handles overall configurations on how to call a REST/GRPC Web APIs.
- `Service`: Handles specific endpoint routes and individual logic while consuming the `Client` layer and provides a simple API.
- `Test`: Handles assertions on the data retrieved from the `Service` layer.

> Note: In this case we are using Mocha for the test framework and Chai for the assertions in the `Test` layer, but these can be replaced if needed.
