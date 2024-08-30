import { MapContainer, TileLayer, useMap, } from 'react-leaflet'
import { useState } from 'react';
import { Marker } from "react-leaflet";
import { Popup } from "react-leaflet";
import 'leaflet/dist/leaflet.css'
import { Icon } from "leaflet";
import camfixed from '../assets/cam-fixed.png';

export default function SettingsMapContainer() {
  const [centerMap, setCenterMap] = useState([10.502307, 107.169205]);
  const [positionMap1, setPositionMap1] = useState([10.502307, 107.169205]);
  const customIcon = new Icon({
		iconUrl: camfixed,
		iconSize: [24, 16]
	});
  const ResizeMap = () => {
    const map = useMap();
    map._onResize();
    return null;
  };
  return (
    <MapContainer
      className="w-full min-h-screen" center={centerMap} zoom={12} scrollWheelZoom={true}>
      <ResizeMap />
      <TileLayer
        className="w-full"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={positionMap1}
        icon={customIcon}
      >
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
}