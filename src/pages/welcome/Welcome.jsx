
import './Welcome.scss';
import { useNavigate } from "react-router-dom";

export const Welcome = () => {
    const navigate = useNavigate();
    const onRedirect = () => {
        navigate('/listener')
    }
    return (
        <header className="landing__page">
           
           <section className="landing__page__content">
                <div className="landing__page__content__main">
                    <h1>Iae? quer ouvir uma palinha?</h1>
                    <p>Pesquise e escute trechos de suas musicas favoritas.</p>
                    <button onClick={onRedirect} >Ir para o Player</button>
                </div>
                <div className="landing__page__content__image">
                </div>
           </section>

        </header>
    );
};
