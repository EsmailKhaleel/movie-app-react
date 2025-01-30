import React from 'react';
import ReactPaginate from 'react-paginate';
import MovieController from '../Controllers/MovieController';

export default function PaginationComponent({setMovies}) {

    const handlePageClick = async (event)=>{
        console.log(event.selected);
        const movies = await MovieController.getPage((event.selected+1));
        setMovies(movies);
    }
    return (
        <div>
            <ReactPaginate
                breakLabel="..."
                nextLabel=">"
                onPageChange={handlePageClick}
                pageRangeDisplayed={2}
                marginPagesDisplayed={2}
                pageCount={200}
                previousLabel="<"
                renderOnZeroPageCount={null}
                containerClassName="paginate-wrapper"
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                breakClassName="break"
                breakLinkClassName="break-link"
                activeClassName="selected"
                disabledClassName="disabled"
            />
        </div>
    )
}
