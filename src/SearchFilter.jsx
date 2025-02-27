import React, { useState } from 'react';

const SearchFilter = () => {
    const [search, setsearch] = useState('');

    const items = [
        'Apple',
        'Banana',
        'Orange',
        'Pineapple',
        'Grapes',
        'Strawberry',
        'Watermelon',
        'Lemon',
    ];

    const handleSearchChange = (e) => {
        setsearch(e.target.value);
    };

    const filteredItems = items.filter((item) =>
        item.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div>
            <input
                type="text"
                placeholder="Search items..."
                value={search}
                onChange={handleSearchChange}
            />

            <div>
                <h3>Filtered Results:</h3>
                <ul>
                    {filteredItems.length > 0 ? (
                        filteredItems.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))
                    ) : (
                        <li>No items found</li>
                    )}
                </ul>
            </div>

            {console.log('Search Term:', search)}
            {console.log('Filtered Items:', filteredItems)}
        </div>
    );
};

export default SearchFilter
