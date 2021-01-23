# Events Timeline App

## Scope:
Design and implement the minimum viable product (MVP) of an app for visualizing events on a timeline which shows events in a compact space-efficient way to minimize number of rows.

![Alt ](/timeline_screenshot.png?raw=true "Events Timeline app screenshot")

## Notes:
* I elected to use React to build the project and managed the lifecycle using Hooks. Having functional components, instead of class instances, reduces the risk of passing incorrect props from a parent to a child. For example, state can be managed whenever is needed within a component, instead of having to be inherited from the main app component. Also, due to the way JavaScript binds (or rather doesn't bind) the context to 'this', there is a common error experienced when writing class components in React and passing a function as a prop (if it's not bound correctly, it returns undefined).
* I did all dates manupulation manually, I probably could have used a library to ease calculating the range and comparing dates.
* I wrote props validation and rendering tests to have some basic testing. I could add more unit tests to check the helper functions, the calls to the API, and the input tag browser event listeners/handlers.

## Instructions:
Navigate to this project directory, run `npm install` to install dependencies, then run `npm start` to initialize and connect to a node server with your default browser. If you run `npm test`, you'll see the results of the unit tests included.