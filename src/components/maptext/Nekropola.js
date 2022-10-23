import { FormattedMessage } from "react-intl";

function Nekropola () {
    return (
        <div>
            <h3>
                <FormattedMessage
                    id = "experience.map.nekropola"
                    defaultMessage="Roman Necropolis"
                />
            </h3>
            <p>
                <FormattedMessage
                    id = "experience.map.nekropola.text"
                    defaultMessage="In the open-air museum, see the wonderful tombs of the Romans, which are the work of the top masters of that time and are among the most important and best preserved monuments of the Roman era in Slovenia and Central Europe."
                />
            </p>
            <a href="http://www.td-sempeter.si/" target="_blank" rel="noreferrer">
                <FormattedMessage
                    id = "experience.map.nekropola.link"
                    defaultMessage="http://www.td-sempeter.si/"
                />
            </a>
        </div>
    )
}

export default Nekropola; 