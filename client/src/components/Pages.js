import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Context } from '..';
import {Pagination} from 'react-bootstrap';

const Pages = observer(() => {
   const {device} = useContext(Context)
   const pagesCount = Math.ceil(device.totalCount / device.limit)//Получил, разделил, округлил
   const pages = []

   for (let i = 0; i < pagesCount; i++) {
     pages.push(i + 1) // цепляю текущий счётчик в цикле и + 1 это будет номер страници
   }
     //выделяю как то страницу active={device.page === page}  то она будет акетивной
   return (
        <Pagination className= 'mt-5'>
            {pages.map(page => 
                <Pagination.Item active={device.page === page} key={page} onClick={() => device.setPage(page)}>
                    {page}
                    </Pagination.Item>
                )}
        </Pagination>
    );
});

export default Pages;