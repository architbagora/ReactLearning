import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AuthorQuiz from './AuthorQuiz';
import registerServiceWorker from './registerServiceWorker';
import {shuffle , sample} from 'underscore';

const authors= [
    {
        name: 'mark twain',
        imageUrl : 'images/authors/marktwain.jpg',
        imageSource:'Wikimedia commons',
        books:['the adventures of huckleberry finn',
                'life of mississipi',
                'pappu pas  hux' ]
    },
    {
        name: 'JK ROLLING',
        imageUrl : 'images/authors/JKROLLING.jpg',
        imageSource:'Wikimedia commons',
        books:['HP1','HP2','HP3' ]
    },
    {
        name: 'WINSTON CHURCHILL',
        imageUrl : 'images/authors/WINSTON_CHURCHILL.jpg',
        imageSource:'Wikimedia commons',
        books:['ENGLAND ONE','ENGLAND TWO' ]
    },
    {
        name: 'HITLER',
        imageUrl : 'images/authors/HITLER.jpg',
        imageSource:'Wikimedia commons',
        books:['ONE','GERMANY TWO' ]
    },
    {
        name: 'PREM CHAND',
        imageUrl : 'images/authors/PREM_CHAND.jpg',
        imageSource:'Wikimedia commons',
        books:['INDIA' ]
    }

];

const state = {
    turnData: getTurnData(authors),
    highlight: ''
};

function getTurnData(authors){
const allBooks = authors.reduce(function(p,c,i){
    return p.concat(c.books);
}, []);

const fourRandomBooks = shuffle(allBooks).slice(0,4);

const answer = sample(fourRandomBooks);

return {
    books: fourRandomBooks,
    author: authors.find((author) => author.books.some((title) =>
    title === answer))
}

}

ReactDOM.render(<AuthorQuiz {...state} />, document.getElementById('root'));
registerServiceWorker();
