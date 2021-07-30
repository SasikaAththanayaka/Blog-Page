import React, { useState } from 'react'
import Post from './Post'
import {CardDeck,Jumbotron,Container} from 'react-bootstrap';
import ReactPaginate from 'react-paginate';
import Api from '../API/Api';


function Home() {
    const {data} =Api("https://jsonplaceholder.typicode.com/posts");

    const [pageNumber,setPageNumber] =useState(0);
    const userPerPage=6;
    const pageVisited=pageNumber*userPerPage;
    const pageCount=Math.ceil(data.length/userPerPage);

    const changePage = ({selected}) =>{
        setPageNumber(selected);
        };

    const displayPosts= data.slice(pageVisited,pageVisited+userPerPage).map((p) =>{
        return(
            <Post da={p} key={p.id}/>
        );
    })
    //console.log(props.data);
    if(!data){
        return "loading................";
    }
    return (
        <div className="container">
            
            <Jumbotron className="jambo">
                <Container >
                    <h1>Blog-Page</h1>
                    <p>
                        This is a modified jumbotron that occupies the entire horizontal space of
                        its parent.
                        This is a modified jumbotron that occupies the entire horizontal space of
                        its parent.
                        This is a modified jumbotron that occupies the entire horizontal space of
                        its parent.
                    </p>
                </Container>
            </Jumbotron>
            <div className="container">
               <CardDeck>
                    {displayPosts}
                </CardDeck>
                <div className="paginate">
                    <ReactPaginate
                        previousLabel={"Previous"}
                        nextLabel={"Next"}
                        pageCount={pageCount}
                        onPageChange={changePage}
                        containerClassName={"paginationBttn"}
                        previousLinkClassName={"previousBttn"}
                        nextLinkClassName={"nextBttn"}
                        disabledClassName={"paginationDisabled"}
                        activeClassName={"paginationActive"}
                        />
                </div>
             </div>
        </div>
        
    )
}

export default Home
