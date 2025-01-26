import { Section } from './styles'
import img1 from "../../assets/img1.png"
import img2 from "../../assets/img2.png"
import img3 from "../../assets/img3.png"

export function Home() {
  return (
    <Section>
      <div className='proximas'>
      <h1>Próximas lutas:</h1>
      </div>
      <div>
        <img src={img1} alt="IMG na esquerda" />
        <img src={img2} alt="IMG no centro" />
        <img src={img3} alt="IMG na direita" />
      </div>
    </Section>
  )
}
