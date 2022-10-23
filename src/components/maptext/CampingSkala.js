import { FormattedMessage } from "react-intl";

function CampingSkala () {
    return (
        <div>
            <h4>
                <FormattedMessage
                    id = "experience.maps.camping.skala"
                    defaultMessage="NaturPlac na Škali"
                />
            </h4>
            <a href="http://www.naturavantura.com/" target="_blank" rel="noreferrer">
                <FormattedMessage
                    id = "experience.maps.camping.skala.link"
                    defaultMessage="http://www.naturavantura.com/sl"
                />
            </a>
        </div>
    )
}

export default CampingSkala; 