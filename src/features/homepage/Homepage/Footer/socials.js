import { styleIcon } from "./styled";
import { ReactComponent as Github } from "../images/github.svg";
import { ReactComponent as Facebook } from "./icons/facebook.svg";
import { ReactComponent as Linkedin } from "./icons/linkedin.svg";

export const socials = [
    {
        title: "Github",
        url: "https://github.com/KaniewskiSoftware",
        Icon: styleIcon(Github),
    },
    {
        title: "Linkedin",
        url: "https://www.linkedin.com/in/KaniewskiSoftware",
        Icon: styleIcon(Linkedin),
    },
    {
        title: "Facebook",
        url: "https://www.facebook.com/st4rki",
        Icon: styleIcon(Facebook),
    },
]