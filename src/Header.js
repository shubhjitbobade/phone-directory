import React from "react";

const Header = function Header() {
    const header = {
        textAlign:'center',
        background:'#000',
        padding:20,
        color:'#fff',
        textTransform:'uppercase'

    }
    return (

        <div style={header}>
            Phone Directory
        </div>
    );
}
// class Header extends Component{
//     render(){
//         return(
//             <div className="header">
//                 Phone Directory
//             </div>
//         )
//     }
// }

export default Header;