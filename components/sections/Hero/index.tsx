import Image from "next/image";
import Styles from "./Styles.module.scss";

export default function Hero() {
  return (
    <article className={Styles.hero}>
      <div className={Styles.item1}>
        <header>
          <h1>
            I am a{" "}
            <span style={{ color: "#C778DD" }}>Full stack developer</span>, a{" "}
            <span style={{ color: "#C778DD" }}>database administrator</span> and
            a photographer
          </h1>
        </header>
        <p className={Styles.crafts}>
          I am a full stack JavaScript developer with 5 years of experience in
          building web and mobile applications. My technical expertise includes
          proficiency in JavaScript, HTML, CSS, and various frameworks such as
          React, Angular, and Node.js. I am passionate about creating dynamic
          and user-friendly web experiences and am always eager to learn new
          technologies. Please take a look at my projects to see some examples
          of my work.
        </p>
        <button className={Styles.button}>Contact me!!</button>
      </div>
      <div>
        <Image src={"/images/group.png"} width={469} height={386} alt="" />
        <p className={Styles.working}>
          Currently working as a Fullstack developer at Andela
        </p>
      </div>
    </article>
  );
}
