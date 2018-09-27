import React, {Component} from "react";
import { Navbar, NavbarBrand, Jumbotron } from "reactstrap";

class Header extends Component {
    render() {
         return (
             <React.Fragment>
                <Navbar dark >
                <div className="container">
                    <NavbarBrand href="/">Reaasfdgsdvsdv</NavbarBrand>
                </div>
                </Navbar>
                <Jumbotron>
                <div className="container">
                    <div className="row row-header">
                        <div className="col-12 cp-sm-6">
                            <h1> Reaasfdgsdvsdv </h1>
                            <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                        </div>                    
                    </div>
                </div>
                </Jumbotron>
             </React.Fragment>
         );
    }

}

export default Header;