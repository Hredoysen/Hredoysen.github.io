import { BiPaperPlane, BiLogoGmail } from "react-icons/bi";
import { PiHandshake } from "react-icons/pi";
import { MdOutlineDraw } from "react-icons/md";

const IconLibrary: { [key: string]: JSX.Element } = {
  tourIcon: <BiPaperPlane />,
  handShake: <PiHandshake />,
  design: <MdOutlineDraw />,
  mail: <BiLogoGmail />,
};
const sortedKeys = Object.keys(IconLibrary).sort();

const Icons = sortedKeys.reduce((acc: any, key: any) => {
  acc[key] = IconLibrary[key];
  return acc;
}, {});
export default Icons;
