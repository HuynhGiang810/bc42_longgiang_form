import React, {useState} from 'react'

function Search({ onSearch }) {
    const [searchString, setSearchString] = useState("");
    const handleChange = (evt) => {
        setSearchString(evt.target.value);
    };
  return (
    <div className='w-25 d-flex'>
        <input type="text" className='form-control' placeholder='Tìm theo tên' value={searchString} onChange={handleChange} />
        <button className='btn btn-success ms-2 ' style={{width: 300}} onClick={() => onSearch(searchString)}>Tìm kiếm</button>
    </div>
  );
}

export default Search