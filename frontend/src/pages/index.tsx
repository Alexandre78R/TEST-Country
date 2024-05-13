import ListCountries from "@/components/ListCountries/ListCountries";
import AddCountry from "@/components/AddCountry/AddCountry";

export default function Home() {
  return (
    <main>
      <AddCountry />
      <ListCountries />
    </main>
  );
}
