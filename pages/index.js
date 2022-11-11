import React from "react";
import config from "../config.json";
import Menu from "../src/components/Menu";
import Timeline from "../src/components/Timeline";
import Header from "../src/components/Header";
import Favorites from "../src/components/Favorites";


function HomePage() {
    const [valorDoFiltro, setValorDoFiltro ] = React.useState("");
    return (
        <>
            <div>
                <Menu valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro} />
                <Header banner={config.banner} githubPhoto={config.github} />
                <Timeline  searchValue={valorDoFiltro} playlists={config.playlists} />
                <Favorites favorites={config.favorites}/>
            </div>
        </>
        
    );
}

export default HomePage