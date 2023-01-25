import Image from "next/image";
import Styles from "./Styles.module.scss";

export default function WithPower() {
  return (
    <div className={Styles.container}>
      <div className={Styles.text_container}>
        <p className={Styles.with_power}>
          With great power comes great electricity bill
          <Image
            className={Styles.qoutes}
            src="/images/qoutes.png"
            height={20}
            width={20}
            alt="qoutes"
          />
        </p>
        <p className={`${Styles.with_power} ${Styles.dr_who}`}>
          - Dr. who
          <Image
            className={Styles.qoutes}
            src="/images/qoutes.png"
            height={20}
            width={20}
            alt="qoutes"
          />
        </p>
      </div>
    </div>
  );
}
