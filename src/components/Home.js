import '../assets/css/Home.css'
import Product from './Product'
function Home() {
    const category = [
        {
            id: 1,
            name: "Laptop",
        },
        {
            id: 2,
            name: "Smart Phone",
        },
        {
            id: 3,
            name: "TV",
        }
    ];
    return (
        <div className="container" id="content">
            {category.map((cat) =>
                <Product name={cat.name} />
            )}
        </div>

    );
}

export default Home;