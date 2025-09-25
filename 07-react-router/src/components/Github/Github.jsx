import React, { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';

function Github() {
    const data = useLoaderData(); //use concept of loader

//   const [data, setData] = useState(null);
//   useEffect(() => {
//     fetch('https://api.github.com/users/hiteshchoudhary')
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data);
//         setData(data);
//       });
//   }, []);

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
      Github Followers: {data?.followers}
      <img
        className='mx-auto mt-4 rounded-full'
        src={data?.avatar_url}
        alt="Git Picture"
        width={300}
      />
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/hiteshchoudhary');
    return response.json();
}