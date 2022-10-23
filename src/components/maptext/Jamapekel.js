import { FormattedMessage } from "react-intl";

function Jamapekel () {
    return (
        <div>
            <h3>
                <FormattedMessage
                    id = "experience.map.jamapekel"
                    defaultMessage="Cave of Hell"
                />
            </h3>
            <p>
                <FormattedMessage
                    id = "experience.map.jamapekel.text"
                    defaultMessage="Walk through the magical karst cave, full of interesting stalactites, which conjure up a series of interesting images in our eyes with a bit of imagination. Upon entering the cave, an image of the devil is revealed above the entrance."
                />
            </p>
            <a href="http://www.td-sempeter.si/" target="_blank" rel="noreferrer">
                <FormattedMessage
                    id = "experience.map.jamapekel.link"
                    defaultMessage="http://www.td-sempeter.si/"
                />
            </a>
        </div>
    )
}

export default Jamapekel; 