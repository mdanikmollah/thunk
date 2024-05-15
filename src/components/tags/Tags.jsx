import React from 'react';

const Tags = ({tag}) => {
  return (
    <>
    <div className="px-4 py-1 text-blue-600 bg-blue-100 rounded-full cursor-pointer">
        {tag}
    </div>
    </>
  )
}

export default Tags;