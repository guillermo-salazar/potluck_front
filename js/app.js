import * as React from "react";
import * as ReactDOM from "react-dom";
class HelloMessage extends React.Component {
    render() {
        return React.createElement("div", null,
            "Hello ",
            this.props.name);
    }
}
var url = "localhost:9292";
var processStatus = function (response) {
    if (response.status === 200 || response.status === 0) {
        return Promise.resolve(response);
    }
    else {
        return Promise.reject(new Error(response.statusText));
    }
};
var potluckList = function () {
    // fetch(url+"/potlucks").then(processStatus).then().catch();
    fetch(url + "/potlucks").catch();
};
class Potlucks extends React.Component {
    render() {
        return React.createElement("div", null, "Hello ");
    }
}
const element = React.createElement(Potlucks, { name: "Janice" });
ReactDOM.render(element, document.getElementById("app"));
