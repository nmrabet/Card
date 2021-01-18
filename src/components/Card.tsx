import React from 'react';

export default function Card() {
    
    const url = "https://reqres.in/api/users?page=2";

    fetch(url)
        .then(res => res.json())
        .then(data => console.log(data.data))

    return (
        <div>
            
        </div>
    )
}
