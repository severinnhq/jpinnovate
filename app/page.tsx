import { HeroGeometric } from "@/components/HeroGeometric";
import WorldMap from "@/components/WorldMap";

export default function Home() {
  // Sample data for WorldMap
  const mapDots = [
    {
      start: { lat: 40.7128, lng: -74.0060, label: "New York" }, // New York
      end: { lat: 48.8566, lng: 2.3522, label: "Paris" }, // Paris
    },
    {
      start: { lat: 51.5074, lng: -0.1278, label: "London" }, // London
      end: { lat: 35.6762, lng: 139.6503, label: "Tokyo" }, // Tokyo
    },
    {
      start: { lat: 1.3521, lng: 103.8198, label: "Singapore" }, // Singapore
      end: { lat: -33.8688, lng: 151.2093, label: "Sydney" }, // Sydney
    },
  ];
  
  return (
    <>
      {/* Hero Section */}
      <HeroGeometric
        badge="Global Presence"
        title1="Connecting the World"
        title2="Through Technology"
      />
     
      {/* World Map Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Our Global Network</h2>
        </div>
        {/* Map container at full width */}
        <div className="w-full">
          <WorldMap dots={mapDots} lineColor="#0ea5e9" />
        </div>
      </section>
    </>
  );
}