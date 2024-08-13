import { Link } from "react-router-dom";
import user from "../../public/user.svg"


export function HeaderUserInfo() {

    return (
        <>
            <ul>
                <li>
                    <a href="" className="back">

                    </a>
                </li>
                <li><div className="v-spacer"></div></li>
                <li>
                    <div className="user-name">
                        <img src={user} alt="user icon" />
                        <span>Alia Bhatt</span>
                    </div>
                </li>
                <li><div className="updates">4 updates</div></li>
            </ul>
        </>
    )
}