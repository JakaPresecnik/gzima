import { FormattedMessage } from "react-intl";

function KocaPaskikozjak () {
    return (
        <div>
            <h4>
                <FormattedMessage
                    id = "experience.maps.cottages.kozjak"
                    defaultMessage="Dom na Paškem Kozjaku"
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

export default KocaPaskikozjak; 