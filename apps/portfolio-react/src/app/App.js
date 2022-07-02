// import NxWelcome from './nx-welcome';
import Particles from "./particles/particles";
import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import styledNormalize from 'styled-normalize';
import ParticleField, { defaultConfig } from 'react-particles-webgl';


export function App() {
  return (
    <>
      {/* <NxWelcome title="portfolio-react" /> */}
      <Particles></Particles>
      <div />
    </>
  );
}
export default App;
