import React from 'react';

type Props = {
  name: string;
  business_status: string;
  rating: number;
  formatted_address: string;
  opening_hours?: {
    open_now?: boolean;
    // Add any other properties related to opening_hours if necessary
  };
  // photo_reference: string[];
  user_ratings_total: number;
};

const BakersCard: React.FC<Props> = ({
  name,
  business_status,
  rating,
  formatted_address,
  opening_hours,
  // photo_reference,
  user_ratings_total,
}: Props) => {
  const isCurrentlyOpen = opening_hours?.open_now ?? false;

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 p-4 text-[black]">
      <h3 className="text-lg font-bold">{name}</h3>
      <p className="text-sm">{formatted_address}</p>
      <p className="text-sm">{business_status}</p>
      <p className="text-sm">Rating: {rating}</p>
      {opening_hours ? (
        <p className="text-sm">Open Now: {isCurrentlyOpen ? 'Yes' : 'No'}</p>
      ) : (
        <p className="text-sm">Opening hours not available</p>
      )}
      {/* <p className="text-sm">{photo_reference}</p> */}
      <p className="text-sm">Total Ratings: {user_ratings_total}</p>

      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Add to favorites
      </button>
      <button onClick={() => alert('You clicked me!')} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Details
      </button>
    </div>
  );
};

export default BakersCard;