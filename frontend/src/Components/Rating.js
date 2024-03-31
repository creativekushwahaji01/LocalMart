import React from "react";

const Rating = ({ value }) => {
    const star_regular='https://i.ibb.co/585xYQb/image-removebg-preview-1.png'
    const star_solid = 'https://i.ibb.co/zJQhdTN/image-removebg-preview-2.png'
    return (
        <div className='rating'>
            <img src={value >= 1 ? star_solid : star_regular} width="20px" height="20px" alt="Star" />
            <img src={value >= 2 ? star_solid : star_regular} width="20px" height="20px" alt="Star" />
            <img src={value >= 3 ? star_solid : star_regular} width="20px" height="20px" alt="Star" />
            <img src={value >= 4 ? star_solid : star_regular} width="20px" height="20px" alt="Star" />
            <img src={value >= 5 ? star_solid : star_regular} width="20px" height="20px" alt="Star" />
        </div>
    );
}

export default Rating;