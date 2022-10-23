import { FormattedMessage } from "react-intl";

function CampingMozirje () {
    return (
        <div>
            <h4>
                <FormattedMessage
                    id = "experience.maps.camping.mozirje"
                    defaultMessage="Honey village Skok Mozirje"
                />
            </h4>
            <a href="http://www.apartmajimozirje.si" target="_blank" rel="noreferrer">
                <FormattedMessage
                    id = "experience.maps.camping.mozirje.link"
                    defaultMessage="http://www.apartmajimozirje.si"
                />
            </a>
        </div>
    )
}

export default CampingMozirje; 