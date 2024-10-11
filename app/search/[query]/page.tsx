import StatusPage from "@/app/(root)/v/status/[bcid]/page";
import SearchVehicle from "@/components/pages/vehicle/search-vehicle";

export default function SearchPage({ params }: { params: { query: string } }) {
  return (
    <div className="w-full">
      <SearchVehicle id={params.query} />
    </div>
  );
}
