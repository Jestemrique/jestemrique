import { useEffect, useState } from "react";

const LAST_FM_API_KEY = import.meta.env.VITE_LASTFM_API_KEY;

const LastFmBand = ({ band }) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!band) return;
        setLoading(true);
        setError(null);

        const fetchData = async () => {
            try {
                const res = await fetch(
                    `https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&api_key=${LAST_FM_API_KEY}&artist=${encodeURIComponent(
                        band
                    )}&format=json`
                );
                const json = await res.json();
                setData(json);
            } catch (err) {
                setError("No external info for band...");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [band]);

    if (loading) return <div>Loading Last.fm info...</div>;
    if (error) return <div>{error}</div>;

    if (!data || !data.artist) {
        return <div>No hay información disponible en Last.fm para esta banda.</div>;
    }

    const artist = data.artist;
    const listeners = artist.stats?.listeners || null;
    const playcount = artist.stats?.playcount || null;
    const bio = artist.bio?.summary || null;
    const images = artist.image || [];
    const lastImage = images.length > 0 ? images[images.length - 1]['#text'] : null;
    const hasImage = lastImage && lastImage !== "";

    return (
        <div>
            <h3>Last.fm info:</h3>
            <div>
                <strong>Descripción:</strong>{" "}
                {bio ? (
                    <span dangerouslySetInnerHTML={{ __html: bio }} />
                ) : (
                    <span style={{ color: "gray" }}>No hay información disponible en Last.fm</span>
                )}
            </div>
        </div>
    );
};


export default LastFmBand;