import React, { Component } from 'react';

const phones = [
  {
    name: "IPhone",
    brand: "Apple",
    price: 700.62
  },
  {
    name: "Galaxy",
    brand: "Samsung",
    price: 673.45
  },
  {
    name: "XPeria",
    brand: "Sony",
    price: 300.46
  }
]



class App extends Component {
  render() {
    let phonesRender = phones.map((element, index) => 
      <div key={index}>
          <div>{element.name}</div>
          <div>{element.brand}</div>
          <div>{element.price}</div>
      </div>)
      
    return (
      <div className="Phones">
          {phonesRender}
      </div>
    );
  }
}

export default App;
