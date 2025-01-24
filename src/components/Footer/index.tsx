import { SFooter } from "./styles"
import Face from "../../assets/facebook-logo.png"
import Insta from "../../assets/instagram-logo.png"
import X from "../../assets/x-logo.png"

export function Footer() {
  return (
    <SFooter>
      <a href="http://facebook.com" target="_blank">
        <img src={Face} alt="Facebook" />
      </a>
      <a href="http://instagram.com" target="_blank">
        <img src={Insta} alt="Instagram" />
      </a>
      <a href="http://x.com" target="_blank">
        <img src={X} alt="X" />
      </a>
    </SFooter>
  )
}