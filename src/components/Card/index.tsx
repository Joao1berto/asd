import { SSection } from "./styles";
export interface ICard {
  data: string
  evento: string
  atletas: string
}
export const Card = ({ data, evento, atletas }: ICard) => {
  return (
    <SSection>
      <aside>
        <h5>Data:</h5>
        <p>{data}</p>
      </aside>
      <aside>
        <h5>Evento:</h5>
        <p>{evento}</p>
      </aside>
      <aside>
        <h5>Atletas:</h5>
        <p>{atletas}</p>
      </aside>
    </SSection>
  );
};
