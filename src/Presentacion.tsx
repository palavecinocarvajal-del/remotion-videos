import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig, spring} from 'remotion';

const G = '#86edaf';
const BG = '#07151a';

const Scene: React.FC<{from: number; to: number; children: React.ReactNode}> = ({from, to, children}) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [from, from + 13, to - 13, to], [0, 1, 1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const rise = interpolate(frame, [from, from + 22], [65, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  return (
    <div style={{position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column',
      justifyContent: 'center', alignItems: 'center', textAlign: 'center',
      padding: '110px 70px', opacity, transform: `translateY(${rise}px)`}}>
      {children}
    </div>
  );
};

export const Presentacion: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const zoom = spring({frame, fps, config: {damping: 15}});
  const angle = frame * 0.15;
  return (
    <AbsoluteFill style={{backgroundColor: BG, color: '#fff', fontFamily: 'Arial, Helvetica, sans-serif',
      overflow: 'hidden'}}>
      <AbsoluteFill style={{background: 'radial-gradient(circle at 85% 55%, #123d32 0%, #07151a 64%)'}} />
      <div style={{position: 'absolute', top: 300, left: -450, width: 850, height: 850,
        borderRadius: '50%', border: '3px solid #285a49', transform: `rotate(${angle}deg)`}} />
      <div style={{position: 'absolute', bottom: 300, right: -470, width: 900, height: 900,
        borderRadius: '50%', border: '3px solid #1b483b', transform: `rotate(${-angle}deg)`}} />

      <div style={{position: 'absolute', left: 80, right: 80, top: 95, display: 'flex',
        justifyContent: 'space-between', alignItems: 'center'}}>
        <span style={{fontSize: 36, fontWeight: 900, color: G}}>RECICLARED</span>
        <span style={{fontSize: 22, letterSpacing: 3, color: '#d2e2dd'}}>CHILE</span>
      </div>

      <Scene from={0} to={84}>
        <div style={{color: G, fontWeight: 800, fontSize: 31, letterSpacing: 5, marginBottom: 54}}>
          TRANSFORMAMOS EL FUTURO
        </div>
        <div style={{fontSize: 116, fontWeight: 900, lineHeight: 1.08,
          transform: `scale(${0.94 + zoom * 0.06})`}}>
          La tecnología<br/>merece una<br/><span style={{color: G}}>segunda vida.</span>
        </div>
        <div style={{fontSize: 32, color: '#c6d6d0', marginTop: 70}}>
          Gestión responsable de residuos electrónicos
        </div>
      </Scene>

      <Scene from={78} to={171}>
        <div style={{color: G, fontSize: 37, fontWeight: 800, letterSpacing: 5}}>
          ¿QUÉ HACEMOS?
        </div>
        <div style={{fontWeight: 900, fontSize: 97, lineHeight: 1.17, marginTop: 60}}>
          Recibimos.<br/>Recuperamos.<br/><span style={{color: G}}>Reutilizamos.</span>
        </div>
        <div style={{fontSize: 34, color: '#d2e2dd', lineHeight: 1.5, marginTop: 65}}>
          Puntos de acopio y soluciones<br/>para empresas e instituciones
        </div>
      </Scene>

      <Scene from={165} to={247}>
        <div style={{color: G, fontSize: 33, fontWeight: 900, letterSpacing: 3}}>
          MENOS RESIDUOS. MÁS VALOR.
        </div>
        <div style={{fontSize: 110, fontWeight: 900, lineHeight: 1.06, marginTop: 65}}>
          Cada equipo<br/>cuenta.
        </div>
        <div style={{height: 6, width: 300, backgroundColor: G, marginTop: 80}} />
        <div style={{fontSize: 38, color: '#c6d6d0', marginTop: 50}}>
          Reciclar también es innovar.
        </div>
      </Scene>

      <Scene from={239} to={300}>
        <div style={{height: 145, width: 145, borderRadius: 35, backgroundColor: G,
          color: BG, display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontWeight: 900, fontSize: 95, marginBottom: 55}}>R</div>
        <div style={{fontSize: 112, fontWeight: 900}}>Recicla<span style={{color: G}}>Red</span></div>
        <div style={{fontSize: 36, color: '#c6d6d0', marginTop: 55}}>
          Dale una nueva vida a la tecnología.
        </div>
        <div style={{fontSize: 47, color: G, fontWeight: 900, marginTop: 100}}>
          reciclared.cl
        </div>
      </Scene>

      <div style={{position: 'absolute', bottom: 72, width: '100%',
        textAlign: 'center', fontSize: 22, letterSpacing: 5, color: '#5e907e'}}>
        RECICLARED · ECONOMÍA CIRCULAR
      </div>
    </AbsoluteFill>
  );
};
