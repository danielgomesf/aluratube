import React from "react";
import config from "../config.json";
import Menu from "../src/components/Menu";
import Timeline from "../src/components/Timeline";
import Header from "../src/components/Header";
import Favorites from "../src/components/Favorites";
import { videoService } from "../src/services/videoService";

function HomePage() {
    const service = videoService();
    const [valorDoFiltro, setValorDoFiltro] = React.useState("");
    const [playlists, setPlaylists] = React.useState({});

    
    React.useEffect(() => {
        service.getAllVideos().then((dados) => {
            const novasPlaylists = { ...playlists };
            dados.data.forEach((video) => {
                if (!novasPlaylists[video.playlist]) {
                    novasPlaylists[video.playlist] = [];
                }
                novasPlaylists[video.playlist] = [
                    video,
                    ...novasPlaylists[video.playlist],
                ];
            });
            setPlaylists(novasPlaylists);
        });
    }, []);


    return (
        <>
            <div>
                <Menu
                    valorDoFiltro={valorDoFiltro}
                    setValorDoFiltro={setValorDoFiltro}
                />
                <Header banner={config.banner} githubPhoto={config.github} />
                <Timeline searchValue={valorDoFiltro} playlists={playlists} />
                <Favorites favorites={config.favorites} />
            </div>
        </>
    );
}

export default HomePage;
