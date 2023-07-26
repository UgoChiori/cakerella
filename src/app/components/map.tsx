// import {
//     GoogleMap,
//     useLoadScript,
// } from "@react-google-maps/api";

// // const libraries = ["places"];

// const mapContainerStyle = {
//     width: "100vw",
//     height: "100vh",
// };

// const options = {
//     disableDefaultUI: true,
//     zoomControl: true,
// };


// const currentLocation = {
//     lat: 40.730610,
//     lng: -73.935242,
// };

// const searchLngLat = {
//     lat: 40.730610,
//     lng: -73.935242,
// };

// const selectedPlace = {
//     lat: 40.730610,
//     lng: -73.935242,
// };




// const Map = () => {
//     const { isLoaded } = useLoadScript({
//         googleMapsApiKey: "AIzaSyBQtP39VcK_fjHPezApT6C1jHn2rkU3Frw",
//        });

//     if (!isLoaded) return "Loading...";

//     const center = {
//         lat: 40.730610,
//         lng: -73.935242,
//     };




//     return (
//         <div 
//             style={{ 
//             height: "100vh", 
//             width: "100%",
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             gap: "1rem",
//             }}>
//                 <GoogleMap
//                 zoom={currentLocation || selectedPlace ? 15 : 10}
//                 center={currentLocation || searchLngLat || center}
//                 mapContainerStyle={{ width: "100%", height: "100%" }}
                
//                 />
                    
                
//             </div>
//     )
// }

// export default Map;

