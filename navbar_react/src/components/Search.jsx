import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('query') || '');
  const [results, setResults] = useState(null);
  const [error, setError] = useState(null);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSearchParams({ query });

    try {
      const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users`, {
        params: { username: query }
      });
      setResults(data);
      setError(null);
    } catch (error) {
      setError('An error occurred while fetching the data.');
      setResults(null);
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Search</h1>
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          className="w-full p-2 border border-gray-300 rounded-md mb-2"
          placeholder="Type your search query..."
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
        >
          Search
        </button>
      </form>
      {results ? (
        <ul className="mt-4">
          {results.map((result) => (
            <li key={result.id} className="bg-gray-100 p-2 rounded-md mb-2 shadow-sm">
              {result.name}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">{error ? error : 'No results found'}</p>
      )}
    </div>
  );
};

export default Search;
