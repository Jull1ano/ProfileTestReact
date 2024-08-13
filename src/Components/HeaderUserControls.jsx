import { Link } from "react-router-dom";
import plus from "../../public/plus.svg"
import generate from "../../public/download.svg"


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
            <a href="#" class="bluedots">
                <img src="../public/dots-horizontal.svg" alt="" />
            </a>
        </>
    )
}