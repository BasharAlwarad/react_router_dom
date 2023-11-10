import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
const Search = () => {
  const [inputVal, setInputVal] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <div>
      <input
        type='number'
        min={1}
        max={100}
        onChange={(e) => setInputVal(e.target.value)}
      />
      <button onClick={() => setSearchParams({ postId: inputVal })}>
        Search
      </button>
    </div>
  );
};

export default Search;
