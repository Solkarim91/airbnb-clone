import { useState } from "react";
import { Map, Marker, Popup } from "react-map-gl";
import getCenter from "geolib/es/getCenter";
import { IMyMapProps } from "../types/types";

export const MyMap = ({ searchResults }: IMyMapProps) => {
  // Transform the 'searchResults' prop into
  // { latitude: 52, longitude: 13.772 } object
  const coordinates = searchResults.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));

  // The latitude and longitude of the center of the
  // 'searchResults' locations coordinates
  const center = getCenter(coordinates);

  const [viewstate, setViewstate] = useState({
    longitude: center ? center.longitude : -122.4376,
    latitude: center ? center.latitude : 37.7577,
    zoom: 11,
  });

  return (
    <div>
      <Map
        {...viewstate}
        style={{ width: "100%", height: "100%" }}
        mapStyle="mapbox://styles/solkarim91/clcaoe4o0000814tfpa01vflg"
        mapboxAccessToken={process.env.mapbox_key}
        onMove={(nextViewstate) => setViewstate(nextViewstate.viewState)}
      >
        {searchResults.map((result) => (
          <div key={result.long}>
            <Marker
              longitude={result.long}
              latitude={result.lat}
              anchor="bottom"
              offset={[-20, -10]}
            >
              <p>📌</p>
            </Marker>
          </div>
        ))}
        ;
      </Map>
    </div>
  );
};
