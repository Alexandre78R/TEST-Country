import { useEffect } from "react";
import { useRouter } from "next/router";
import { COUNTRY } from "@/requetes/queries/country.queries";
import { useLazyQuery } from "@apollo/client";

export default function viewCountry () {
    const router = useRouter();
    const [getCountry, { data }] = useLazyQuery(COUNTRY);

    useEffect(() => {
      if (router.query.code) {
        getCountry({
          variables: {
            code: router.query.code as string,
          },
        });
      }
    }, [router.query.code]);
    
    return (
        <div className="viewCountry-container">
            <div className="viewCountry-country">
                <span role="img" aria-label="Flag">
                  {data?.country?.emoji}
                </span>
                <p>Name : {data?.country?.name} ({data?.country?.code})</p>
                <p>Continent : {data?.country?.continent?.name}</p>
            </div>
        </div>
    );
}