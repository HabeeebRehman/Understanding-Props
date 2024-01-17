import { Component } from "react";
import "./App.css"
import elephant from "./images/elephant.jpeg";

export default class AppClass extends Component{
  
  render(props){
    let img = this.props;
    return (
      <div>
        <h1>Kalvium gallary</h1>
        <div className="image-container">
          {img.data.map(el => {
            return (
              <div key={el.id}>
                <img src={el.img} alt={el.id} />
              </div>
            );
          })}
        </div>
      </div>
    )
  }
}
