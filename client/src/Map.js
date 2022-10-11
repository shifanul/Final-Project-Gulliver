//MAPPING FUNCTIONALITY
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";

const Map = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  return (
    isLoaded && (
      <GoogleMap
        zoom={15}
        center={{ lat: 45.54274810082991, lng: -73.60613662655523 }}
        mapContainerStyle={{ width: "1650px", height: "500px" }}
      >
        <MarkerF
          position={{ lat: 45.54274810082991, lng: -73.60613662655523 }}
        />
      </GoogleMap>
    )
  );
};

export default Map;
