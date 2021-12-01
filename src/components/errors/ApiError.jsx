import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const iconError = {
    color: 'rgba(255, 255, 255, 0.3)'
}

const errorMensagem = {
    color: 'rgba(255, 255, 255, 0.3)',
    fontSize: '16px',
    textAlign: 'center',
    marginTop: '10px'
}

const sectionError = {
    marginTop: '50px'
}

export const ApiError = () => (
    <div style={sectionError}>
        <FontAwesomeIcon icon={faExclamationCircle} style={iconError} size="4x" />
        <h3 style={errorMensagem}>Ocorreu um error no Sistema <br /> Tente novamente mais tarde.</h3>
    </div>
)
