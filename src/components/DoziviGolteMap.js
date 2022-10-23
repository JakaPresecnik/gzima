import { FormattedMessage } from "react-intl";
import CampingLjubno from "./maptext/CampingLjubno";
import CampingMenina from "./maptext/CampingMenina";
import CampingMozirje from "./maptext/CampingMozirje";
import CampingSkala from "./maptext/CampingSkala";
import CampingVelenje from "./maptext/CampingVelenje";
import Celje from "./maptext/Celje";
import Fontanapiva from "./maptext/Fontanapiva";
import Grom from "./maptext/Grom";
import Jamapekel from "./maptext/Jamapekel";
import KocaSmrekovec from "./maptext/KocaSmrekovec";
import Logarska from "./maptext/Logarska";
import MozirskiGaj from "./maptext/Mozirskigaj";
import Nekropola from "./maptext/Nekropola";
import Rinka from "./maptext/Rinka";
import Rudnik from "./maptext/Rudnik";
import Savinja from "./maptext/Savinja";
import Sneznajama from "./maptext/Sneznajama";
import Topolscica from "./maptext/Topolscica";
import Velenje from "./maptext/Velenje";
import Zijalka from "./maptext/Zijalka";
import KocaSleme from "./maptext/KocaSleme";
import KocaFarbanca from "./maptext/KocaFarbanca";
import KocaCreta from "./maptext/KocaCreta";
import KocaMenina from "./maptext/KocaMenina";
import KocaGoraoljka from "./maptext/KocaGoraoljka";
import KocaPaskikozjak from "./maptext/KocaPaskikozjak";


function DoziviGolteMap () {
    return (
        <div>
            <h2>
                <FormattedMessage
                    id = "experience.map"
                    defaultMessage="Map"
                />
            </h2>
            <MozirskiGaj />
            <Savinja />
            <Logarska />
            <Rinka />
            <Sneznajama />
            <Fontanapiva />
            <Zijalka />
            <Topolscica />
            <Rudnik />
            <Celje />
            <Jamapekel />
            <Nekropola />
            <Grom />
            <Velenje />
            <h3>
                <FormattedMessage
                    id = "experience.maps.camping"
                    defaultMessage="Camping and glamping sites in the area"
                />
            </h3>
            <CampingMenina />
            <CampingVelenje />
            <CampingLjubno />
            <CampingMozirje />
            <CampingSkala />
            <h3>
                <FormattedMessage
                    id = "experience.maps.cottages"
                    defaultMessage="Mountain huts in the vicinity"
                />
            </h3>
            <KocaSmrekovec />
            <KocaSleme />
            <KocaFarbanca />
            <KocaCreta />
            <KocaMenina />
            <KocaGoraoljka />
            <KocaPaskikozjak />
        </div>
    )
}

export default DoziviGolteMap;