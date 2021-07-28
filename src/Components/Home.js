import React, { useState } from 'react'
import Post from './Post'
import {CardDeck} from 'react-bootstrap';
import ReactPaginate from 'react-paginate';


function Home({data}) {
    const [pageNumber,setPageNumber] =useState(0);
    const userPerPage=8;
    const pageVisited=pageNumber*userPerPage;
    const pageCount=Math.ceil(data.length/userPerPage);

    const changePage = ({selected}) =>{
        setPageNumber(selected);
        };

    const displayPosts= data.slice(pageVisited,pageVisited+userPerPage).map((p,i) =>{
        return(
            <Post da={p}/>
        );
    })
    //console.log(props.data);
    return (
        <div className="container">
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
