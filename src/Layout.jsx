import { Outlet } from "react-router-dom"
import { HeaderUserControls } from "./Components/HeaderUserControls"
import { HeaderUserDetails } from "./Components/HeaderUserDetails"
import { HeaderUserInfo } from "./Components/HeaderUserInfo"
import { MoreInfo } from "./Components/MoreInfo"

export function Layout() {

    return (
        <>
            <header className="header container">
                <ul className="header-site-controls">
                    <li className="header-user-info"><HeaderUserInfo /></li>
                    <li className="header-user-controls"><HeaderUserControls /></li>
                </ul>
                <HeaderUserDetails />
            </header>
            <main className="main container">
                <Outlet />
                <MoreInfo />
            </main>
        </>
    )
}