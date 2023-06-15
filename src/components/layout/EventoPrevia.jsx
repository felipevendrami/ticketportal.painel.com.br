import styles from "./EventoPrevia.module.css";
import img from "../../imgs/test-img-evento.jpg";

function ProdutoPrevia({ eventos }) {
  return (
    <>
      <content className={styles.content}>
        <img className={styles.img} src={img} alt="img-evento" />
        <div className={styles.div_infos}>
          <h4 className={styles.h4}>Nome do Evento</h4>
          <p className={styles.p}>Ibirama</p>
          <p className={styles.p}>31/12/2023</p>
        </div>
      </content>
    </>
  );
}

export default ProdutoPrevia;
