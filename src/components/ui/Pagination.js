import React from 'react';

const Pagination =(props) => {

const pageLinks = []

for(let i=1; i <= props.pages + 1; i++) {
    let active = props.currentPage === i ? 'active' : '';

    pageLinks.push(<li className={`page-item ${active}`} key={i} onClick={()=>props.nextPage(i)}><button className='page-link'>{i}</button></li>)
}

    return (
   
        <div className='container'>
            <div className="row">
                <ul className='pagination'>
                    {props.currentPage > 1 ? <li className={`page-item`} onClick={()=>props.nextPage(props.currentPage - 1)}><button className='page-link'>Prev</button></li> : '' }
                    {pageLinks}
                    {props.currentPage < props.pages + 1 ? <li className={`page-item`} onClick={()=>props.nextPage(props.currentPage + 1)}><button className='page-link' >Next</button></li> : '' }
                </ul>
            </div>
            
        </div>

    );
}

export default Pagination;
