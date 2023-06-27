# API Testing using JavaScript

Sample project with a simple structure to showcase how to write an easy to use and maintanable API Testing Suite using JavaScript

## Structure

At a high level, the following layers are being used: `Client` > `Service` > `Test`.

- `Client`: Code that handles overall configurations on how to call a REST/GRPC code.
- `Service`: Code that handles specific endpoint routes and individual logic with a simple API.
- `Test`: Code that is in charge of consuming the `Service` and assert on the data retrieved.
  > Note: In this case we are using Mocha for the test framework and Chai for the assertions, but these can be replaced if needed.
