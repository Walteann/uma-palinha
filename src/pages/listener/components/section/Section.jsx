import { Outlet } from "react-router";
import { MOCK_MUSIC } from "./Mock";

export const Section = () => {
    return (
        <section>

            {/* <img src={MOCK_MUSIC.results[0].artworkUrl100} alt=""/>
            <img src={MOCK_MUSIC.results[0].artworkUrl200} alt="" />
            <img src={MOCK_MUSIC.results[0].artworkUrl300} alt="" /> */}
            <Outlet />
        </section>
    )
}