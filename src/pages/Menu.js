import {Link} from "react-router-dom";

export const Menu = () => {
    return (      
        <div>
            <div>Menu</div>        
            <br />
            <Link style={{marginLeft:10}} to="/pages/home"> Home </Link> 
            <Link style={{marginLeft:10}} to="/pages/page1"> Page1Balance </Link>
            <Link style={{marginLeft:10}} to="/pages/page2"> Page2Balance </Link>
            <Link style={{marginLeft:10}} to="/pages/page3"> Page3Todos </Link>
            <Link style={{marginLeft:10}} to="/pages/page4"> Page4Todos </Link>
            <br />
            <br />
            <hr />
        </div>               
    );
} 
