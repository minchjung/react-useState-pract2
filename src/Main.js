import React, {useState} from 'react';
import './App.css';
import {Button} from 'react-bootstrap';
  
  const Jumbo = () =>{
    return ( 
    <div className='jumbo'>
      <div className ='jumboWrap'>
        <div className ='jumbo_intro'>
          <h1>Hello</h1>
          <h3>Welcome to the Shop</h3>
        </div>
        <div className="jumbo_btn_box"> 
          <Button variant='primary' size='lg'>Start</Button>
        </div>
      </div>
    </div>
    )
  }
  
  const Items = (props) => {
    let url = "https://codingapple1.github.io/shop/shoes";
    return(
      <div className='items'>
        <div className='container'>
          <div className='row'>
              { 
                props.shoes.map( eleShoes => 
                <div className='col-md-4'>
                    <img src={`${url}${eleShoes.id+1}.jpg`} width="100%"></img>
                    <h4>{ eleShoes.title}</h4>
                    <p>{eleShoes.content}</p>
                    <p>{'￦'+ eleShoes.price.toLocaleString()}</p>
                </div>
                )
              }
          </div>
        </div>
      </div>
    )
  }
  function Main(props) {
    return (
    <div className="Main">
        <Jumbo />
        <Items shoes={props.shoes} />
    </div>
    );
  }
  export default Main;