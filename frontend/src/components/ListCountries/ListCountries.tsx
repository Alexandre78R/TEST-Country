import Country from "../Country/Country";
import { useEffect } from "react";
import { useCountriesQuery, CountriesDocument } from "@/graphql/generated/schema";

export default function ListCountries() {
  const { data } = useCountriesQuery({
    onCompleted(data) {
      console.log("DATA", data);
    },
    onError(error) {
      console.log("ERROR", error);
    },
  });

    useEffect(() => {
      console.log("DATA", data);
    },[data])
  return (
    <div className="countries-container">
      {
        data?.countries.map(country => {
          return (
            <Country key={country.id} country={country} />
          )
        })
      }
    </div>
  );
}