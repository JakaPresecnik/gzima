import { FormattedMessage } from "react-intl";

function CampingMenina () {
    return (
        <div>
            <h4>
                <FormattedMessage
                    id = "experience.maps.camping.menina"
                    defaultMessage="Camp Menina"
                />
            </h4>
            <a href="https://www.campingmenina.com/" target="_blank" rel="noreferrer">
                <FormattedMessage
                    id = "experience.maps.camping.menina.link"
                    defaultMessage=""
                />
            </a>
        </div>
    )
}

export default CampingMenina; 