import Button from "react-bootstrap/Button";
import styles from "./EventoPage.module.css";
import img_evento from "../imgs/test-img-evento.jpg";
import Container from "../components/layout/Container";

function EventPage() {
  return (
    <Container customClass="center">
      <div className={styles.div}>
        <content className={styles.content_1}>
          <img className={styles.img} src={img_evento} alt="Img Evento Teste" />
          <table className={styles.table}>
            <tr>
              <th className={styles.th} colspan="2">Ingressos</th>
            </tr>
            <tr>
              <td className={styles.td_lote}>Lote 1</td>
              <td className={styles.td_button} rowspan="2">
                <Button variant="success">Comprar</Button>{" "}
              </td>
            </tr>
            <tr>
              <td className={styles.td_valor}>R$ 40,00</td>
            </tr>
          </table>
        </content>
        <content className={styles.content_2}>
          <h2>Nome do Evento</h2>
          <p>Local: Tortuga Bar - Ibirama / SC</p>
          <p>31/12/2023 - 18:00</p>
          <h4>Descrição</h4>
          <p className={styles.p}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
            laoreet magna feugiat felis dictum laoreet. Ut non pharetra justo.
            Phasellus posuere justo id turpis pellentesque, eu dapibus nibh
            rutrum. Sed nec massa arcu. In non porta diam. Aliquam eleifend,
            purus sed gravida vulputate, justo nulla rhoncus nulla, vel vehicula
            turpis nibh eget odio. Fusce sed risus porta, pretium lorem ac,
            lobortis velit. Vivamus id accumsan felis. Curabitur pellentesque
            finibus tellus, vel blandit mi. Nulla in tortor a risus vestibulum
            imperdiet vel nec nunc. Quisque ultricies lorem odio. Nam maximus
            lacus a purus imperdiet, sit amet venenatis sem feugiat. Sed sit
            amet cursus est, eget accumsan urna. Maecenas ac aliquet magna.
          </p>
        </content>
      </div>
    </Container>
  );
}

export default EventPage;
