import { FormattedMessage } from "react-intl";

function CampingVelenje () {
    return (
        <div>
            <h4>
                <FormattedMessage
                    id = "experience.maps.camping.velenje"
                    defaultMessage="Camping lake Velenje"
                />
            </h4>
            <a href="http://camp-jezero.si/" target="_blank" rel="noreferrer">
                <FormattedMessage
                    id = "experience.maps.camping.velenje.link"
                    defaultMessage="http://camp-jezero.si/"
                />
            </a>
        </div>
    )
}

export default CampingVelenje; 