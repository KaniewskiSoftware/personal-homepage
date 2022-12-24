import { styleIcon } from "./styled";
import { ReactComponent as Github } from "../images/github.svg";
import { ReactComponent as Facebook } from "./icons/facebook.svg";
import { ReactComponent as Linkedin } from "./icons/linkedin.svg";
import { ReactComponent as Instagram } from "./icons/instagram.svg";

export const socials = [
    {
        title: "Github",
        url: "https://github.com/KaniewskiSoftware",
        Icon: styleIcon(Github),
    },
    {
        title: "Facebook",
        url: "https://www.facebook.com/st4rki",
        Icon: styleIcon(Facebook),
    },
    {
        title: "Linkedin",
        url: "",
        Icon: styleIcon(Linkedin),
    },
    {
        title: "Instagram",
        url: "",
        Icon: styleIcon(Instagram),
    }
]