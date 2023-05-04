import { Link } from "react-router-dom";
import MarvelComponent from "../../Component/MarvelComponent/MarvelComponent";
const Marvel = () => {
    return(
        <div>
            <h1>Marvel page</h1>
            <Link to="/">Page Home</Link>
            <MarvelComponent />
        </div>
    )
}

export default Marvel;