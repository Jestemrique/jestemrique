import { useEffect, useState } from "react";

const LAST_FM_API_KEY = import.meta.env.VITE_LASTFM_API_KEY;

const LastFmAlbum = ({ band, album }) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!band || !album) return;
        setLoading(true);
        setError(null);

        const fetchData = async () => {
            try {
                const res = await fetch(
                    `https://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=${LAST_FM_API_KEY}&artist=${encodeURIComponent(
                        band
                    )}&album=${encodeURIComponent(album)}&format=json`
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
    }, [band, album]);

    if (loading) return <div>Loading Last.fm info...</div>;
    if (error) return <div>{error}</div>;

    if (!data || !data.album) {
        return <div>No hay información disponible en Last.fm para este álbum.</div>;
    }

    const albumData = data.album;
    const listeners = albumData.listeners || null;
    const playcount = albumData.playcount || null;
    const wiki = albumData.wiki?.summary || null;

    // Imagen segura
    const images = albumData.image || [];
    const lastImage = images.length > 0 ? images[images.length - 1]['#text'] : null;
    const hasImage = lastImage && lastImage !== "";

    // Tracklist
    const tracks = albumData.tracks?.track || [];

    return (
        <div>
            <h3 className="oswald-font is-size-5-mobile is-size-4-tablet mt-4 mb-3">Last.fm info:</h3>
            
            <div class="media">
                <figure class="media-left">
                    <p class="image is-128x128">
                        {hasImage ? (
                            <img src={lastImage} alt={album} style={{ maxWidth: "200px", display: "block" }} />
                        ) : (
                            <span style={{ color: "gray" }}>No hay información disponible en Last.fm</span>
                        )}
                    </p>
                </figure>
                <div class="media-content">
                    <div class="content">



                        <div>

                                    {wiki ? (
                                        <span dangerouslySetInnerHTML={{ __html: wiki }} />
                                    ) : (
                                        <span style={{ color: "gray" }}>No hay información disponible en Last.fm</span>
                                    )}

                        </div>

                        <div>
                            <dl>

                            <dt>
                            <strong>Tracklist:</strong>
                            </dt>
                            <dd>
                            {Array.isArray(tracks) && tracks.length > 0 ? (
                                <ol>
                                    {tracks.map((track) => (
                                        <li key={track.url || track.name}>
                                            {track.name}
                                            {track.duration
                                                ? ` (${Math.floor(track.duration / 60)}:${String(track.duration % 60).padStart(2, '0')})`
                                                : ""}
                                        </li>
                                    ))}
                                </ol>
                            ) : (
                                <span style={{ color: "gray" }}>No hay información disponible en Last.fm</span>
                            )}
                            </dd>

                            </dl>
                        </div>




                        {/* <div>
                            <strong>Tracklist:</strong>
                            {Array.isArray(tracks) && tracks.length > 0 ? (
                                <ol>
                                    {tracks.map((track) => (
                                        <li key={track.url || track.name}>
                                            {track.name}
                                            {track.duration
                                                ? ` (${Math.floor(track.duration / 60)}:${String(track.duration % 60).padStart(2, '0')})`
                                                : ""}
                                        </li>
                                    ))}
                                </ol>
                            ) : (
                                <span style={{ color: "gray" }}>No hay información disponible en Last.fm</span>
                            )}
                        </div> */}
                        

                        


                    </div>
                </div>
                <div class="media-right">
                    <button class="delete"></button>
                </div>
            </div>









        </div>
    );
};

export default LastFmAlbum;












































// import { useEffect, useState } from "react";

// const LAST_FM_API_KEY = import.meta.env.VITE_LASTFM_API_KEY;

// const LastFmAlbum = ({ band, album }) => {
//     const [data, setData] = useState(null);
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         if (!band || !album) return;
//         setLoading(true);
//         setError(null);

//         const fetchData = async () => {
//             try {
//                 const res = await fetch(
//                     `https://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=${LAST_FM_API_KEY}&artist=${encodeURIComponent(
//                         band
//                     )}&album=${encodeURIComponent(album)}&format=json`
//                 );
//                 const json = await res.json();
//                 setData(json);
//             } catch (err) {
//                 setError("No external info for band...");
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchData();
//     }, [band, album]);

//     if (loading) return <div>Loading Last.fm info...</div>;
//     if (error) return <div>{error}</div>;

//     if (!data || !data.album) {
//         return <div>No hay información disponible en Last.fm para este álbum.</div>;
//     }

//     const albumData = data.album;
//     const listeners = albumData.listeners || null;
//     const playcount = albumData.playcount || null;
//     const wiki = albumData.wiki?.summary || null;

//     // Imagen segura
//     const images = albumData.image || [];
//     const lastImage = images.length > 0 ? images[images.length - 1]['#text'] : null;
//     const hasImage = lastImage && lastImage !== "";

//     // Tracklist
//     const tracks = albumData.tracks?.track || [];

//     return (
//         <div>
//             <h3>Last.fm info:</h3>
//             <div>
//                 <strong>Description:</strong>{" "}
//                 {wiki ? (
//                     <span dangerouslySetInnerHTML={{ __html: wiki }} />
//                 ) : (
//                     <span style={{ color: "gray" }}>No hay información disponible en Last.fm</span>
//                 )}
//             </div>
//             <div>
//                 <strong>Imagen:</strong>{" "}
//                 {hasImage ? (
//                     <img src={lastImage} alt={album} style={{ maxWidth: "200px", display: "block" }} />
//                 ) : (
//                     <span style={{ color: "gray" }}>No hay información disponible en Last.fm</span>
//                 )}
//             </div>
//             <div>
//                 <strong>Tracklist:</strong>
//                 {Array.isArray(tracks) && tracks.length > 0 ? (
//                     <ol>
//                         {tracks.map((track) => (
//                             <li key={track.url || track.name}>
//                                 {track.name}
//                                 {track.duration
//                                     ? ` (${Math.floor(track.duration / 60)}:${String(track.duration % 60).padStart(2, '0')})`
//                                     : ""}
//                             </li>
//                         ))}
//                     </ol>
//                 ) : (
//                     <span style={{ color: "gray" }}>No hay información disponible en Last.fm</span>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default LastFmAlbum;

