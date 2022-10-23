import { FormattedMessage } from "react-intl";

function KocaGoraoljka () {
    return (
        <div>
            <h4>
                <FormattedMessage
                    id = "experience.maps.cottages.goraoljka"
                    defaultMessage="Planinski dom na Gori Oljki"
                />
            </h4>
            <a href="https://www.pzs.si/koce.php" target="_blank" rel="noreferrer">
                <FormattedMessage
                    id = "experience.maps.cottages.link"
                    defaultMessage="https://www.pzs.si/koce.php"
                />
            </a>
        </div>
    )
}

export default KocaGoraoljka; 