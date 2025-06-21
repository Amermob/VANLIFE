import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <section className="not-found">
            <h4>Sorry, the page you were looking for was not found.</h4>
            <Link to="../">Return to home</Link>
        </section>
    )
}