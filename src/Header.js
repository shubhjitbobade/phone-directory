import React from "react";
import './Header.css'

const Header = function Header(Props) {
  
    return (

        <div className="header">
            {Props.heading}
        </div>
    );
}
// class Header extends Component{
//     render(){
//         return(
//             <div className="header">
//                {this.props.heading}
//             </div>
//         )
//     }
// }

export default Header;