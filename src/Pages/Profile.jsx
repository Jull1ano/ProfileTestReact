import { Link } from "react-router-dom"
import dotsEdit from "/dots-edit.svg"
import save from "/save.svg"
import edit from "/edit.svg"

export function Profile() {

    return (
        <>
            <section class="profile">
                <header class="profile-header">
                    <div class="profile-header-left">
                        <img src="../public/user-square.svg" alt="User icon" />Profile
                    </div>
                    <div class="profile-header-right">                       
                        <Link to="/Edit" className="edit-ico" title="Save" id="submit">
                            <img src={edit} alt="Save" title="Save" />
                        </Link>  
                        <Link to="/" className="more-ico">
                            <img src={dotsEdit} alt="More Options" title="More Options" />
                        </Link>
                    </div>
                </header>
                <section class="cards">
                    <ul>
                        <li class="card4">
                            <div class="top-card">First name</div>
                            <div class="main-info-card">Alia</div>
                            <div class="bottom-card">Self-declaration</div>
                        </li>
                        <li class="card4">
                            <div class="top-card">Last name</div>
                            <div class="main-info-card">Bhatt</div>
                            <div class="bottom-card">Self-declaration</div>
                        </li>
                        <li class="card4">
                            <div class="top-card">Date of birth</div>
                            <div class="main-info-card">1975-01-01</div>
                            <div class="bottom-card">Manual</div>
                        </li>
                        <li class="card4">
                            <div class="top-card">SSN</div>
                            <div class="main-info-card">19221332212212</div>
                            <div class="bottom-card">Manual input</div>
                        </li>
                        <li class="card2">
                            <div class="top-card">Email 1</div>
                            <div class="main-info-card">aliabhatt@microsoft.com</div>
                            <div class="bottom-card">Self-declaration</div>
                        </li>
                        <li class="card2">
                            <div class="top-card">Email 2</div>
                            <div class="main-info-card">aliabhatt@ikea.com</div>
                            <div class="bottom-card">Self-declaration</div>
                        </li>
                        <li class="card3">
                            <div class="top-card">Phone</div>
                            <div class="main-info-card">+22 299 229 222</div>
                            <div class="bottom-card">Self-declaration</div>
                        </li>
                        <li class="card3">
                            <div class="top-card">Nationality</div>
                            <div class="main-info-card">Norwegian</div>
                            <div class="bottom-card">Self-declaration</div>
                        </li>
                        <li class="card3">
                            <div class="top-card">Nationality 2</div>
                            <div class="main-info-card">German</div>
                            <div class="bottom-card">Self-declaration</div>
                        </li>
                    </ul>
                </section>
            </section>
        </>
    )
}