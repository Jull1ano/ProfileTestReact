import settings from "/settings.svg"

export function HeaderUserDetails() {

    return (
        <>
            <ul class="header-user-details">
            <li class="card-top">
                <div class="top-info">Date of birth</div>
                <div class="bottom-info">1975-01-01</div>
            </li>
            <li><div class="v-spacer75"></div></li>
            <li class="card-top">
                <div class="top-info">SSN</div>
                <div class="bottom-info">19221332212212</div>
            </li>
            <li><div class="v-spacer75"></div></li>
            <li class="card-top">
                <div class="top-info">Companies</div>
                <div class="bottom-info">4</div>
            </li>
            <li><div class="v-spacer75"></div></li>
            <li class="card-top">
                <div class="top-info">ID Control</div>
                <div class="bottom-info">Partial match on name and date of birth</div>
            </li>
            <li><div class="v-spacer75"></div></li>
            <li class="card-top">
                <div class="top-info">Screening</div>
                <div class="bottom-info">Sanction + SIP found</div>
            </li>
            <li><div class="v-spacer75"></div></li>
            <li class="card-screen">
                <div class="top-info">Screening monitor</div>
                <div class="bottom-info">Active</div>
            </li>
            <li class="card-top">
                <a href="#" class="settings">
                    <img src={settings} alt="" />
                </a>
            </li>
        </ul>
            
        </>
    )
}