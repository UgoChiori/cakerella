

'use client'
import { useState, useEffect } from "react";
import BakersCard from "../components/BakersCard";

function Bakers() {
  const [bakers, setBakers] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filteredBakers, setFilteredBakers] = useState<any[]>([]);
  const [nextPageToken, setNextPageToken] = useState<string | null>(null);
  const [userLocation, setUserLocation] = useState<{ latitude: number; longitude: number } | null>(null);
  const [userLocationFetched, setUserLocationFetched] = useState<boolean>(false);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const pageUrl = "https://bakeryserver.vercel.app/api/maps/place";

  const fetchBakerData = async (pageToken: string | null = null) => {
    setLoading(true);
    try {
      let url = `${pageUrl}?radius=10000`;

      if (userLocation) {
        url = `${url}&latitude=${userLocation.latitude}&longitude=${userLocation.longitude}`;
      }

      if (pageToken) {
        url = `${url}&pagetoken=${pageToken}`;
      }

      console.log(url);

      const res = await fetch(url);
      const data = await res.json();
      if (data.results) {
        if (!pageToken) {
          setBakers(data.results);
        } else {
          setBakers((prevBakers) => [...prevBakers, ...data.results]);
        }

        setNextPageToken(data.next_page_token || null);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleLoadMore = () => {
    if (nextPageToken) {
      fetchBakerData(nextPageToken);
    }
  };

  useEffect(() => {
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setUserLocation({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            });
            setUserLocationFetched(true);
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

  useEffect(() => {
    if (userLocationFetched) {
      fetchBakerData();
    }
  }, [userLocationFetched]);

  useEffect(() => {
    const filteredBakers = bakers.filter((baker) => {
      return baker.name.toLowerCase().includes(searchQuery.toLowerCase());
    });
    setFilteredBakers(filteredBakers);
  }, [searchQuery, bakers]);

  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-8 bg-[white]">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Cakerella</h1>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Bake the world a better place</h2>
      <h3 className="text-xl font-bold text-gray-800 mb-4">Bakers</h3>
      <input
        type="text"
        placeholder="Search for a baker"
        className="border border-gray-400 rounded-md p-2 w-full text-black mb-4"
        value={searchQuery}
        onChange={handleSearch}
      />
      <div className="grid gap-4 md:grid-cols-3">
        {filteredBakers.map((baker) => (
          <BakersCard
            key={baker.place_id}
            name={baker.name}
            business_status={baker.status}
            rating={baker.rating}
            user_ratings_total={baker.user_ratings_total}
            formatted_address={baker.formatted_address}
            opening_hours={baker.opening_hours}
          />
        ))}
      </div>
      {nextPageToken && (
        <button
          onClick={handleLoadMore}
          className="my-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Load More
        </button>
      )}
    </main>
  );
}

export default Bakers;



