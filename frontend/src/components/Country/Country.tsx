
import Link from "next/link";

type Props = {
    country: {
        code: string,
        continent?: {
            name: string,
            id:number
        } | null,
        emoji: string,
        id: number,
        name: string,
    }
};

export default function Country ({ country } : Props) {
    return (
        <Link href={`/ViewCountry/${country.code}`} className="country">
            <p>{country.name}</p>
            <span role="img" aria-label="Flag">
                {country.emoji}
            </span>
        </Link>
    );
}