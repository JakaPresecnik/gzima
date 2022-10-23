import { FormattedMessage } from "react-intl";

function Fontanapiva () {
    return (
        <div>
            <h3>
                <FormattedMessage
                    id = "experience.map.fontanapiva"
                    defaultMessage="Beer fountain"
                />
            </h3>
            <p>
                <FormattedMessage
                    id = "experience.map.fontanapiva.text"
                    defaultMessage="The Zelena Zlato beer fountain is a tribute to the hop-growing heritage of the Lower Savinjska Valley and Žalec, which is the center of hop-growing in our country. It is also the first beer fountain in the world."
                />
            </p>
            <a href="https://www.beerfountain.eu/" target="_blank" rel="noreferrer">
                <FormattedMessage
                    id = "experience.map.fontanapiva.link"
                    defaultMessage="https://www.beerfountain.eu/"
                />
            </a>
        </div>
    )
}

export default Fontanapiva;  