import styles from './hero.module.scss'; // Tus estilos de estructura layout
import Typewriter from '../typewriter/typewriter';

const Hero = ({ hero }) => {
  const { title, name } = hero;

  return (
    <section className={styles.hero}>
      <Typewriter
        text={title}
        tag="h1"
        delay={100}
      />

      <h2>{name}</h2>
    </section>
  );
};

export default Hero;