import faceid from "/face-id.svg"
import usercircle from "/user-circle.svg"
import house from "/house.svg"

export function MoreInfo() {

    return (
        <>
            <aside class="aside">
                <ul class="more-info">
                    <li>
                        <ul class="more-info-details">
                            <li class="more-info-icon">
                                <img src={faceid} alt="" />
                            </li>
                            <li class="more-info-texts">
                                <header>SANCTION + SIP found</header>
                                <section>
                                    Lorem ipsum dolor sit amet consectetur. Est porttitor sapien in non vestibulum. Ullamcorper tincidunt at tristique blandit scelerisque senectus sit tellus.
                                </section>
                                <footer>11 Apr 2023 12:02PM - Source name</footer>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <ul class="more-info-details">
                            <li class="more-info-icon">
                                <img src={usercircle} alt="" />
                            </li>
                            <li class="more-info-texts">
                                <header>SSN update</header>
                                <section>Lorem ipsum dolor sit amet consectetur.</section>
                                <footer>11 Apr 2023 12:02PM - Source name</footer>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <ul class="more-info-details">
                            <li class="more-info-icon">
                                <img src={usercircle} alt="" />
                            </li>
                            <li class="more-info-texts">
                                <header>New address</header>
                                <section>Lorem ipsum dolor sit amet consectetur.</section>
                                <footer>11 Apr 2023 12:02PM - Source name</footer>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <ul class="more-info-details">
                            <li class="more-info-icon">
                                <img src={house} alt="" />
                            </li>
                            <li class="more-info-texts">
                                <header>IKEA - new company</header>
                                <section>
                                    Ullamcorper tincidunt at tristique blandit scelerisque senectus sit tellus.
                                </section>
                                <footer>11 Apr 2023 12:02PM - Source name</footer>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <ul class="more-info-details">
                            <li class="more-info-icon">
                                <img src={faceid} alt="" />
                            </li>
                            <li class="more-info-texts">
                                <header>Screening monitor enabled</header>
                                <section>
                                    Lorem ipsum dolor sit amet consectetur. Est porttitor sapien in non vestibulum. Ullamcorper tincidunt at tristique blandit scelerisque senectus sit tellus.
                                </section>
                                <footer>11 Apr 2023 12:02PM - Source name</footer>
                            </li>
                        </ul>
                    </li>
                </ul>
            </aside>

        </>
    )
}