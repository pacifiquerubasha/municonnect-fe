import React from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";

function SetViewOnClick({ coords }:{
    coords: [number, number]
}) {
    const map = useMap();
    map.setView(coords, map.getZoom());
  
    return null;
  }

const Map = ({
  position,
  zoom,
    name
}: {
  position: [number, number];
  zoom: number;
  name: string
}) => {
  return (
    <MapContainer
      center={position}
      zoom={zoom}
      zoomControl={true}
    //   scrollWheelZoom={false}
      style={{ height: "600px" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          {name} City
        </Popup>
      </Marker>
      <SetViewOnClick coords={position} />
    </MapContainer>
  );
};

export default Map;
