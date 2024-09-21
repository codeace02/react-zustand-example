// App.js
import React, { useEffect } from 'react';
import './Api.css'; // Import the CSS file
import useZustandStore from '../app/zustandStore';

const FetchDataComponent = () => {
    const { data, loading, error, fetchData } = useZustandStore();

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    if (loading) return <div className="loading">Loading...</div>;
    if (error) return <div className="error">Error: {error}</div>;

    return (
        <div className="container">
            <h1>Posts</h1>
            <div className="card-container">
                {data.map(post => (
                    <div className="card" key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FetchDataComponent;
