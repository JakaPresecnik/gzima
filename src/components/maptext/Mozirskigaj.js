import { FormattedMessage } from "react-intl";

function MozirskiGaj () {
    return (
        <div>
            <h3>
                <FormattedMessage
                    id = "experience.map.mozirskigaj"
                    defaultMessage="Mozirski Gaj"
                />
            </h3>
            <p>
                <FormattedMessage
                    id = "experience.map.mozirskigaj.text"
                    defaultMessage="Mozirski gaj is a flower park where you can see flower beds, ethnographic objects, climb the 18-meter observation tower, see wooden sculptures, parrots and much more."
                />
            </p>
            <a href="http://www.mozirskigaj.com/" target="_blank" rel="noreferrer">
                <FormattedMessage
                    id = "experience.map.mozirskigaj.link"
                    defaultMessage="http://www.mozirskigaj.com/"
                />
            </a>
        </div>
    )
}

export default MozirskiGaj;