import config from "../config.json";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import Timeline from "../src/components/Timeline";
import Header from "../src/components/Header";
import Favorites from "../src/components/Favorites";


function HomePage() {

    return (
        <>
            <CSSReset />
            <div>
                <Menu />
                <Header banner={config.banner}/>
                <Timeline playlists={config.playlists} />
                <Favorites favorites={config.favorites}/>
            </div>
        </>
        
    );
}

export default HomePage