import React from "react";
import '../App.css'
import map from '../assets/map.png'
class NotFound extends React.Component {


    render() {

        return (
            <div className={"fof"}>

                <table style={{width: "100%"}}>
                    <tbody>
                    <tr>
                        <td>
                            <div style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
                                <div style={{fontSize: "20px", color: "lightgray"}}>404: Not Found</div>
                                <div style={{fontSize: "50px", fontWeight: "bold"}}>Oops!</div>
                                <div style={{fontSize: "30px", fontWeight: "bold"}}>Are we on the right place?</div>
                            </div>
                        </td>
                        <td style={{width: "50%"}}>
                            <img src={map} className={"map_img"} alt="Map"/>
                        </td>
                    </tr>
                    </tbody>
                </table>


            </div>

        )
    }
}

export default NotFound