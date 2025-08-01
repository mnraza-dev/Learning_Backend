import React from "react";
import JokesItemCard from "./components/JokesItemCard";
import { useState, useEffect } from "react";

const App = () => {
  const [jokes, setJokes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const API_URL = `${
    import.meta.env.VITE_API_URL || "http://localhost:8080"
  }/jokes`;

  useEffect(() => {
    setLoading(true);
    setError(null);
    
    fetch(API_URL)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setJokes(data.jokes);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching jokes:", error);
        setError(error.message);
        setJokes([]);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
            😄 Jokes Hub
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Discover the best jokes that will make you laugh out loud!
          </p>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex justify-center items-center py-20">
            <div className="flex flex-col items-center space-y-4">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-400"></div>
              <p className="text-gray-300">
                Loading jokes...
              </p>
            </div>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="flex justify-center items-center py-20">
            <div className="text-center space-y-4">
              <div className="text-6xl">😞</div>
              <h2 className="text-2xl font-semibold text-gray-200">
                Oops! Something went wrong
              </h2>
              <p className="text-gray-300 max-w-md">
                {error}
              </p>
              <button 
                onClick={() => window.location.reload()}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
              >
                Try Again
              </button>
            </div>
          </div>
        )}

        {/* Jokes Grid */}
        {!loading && !error && (
          <>
            <div className="mb-8 text-center">
              <span className="inline-block px-4 py-2 bg-blue-900 text-blue-200 rounded-full text-sm font-medium">
                {jokes.length} {jokes.length === 1 ? 'joke' : 'jokes'} found
              </span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {jokes.map((joke) => (
                <JokesItemCard key={joke.id} joke={joke} />
              ))}
            </div>

            {jokes.length === 0 && (
              <div className="text-center py-20">
                <div className="text-6xl mb-4">🤔</div>
                <h3 className="text-xl font-semibold text-gray-200 mb-2">
                  No jokes found
                </h3>
                <p className="text-gray-300">
                  Check back later for some hilarious content!
                </p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default App;
