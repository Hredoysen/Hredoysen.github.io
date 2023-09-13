import "./styles.scss";
import { useRef } from "react";
import Title from "antd/lib/typography/Title";
import Paragraph from "antd/lib/typography/Paragraph";
import Icons from "../../configs/icon.config.tsx";

function Project() {
  const tourSectionRef = useRef(null);
  return (
    <section ref={tourSectionRef} id={"projects"} className={"parent-three"}>
      <Title>My Recent Work</Title>
      <Paragraph className={"text-gray-500 text-xl"}>
        <div className={"flex gap-2"}>
          <span>
            Here are a few past design projects I've worked on. Want to see
            more?
          </span>
          <a className={"flex items-center gap-2 "} href={""}>
            <span> {Icons.mail}</span>Email me.
          </a>
        </div>
      </Paragraph>
    </section>
  );
}

export default Project;
