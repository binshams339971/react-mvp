import '../assets/css/Home.css'
import Product from './Product'
import Playlist from './Playlist'
function Home() {
    return (
        <div className="container" id="content">
            <Product />
            <Playlist />
        </div>

    );
}

export default Home;
