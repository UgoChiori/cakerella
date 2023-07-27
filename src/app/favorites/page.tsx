// 'use client'
// import React, { useState } from 'react';
// import BakersCard from '../bakerscard/page';

// type Baker = {
//   id: number;
//   name: string;
//   business_status: string;
//   rating: number;
//   formatted_address: string;
//   opening_hours?: {
//     open_now?: boolean;
//     // Add any other properties related to opening_hours if necessary
//   };
//   photo_reference: string[];
//   user_ratings_total: number;
// };

// const Favorites: React.FC = () => {
//   const [favoriteBakers, setFavoriteBakers] = useState<Baker[]>([]);

//   // Function to add a baker to favorites list
//   const addToFavorites = (baker: Baker) => {
//     if (!favoriteBakers.some((favBaker) => favBaker.id === baker.id)) {
//       setFavoriteBakers([...favoriteBakers, baker]);
//     }
//   };

//   // Function to remove a baker from favorites list
//   const removeFromFavorites = (baker: Baker) => {
//     const updatedFavorites = favoriteBakers.filter((favBaker) => favBaker.id !== baker.id);
//     setFavoriteBakers(updatedFavorites);
//   };

//   // Sample data for demonstration (replace this with your actual data)
//   const sampleBakers: Baker[] = [
//     // Add your baker objects here
//   ];

//   return (
//     <div className="flex flex-col items-center justify-center bg-gray-100 p-4 text-[black]">
//       <h2 className="text-xl font-bold mb-4">Favorites</h2>
//       <div className="grid gap-4 md:grid-cols-3">
//         {favoriteBakers.map((baker) => (
//           <BakersCard
//             key={baker.id}
//             name={baker.name}
//             business_status={baker.business_status}
//             rating={baker.rating}
//             formatted_address={baker.formatted_address}
//             opening_hours={baker.opening_hours}
//             // photo_reference={baker.photo_reference}
//             user_ratings_total={baker.user_ratings_total}
//           />
//         ))}
//             {/* Add any additional custom actions for the BakerCard here */}

//              <button onClick={() => addToFavorites(baker)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//                 Add to favorites
//                 </button>
            
//              <button onClick={() => removeFromFavorites(baker)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
//               Remove from favorites
//             </button>
         
       
//       </div>
//     </div>
//   );
// };

// export default Favorites;