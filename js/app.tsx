import * as React from "react";
import * as ReactDOM from "react-dom";
import 'whatwg-fetch';
class HelloMessage extends React.Component<any, any> {
  render() {

    return <div>Hello {this.props.name}</div>;
  }
}
var url ="http://localhost:9292/";
var myHeaders = new Headers();
const mode= 'cors';
var myInit = {
  method: 'GET',
  headers: myHeaders,
  mode: mode,
  cache: 'default'
};



var processStatus = function(response){
  if(response.status === 200 || response.status === 0){
    return Promise.resolve(response)
  }else{
    return Promise.reject(new Error(response.statusText))
  }
}
var potluckList = function(){
  // var potlucks;
  const potluck = fetch(url+"potlucks", myInit)
  .then(function(response){
    return response.json();
  }).then(function(json){

    const pls = json.map(function(p){
      console.log(p);
     return  <li key={p.id}>{p.title}</li>
    });
    const element = (
      <div>
        <h1>Potlucks({json.length})</h1>
        <ul>
          {pls}
        </ul>
      </div>
    );
    ReactDOM.render(element, document.getElementById("app"));


  });
  return potluck;
  // potluck.then(function(json){
  //   console.log(json[0].title);
  // });
  // return potluck;
}

// class Potlucks extends React.Component<any,any> {
  
//   render() {
//     var potlucks = potluckList();
//   potlucks.then(function(json){
// console.log(json[0].title);
//   });
//     return <div></div>
//   }
// }

// const potlucks = (
//   <h1>Total Potlucks</h1>
  
// );
const js = potluckList();
console.log(js);
// const element = <Potlucks name="Janice"/>;
// ReactDOM.render(element, document.getElementById("app"));
// ReactDOM.render();