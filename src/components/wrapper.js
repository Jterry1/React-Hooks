import React, { useState } from 'react';
 
import Input from './Input';
import FilteredList from './FilteredList';
 
const Wrapper = ({ items }) => {
    const [filter, setFilter] = useState('');
 
    return (
        <div style={{textAlign: 'left', marginLeft: '400px'}}>
            <h2 style={{display:'inline-block'}}>My Filtered List</h2><br></br>
            <Input
                filter={filter}
                setFilter={setFilter}
            />
            <FilteredList
                filter={filter}
                items={items.filter(item => item.indexOf(filter) > -1)}
            />
        </div>
    );
}
 
export default Wrapper;