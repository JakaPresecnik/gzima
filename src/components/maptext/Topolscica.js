import { FormattedMessage } from "react-intl";

function Topolscica () {
    return (
        <div>
            <h3>
                <FormattedMessage
                    id = "experience.map.topolscica"
                    defaultMessage="Terme Topolšica"
                />
            </h3>
            <p>
                <FormattedMessage
                    id = "experience.map.topolscica.text"
                    defaultMessage="Terme Topolšica, away from the hustle and bustle of the city and the wild roads, welcomes its guests in the embrace of mountain air and serene silence. The beneficial climate provides healing effects and many sunny days."
                />
            </p>
            <a href="https://www.terme-topolsica.si/" target="_blank" rel="noreferrer">
                <FormattedMessage
                    id = "experience.map.topolscica.link"
                    defaultMessage="https://www.terme-topolsica.si/"
                />
            </a>
        </div>
    )
}

export default Topolscica; 