import { SFooter } from "./styles"
import Face from "../../assets/facebook-logo.png"
import Insta from "../../assets/instagram-logo.png"

export function Footer() {
  return (
    <SFooter>
      <a href="http://facebook.com" target="_blank">
        <img src={Face} alt="Facebook" />
      </a>
      <a href="http://instagram.com" target="_blank">
        <img src={Insta} alt="Instagram" />
      </a>
    </SFooter>
  )
}