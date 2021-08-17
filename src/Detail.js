import React, {useState} from 'react';
import {Button} from 'react-bootstrap';
import {useHistory, useParams} from 'react-router-dom';
import './App.css';

const Detail =(props) =>{
  let { id } = useParams();  
  let history = useHistory();
  // console.log(props.shoes)
  let curProd = props.shoes.find( objProd => String(objProd.id) === id);
  console.log(curProd)
  
  return(
      <div className="container">
        <div className="row">
          <div className="co-md-6">
            <img src={`https://codingapple1.github.io/shop/shoes${curProd.id+1}.jpg`} width='50%'></img>
          </div>
          <div className="co-md-6 mt-4">
            <h4 className='pt-5'>{curProd.title}</h4>
            <p>{curProd.content}</p>
            <p>{curProd.price}</p>
            <div className='detail_order_btn'><Button variant="danger">주문하기</Button></div>
            <div className='detail_back_btn' onClick={()=> history.goBack()}> 
                <Button variant="danger">뒤로가기</Button>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Detail; 