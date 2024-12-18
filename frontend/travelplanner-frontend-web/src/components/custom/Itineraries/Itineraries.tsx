import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { GeneralProps } from "../types";
import { Bleed } from "@chakra-ui/react";

export default function Itineraries({ api, ...props }: GeneralProps) {
  const height_map = "90vh"
  return (
    <Bleed height={height_map}>
      <MapContainer style={{ height: height_map }} center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </Bleed>
  )
}