import React, { useEffect } from 'react';
import Pagination from '@mui/material/Pagination';
import './style.css';

export default function PaginationC({totalPages, filter, activePage, setActivePage}) {

    const changePage = (e, currentPage)=>{
        setActivePage(currentPage);
    }

    useEffect(()=>{
        filter();
    }, [activePage]);

    return (
        <Pagination page={ activePage } onChange={(e, currentPage)=>changePage(e, currentPage)} count={totalPages} />
    );
}