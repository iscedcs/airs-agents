"use client";
import {
  APIProvider,
  AdvancedMarker,
  InfoWindow,
  Map,
  useAdvancedMarkerRef,
} from "@vis.gl/react-google-maps";
import { useState } from "react";

// Define the type for tracker
interface Tracker {
  lat: number;
  lon: number;
}

export default function MapView({
  vehicle,
  tracker,
}: {
  vehicle?: IVehicleSummary;
  tracker: Tracker;
}) {
  const [position] = useState<google.maps.LatLngLiteral>({
    lat: tracker?.lat,
    lng: tracker?.lon,
  });

  const [markerRef, marker] = useAdvancedMarkerRef();
  const [infowindowOpen, setInfowindowOpen] = useState(true);

  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}>
      <Map
        className="h-[85svh] w-full overflow-clip rounded-2xl border"
        zoom={18}
        center={position}
        gestureHandling={"greedy"}
        onClick={() => setInfowindowOpen(true)}
        mapId={"YUTGTGT"}
      >
        <AdvancedMarker
          ref={markerRef}
          position={position}
          title={"AdvancedMarker that opens an Infowindow when clicked."}
        >
          <div className="text-2xl">🚗</div>
        </AdvancedMarker>

        {infowindowOpen && (
          <InfoWindow
            anchor={marker}
            maxWidth={300}
            onCloseClick={() => setInfowindowOpen(false)}
          >
            <div className="flex flex-col px-2">
              <div className="flex justify-between gap-2">
                <div className="font-bold">Plate Number:</div>{" "}
                <div className="">{vehicle?.plate_number}</div>
              </div>
              <div className="flex justify-between gap-2">
                <div className="font-bold">Vehicle Owner:</div>{" "}
                <div className="">{vehicle?.owner.name}</div>
              </div>
              <div className="flex justify-between gap-2">
                <div className="font-bold">Category:</div>{" "}
                <div className="uppercase">
                  {vehicle?.category.split("_").join(" ")}
                </div>
              </div>
            </div>
          </InfoWindow>
        )}
      </Map>
    </APIProvider>
  );
}
