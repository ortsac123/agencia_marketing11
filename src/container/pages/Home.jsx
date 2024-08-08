import Header from "components/Header";
import { useSelector } from "react-redux";

function Home(){

    const user = useSelector(state => state.userr)
    
    
    return(
        <header>
            <h1>Redux Toolkit</h1>
            <ul>
                <li>Name: {user.name}</li>
                <li>Username: {user.username}</li>
                <li>Email: {user.email}</li>   
            </ul>
        </header>
    )
}


export default Home;