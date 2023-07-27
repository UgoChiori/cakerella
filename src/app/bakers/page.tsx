// 'use client'
// import { useState, useEffect } from "react";
// import BakersCard from "../components/BakersCard";



// function Bakers() {
//   const [bakers, setBakers] = useState<any[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [searchQuery, setSearchQuery] = useState<string>("");
//   const [filteredBakers, setFilteredBakers] = useState<any[]>([]);
//   const [nextPageToken, setNextPageToken] = useState<string | null>(null);
//   const [userLocation, setUserLocation] = useState<{ latitude: number ; longitude: number  }>({
//     latitude: 0,
//     longitude: 0,
//   });

//   const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setSearchQuery(e.target.value);
//   };

//   const fetchBakerData = async (pageToken: string | null = null) => {
//     setLoading(true);
//     try {
//       let url = `https://bakeryserver.vercel.app/api/maps/place?radius=10000`;
//       if (userLocation.latitude && userLocation.longitude) {
//         url = `${url}&latitude=${userLocation.latitude}&longitude=${userLocation.longitude}`;
        
//       }
//       if (pageToken) {
//         url = `${url}&pagetoken=${pageToken}`;
//       }
//       console.log(url)
//       const res = await fetch(url);
//       const data = await res.json();
//       if (data.results) {
//         setBakers((prevBakers) => [...prevBakers, ...data.results]);
//         setNextPageToken(data.next_page_token || null);
//       }
//     } catch (err) {
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleLoadMore = () => {
//     if (nextPageToken) {
//       fetchBakerData(nextPageToken);
//     }
//   };

//   useEffect(() => {
//     const getLocation = () => {
//       if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(
//           (position) => {
//             setUserLocation({
//               latitude: position.coords.latitude,
//               longitude: position.coords.longitude,
//             });
//             fetchBakerData()
//           },
//           (error) => {
//             console.log(error);
//           }
//         );
//       } else {
//         alert("Geolocation is not available");
//       }
//     };

//     getLocation();
//   }, []);

//   useEffect(() => {
//     fetchBakerData();
//   }, []);

//   useEffect(() => {
//     const filteredBakers = bakers.filter((baker) => {
//       return baker.name.toLowerCase().includes(searchQuery.toLowerCase());
//     });
//     setFilteredBakers(filteredBakers);
//   }, [searchQuery, bakers]);

//   return (
//     <main className="flex flex-col items-center justify-between min-h-screen p-8 bg-[white]">
//        <h1 className="text-4xl font-bold text-gray-800 mb-4">Cakerella</h1>
//       <h2 className="text-2xl font-bold text-gray-800 mb-4">Bake the world a better place</h2>
//       <h3 className="text-xl font-bold text-gray-800 mb-4">Bakers</h3>
//       <input
//         type="text"
//         placeholder="Search for a baker"
//         className="border border-gray-400 rounded-md p-2 w-full text-black mb-4"
//         value={searchQuery}
//         onChange={handleSearch}
//       /> 
//       <div className="grid gap-4 md:grid-cols-3">
//         {filteredBakers.map((baker) => (
//           <BakersCard
//             key={baker.place_id}
//             name={baker.name}
//             business_status={baker.status}
//             rating={baker.rating}
//             user_ratings_total={baker.user_ratings_total}
//             formatted_address={baker.formatted_address}
//             opening_hours={baker.opening_hours}
        
//           />
//         ))}
//       </div> 
//        {nextPageToken && (
//         <button
//           onClick={handleLoadMore}
//           className="my-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//         >
//           Load More
//         </button>
//       )} 
//     </main>
//   );
// }

// export default Bakers;




// 'use client'
// import { useState, useEffect } from "react";
// import BakersCard from "../components/BakersCard";

// function Bakers() {
//   const [bakers, setBakers] = useState<any[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [searchQuery, setSearchQuery] = useState<string>("");
//   const [filteredBakers, setFilteredBakers] = useState<any[]>([]);
//   const [nextPageToken, setNextPageToken] = useState<string | null>(null);
//   const [userLocation, setUserLocation] = useState<{ latitude: number; longitude: number } | null>(null);
//   const [userLocationFetched, setUserLocationFetched] = useState<boolean>(false);

//   const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setSearchQuery(e.target.value);
//   };

//   const pageUrl = "https://bakeryserver.vercel.app/api/maps/place";

//   const fetchBakerData = async (pageToken: string | null = null) => {
//     setLoading(true);
//     try {
//       let url = `${pageUrl}?radius=10000`;

//       if (userLocation) {
//         url = `${url}&latitude=${userLocation.latitude}&longitude=${userLocation.longitude}`;
//       }

//       if (pageToken) {
//         url = `${url}&pagetoken=${pageToken}`;
//       }

//       console.log(url);

//       const res = await fetch(url);
//       const data = await res.json();
//       if (data.results) {
//         if (!pageToken) {
//           setBakers(data.results);
//         } else {
//           setBakers((prevBakers) => [...prevBakers, ...data.results]);
//         }

//         setNextPageToken(data.next_page_token || null);
//       }
//     } catch (err) {
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleLoadMore = () => {
//     if (nextPageToken) {
//       fetchBakerData(nextPageToken);
//     }
//   };

//   useEffect(() => {
//     const getLocation = () => {
//       if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(
//           (position) => {
//             setUserLocation({
//               latitude: position.coords.latitude,
//               longitude: position.coords.longitude,
//             });
//             setUserLocationFetched(true);
//           },
//           (error) => {
//             console.log(error);
//           }
//         );
//       } else {
//         alert("Geolocation is not available");
//       }
//     };

//     getLocation();
//   }, []);

//   useEffect(() => {
//     if (userLocationFetched) {
//       fetchBakerData();
//     }
//   }, [userLocationFetched]);

//   useEffect(() => {
//     const filteredBakers = bakers.filter((baker) => {
//       return baker.name.toLowerCase().includes(searchQuery.toLowerCase());
//     });
//     setFilteredBakers(filteredBakers);
//   }, [searchQuery, bakers]);

  // return (
  //   <main className="flex flex-col items-center justify-between min-h-screen p-8 bg-[white]">
  //     <h1 className="text-4xl font-bold text-gray-800 mb-4">Cakerella</h1>
  //     <h2 className="text-2xl font-bold text-gray-800 mb-4">Bake the world a better place</h2>
  //     <h3 className="text-xl font-bold text-gray-800 mb-4">Bakers</h3>
  //     <input
  //       type="text"
  //       placeholder="Search for a baker"
  //       className="border border-gray-400 rounded-md p-2 w-full text-black mb-4"
  //       value={searchQuery}
  //       onChange={handleSearch}
  //     />
  //     <div className="grid gap-4 md:grid-cols-3">
  //       {filteredBakers.map((baker) => (
  //         <BakersCard
  //           key={baker.place_id}
  //           name={baker.name}
  //           business_status={baker.status}
  //           rating={baker.rating}
  //           user_ratings_total={baker.user_ratings_total}
  //           formatted_address={baker.formatted_address}
  //           opening_hours={baker.opening_hours}
  //         />
  //       ))}
  //     </div>
  //     {nextPageToken && (
  //       <button
  //         onClick={handleLoadMore}
  //         className="my-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
  //       >
  //         Load More
  //       </button>
  //     )}
  //   </main>
  // );
// }

// export default Bakers;




'use client'
import React, { useState, useEffect } from "react";
import axios from "axios";
import BakersCard from "../components/BakersCard";

// import { AiOutlineSearch } from "react-icons/ai";

interface BakerProps {
  handleDetails: (place_id: string) => void;
}

const Bakers: React.FC<BakerProps> = ({ handleDetails }) => {
  const [bakers, setBakers] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [nextTokens, setNextTokens] = useState<any[]>([]);
  const [nextState, setNextState] = useState<boolean>(false);
  const [pageUrl] = useState<string[]>([
    `https://bakeryserver.vercel.app/api/maps/place?latitude=6.468137&longitude=3.638487&radius=100000`,
    `https://bakeryserver.vercel.app/api/maps/place/next?pagetoken=`,
  ]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [filteredBakers, setFilteredBakers] = useState<any[]>([]);
  const [latitude, setLatitude] = useState<number>(0);
  const [longitude, setLongitude] = useState<number>(0);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const previousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  useEffect(() => {
    const filteredBakers = bakers.filter((baker) =>
      baker.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredBakers(filteredBakers);
  }, [searchQuery, bakers]);

  useEffect(() => {
    const fetchData = async () => {
      let pageToCall: string | undefined;
      if (currentPage === 1) {
        setLoading(true);
        try {
          const res = await axios.get(pageUrl[0]);
          setBakers(res.data.results);
          if (res.data.next_page_token) {
            setNextState(true);
          }
          const nextPage = { page: 2, token: res.data.next_page_token };
          setNextTokens([...nextTokens, nextPage]);
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      } else if (currentPage > 1) {
        nextTokens.forEach((page) => {
          if (page.page === currentPage) {
            pageToCall = page.token;
          }
        });
        setLoading(true);
        try {
          const res = await axios.get(`${pageUrl[1]}${pageToCall}`);
          setBakers(res.data.results);
          if (res.data.next_page_token) {
            const nextPage = {
              page: currentPage + 1,
              token: res.data.next_page_token,
            };
            setNextTokens([...nextTokens, nextPage]);
          } else {
            setNextState(false);
          }
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchData();
  }, [currentPage]);

  useEffect(() => {
    const fetchData = async () => {
      const nearbyBakersUrl = `https://bakeryserver.vercel.app/api/maps/place?latitude=${latitude}&longitude=${longitude}&radius=50000&type=bakers`;

      try {
        const res = await axios.get(nearbyBakersUrl);
        setBakers(res.data.results);
        if (res.data.next_page_token) {
          setNextState(true);
        }
        const nextPage = { page: 2, token: res.data.next_page_token };
        setNextTokens([...nextTokens, nextPage]);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [latitude, longitude]);

  useEffect(() => {
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
          },
          (error) => {
            console.log(error);
          }
        );
      } else {
        alert("Geolocation is not available");
      }
    };

    getLocation();
  }, []);

  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-8 bg-[white]">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Bakers</h2>
      <input
        type="text"
        placeholder="Search for a baker"
        className="border border-gray-400 rounded-md p-2 w-full text-black mb-4"
        value={searchQuery}
        onChange={handleSearch}
      />
      <div className="grid gap-4 md:grid-cols-3">
        {loading ? (
          <div className="loader">Loading...</div>
        ) : filteredBakers.length === 0 ? (
          <p className="text-black">No bakers found</p>
        ) : (
                    filteredBakers.map((baker) => (
            <BakersCard
              key={baker.place_id}
              name={baker.name}
              business_status={baker.status}
              rating={baker.rating}
              user_ratings_total={baker.user_ratings_total}
              formatted_address={baker.formatted_address}
              opening_hours={baker.opening_hours}
            />
          ))
        )}
      </div>
      {nextState && (
        <button
          onClick={nextPage}
          disabled={!nextState}
          className="my-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Next
        </button>
      )}
      <button
        onClick={previousPage}
        disabled={currentPage === 1}
        className="my-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Prev
      </button>
    </main>
  );
};

export default Bakers;