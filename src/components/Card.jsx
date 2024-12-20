import { useEffect, useState }  from "react"
import Heart from "../components/Heart"
import { Link } from "react-router-dom"

function Card({ title, body, href }) {
    const [likes, setLikes] = useState();
    const [text, settext]= useState();

    useEffect(() => {
        async function fetchLikes() {
            const response = await fetch("https://www.random.org/integers/?num=1&min=1&max=5&col=1&base=10&format=plain&rnd=new");
            const text = await response.text();
            setLikes(text);
        }

        fetchLikes();
    }, []);

    return (
        <article className="card rounded shadow-sm">
            <Link className="nav-link" to={`place/${text}`}>
                <img
                    src="https://cotidiano.mx/wp-content/uploads/2022/10/PORTADA-LA-PERLA.jpg"
                    className="card-img-top cursor-pointer object-fit-cover w-auto"
                    style={{ "height": "12rem" }}
                    alt="..."
                />
            </Link>
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                    Ubicacion del lugar
                </p>
            </div>
            <div className="p-2">
                <Heart/>
                <span>{parseInt(text) > 1 ? `Les gusta a ${text} personas` : `Le gusta a ${text} persona`}</span>
            </div>
        </article>
    );
}

export default Card;