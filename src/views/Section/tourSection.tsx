import "./styles.scss";
import Title from "antd/lib/typography/Title";
import Paragraph from "antd/lib/typography/Paragraph";
import { useRef } from "react";
import Icons from "../../configs/icon.config.tsx";

function Tour() {
  const tourSectionRef = useRef(null);
  return (
    <section ref={tourSectionRef} id={"tour"} className={"parent-two"}>
      <div style={{ height: 1100 }}>
        <div className={"section-another"}>
          <Title style={{ color: "white" }} className={"title"}>
            Hi, I’m Hredoy Sen. Nice to meet you.
          </Title>
          <Paragraph
            style={{ color: "white" }}
            strong={true}
            className={"w-[80%] text-center"}
          >
            Since beginning my journey as a freelance designer over 3 years ago,
            I've done remote work for agencies, consulted for startups, and
            collaborated with talented people to create digital products for
            both business and consumer use. I'm quietly confident, naturally
            curious, and perpetually working on improving my chops one design
            problem at a time.
          </Paragraph>
        </div>
      </div>
      <div className={"pos"}>
        <div className={"part"}>
          <div className={"part-one"}>
            <div className={"avatar-icon"}>{Icons.design}</div>
            <div className={"mb-10"} style={{ height: 130 }}>
              <Title level={3}> Designer</Title>
              <span>
                I value simple content structure, clean design patterns, and
                thoughtful interactions.
              </span>
            </div>
            <div className={"mb-10"}>
              <Title level={5} style={{ color: `#7E22CE` }}>
                Things I enjoy designing:
              </Title>
              <span>UX, UI, Web, Apps, Logos</span>
            </div>
            <Title level={5} style={{ color: `#7E22CE` }}>
              Design Tools:
            </Title>
            <div className={"flex flex-col items-center text-center gap-2"}>
              <span>Affinity Designer</span>
              <span>Figma</span>
              <span>Font Awesome</span>
              <span>Pen & Paper</span>
              <span>Sketch</span>
              <span>Webflow</span>
            </div>
          </div>
          <div className={"part-one"}>
            <div className={"avatar-icon"}>{Icons.design}</div>
            <div className={"mb-10"} style={{ height: 130 }}>
              <Title level={3}> Full Stack Developer</Title>
              <span>
                I like to code things from scratch, and enjoy bringing ideas to
                life in the browser.
              </span>
            </div>
            <div className={"mb-10"}>
              <Title level={5} style={{ color: `#7E22CE` }}>
                Languages I speak:
              </Title>
              <span>HTML, Pug, Slim, CSS, Sass, Git</span>
            </div>
            <Title level={5} style={{ color: `#7E22CE` }}>
              Dev Tools:
            </Title>
            <div className={"flex flex-col items-center text-center gap-2"}>
              <span>Affinity Designer</span>
              <span>Figma</span>
              <span>Font Awesome</span>
              <span>Pen & Paper</span>
              <span>Sketch</span>
              <span>Webflow</span>
            </div>
          </div>
          <div className={"p-10 flex flex-col items-center flex-1"}>
            <div className={"avatar-icon"}>{Icons.design}</div>
            <div className={"mb-10"} style={{ height: 130 }}>
              <Title level={3}>Architecture</Title>
              <span>
                I genuinely care about people, and love helping fellow designers
                work on their craft. Follows the SOLID structure and architect
                project structure.
              </span>
            </div>
            <div className={"mb-10"}>
              <Title level={5} style={{ color: `#7E22CE` }}>
                Experiences I draw from:
              </Title>
              <span>UX/UI, Product design, Freelancing</span>
            </div>
            <Title level={5} style={{ color: `#7E22CE` }}>
              Mentor Stats:
            </Title>
            <div className={"flex flex-col items-center text-center gap-2"}>
              <span>Affinity Designer</span>
              <span>Figma</span>
              <span>Font Awesome</span>
              <span>Pen & Paper</span>
              <span>Sketch</span>
              <span>Webflow</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Tour;
