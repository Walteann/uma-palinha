import { Link } from "react-router-dom";


export const Welcome = () => {
    return (
        <div>
           
            <h1>Welcome</h1>
            <Link to="/listener">
                ir Para Home
            </Link>
        </div>
    );
};
