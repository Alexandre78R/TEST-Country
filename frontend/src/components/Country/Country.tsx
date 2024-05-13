
type Props = {
    country: {
        code: string,
        continent?: [],
        emoji: string,
        id: number,
        name: string,
    }
};

export default function Country ({ country } : Props) {
    return (
        <div className="country">
            <p>{country.name}</p>
            <p>{country.emoji}</p>
        </div>
    );
}