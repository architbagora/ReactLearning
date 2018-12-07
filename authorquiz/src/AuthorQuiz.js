import React, { Component } from 'react';
import './App.css';
import './bootstrap.min.css';

function AuthorQuiz({turnData , highlight}){  
    return (
      <div className= "container-fluid">
        <Hero/>
        <Turn {...turnData} highlight = {highlight}/>
        <Continue/>
        <Footer/>
      </div>
    );
}

function Hero(){
  return (<div className="row">
    <div className="jumbotron col-10 offset1">
      <h1>Author Quize</h1>
      <p>slect book written by author shown</p>
    </div>
  </div>);
}

function Turn({author, books , highlight}){

  function highlightToBgColor(highlight){
    const mapping= {
      'none': '',
      'correct':'green',
      'wrong':'red'
    };
    return mapping[highlight];
  }



return <div className="row turn" style={{backgroundColor:highlightToBgColor(highlight)}} >
  <div className= "col-4 offset-1">
    <img src={author.imageUrl} className = "   " alt="Author"></img>
  </div>
  <div>
    {books.map((title) => <Book title ={title} key={title}/> )}
  </div>;
  </div> 
}

function Book({title , onclick}){
  return (<div className= "answer">
      <h4>{title}</h4>
  </div>);
} 
function Continue(){
  return <div/>;
}
function Footer(){
  return <div/>;
}

export default AuthorQuiz;
