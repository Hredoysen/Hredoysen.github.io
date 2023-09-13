import profilePic from "../../assets/hreodoyProfile_Pic-removebg-preview.png";
import { Col, Image, Row, Typography } from "antd";
import "./styles.scss";

const { Title } = Typography;
function Profile() {
  return (
    <div className={"parent"}>
      <section id={"landing"} className={"section-one"}>
        <span className={"text-center"}>
          <Title>Designer, Fullstack Developer and Architecture</Title>
          <Title level={3}>
            I design and code beautifully simple things, and I love what I do.
          </Title>
        </span>
        <Row gutter={24} className={"design"}>
          <Col className={"text-deco left-sec flex flex-col"}>
            <span>designer</span>
            <span className={"text-xl text-gray-500 w-[460px]"}>
              Product designer specializing in UI design and design system
            </span>
          </Col>
          <Col className={"avatar"}>
            <Image
              src={profilePic}
              preview={false}
              alt={"hredoy"}
              style={{ minHeight: "350px", minWidth: "350px" }}
            />
          </Col>
          <Col className={"text-deco right-sec flex flex-col"}>
            <span> &lt;coder&gt;</span>
            <span className={"text-xl text-gray-500 w-[460px]"}>
              Front end developer who writes clean, elegant and efficient Code,
            </span>
          </Col>
        </Row>
      </section>
      <footer>
        <svg
          viewBox="0 -20 700 110"
          width="100%"
          height="110"
          preserveAspectRatio="none"
        >
          <path
            transform="translate(0, -20)"
            d="M0,10 c80,-22 240,0 350,18 c90,17 260,7.5 350,-20 v50 h-700"
            fill="#7E22CE"
          />
          <path
            d="M0,10 c80,-18 230,-12 350,7 c80,13 260,17 350,-5 v100 h-700z"
            fill="white"
          />
        </svg>
      </footer>
    </div>
  );
}

export default Profile;
