import Image from "next/image";
import styles from "./page.module.css";
import qrcode from "../public/image-qr-code.png";
export default function Home() {
  return (
    <main>
      <Image src={qrcode} alt="qrcode" />
      <h2>Improve your front-end skills by building real projects.</h2>
      <p>Scan the QR code to join the community, and get the latest updates.</p>
    </main>
  );
}
