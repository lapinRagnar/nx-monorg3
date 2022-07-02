import styles from './particles.module.css';
import ParticleField from 'react-particles-webgl';


export function Particles(props) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Particles!</h1>
      <div style={{ height: "100vh", width: "100%" }}>
        <ParticleField />
      </div>
    </div>
  );
}
export default Particles;
