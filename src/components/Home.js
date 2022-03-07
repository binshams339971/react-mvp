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
        },
    ];
    return (
        <div className="container" id="content">
            {/* <Product /> */}
            {category.map((cat) =>
                <Product name={cat.name} key={cat.id} />
            )}
        </div>

    );
}

export default Home;