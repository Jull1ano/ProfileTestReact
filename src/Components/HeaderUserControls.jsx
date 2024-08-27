import { Link } from "react-router-dom";
import plus from "/plus.svg"
import generate from "/download.svg"
import dotshorisontal from "/dots-horizontal.svg"


export function HeaderUserControls() {

    return (
        <>
            <Link to="/Edit" className="plus" title="Edit Profile" alt="new">
                <img src={plus} alt="Edit Profile" />
            </Link>
            <Link to="/" className="generate" title="HomePage" alt="HomePage">
                <img src={generate} alt="generate" />Generate report
            </Link>


            <div class="v-spacer opacity50"></div>
            <Link to="/" className="bluedots"><img src={dotshorisontal} alt="" /></Link>
        </>
    )
}