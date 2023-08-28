import React from 'react';
import ReactDOM from 'react-dom';
import { App } from 'components/App';
import './index.css';

import { store, persistor } from 'redux/store';
import { Provider } from 'react-redux';

import { PersistGate } from 'redux-persist/integration/react';

import { ThemeProvider } from 'styled-components';
import { theme } from './components/theme';
import { BrowserRouter } from 'react-router-dom';

import { particlesCursor } from 'https://unpkg.com/threejs-toys@0.0.8/build/threejs-toys.module.cdn.min.js';


class ParticleCursorApp extends React.Component {
  render() {
    return (
      <React.StrictMode>
        <ThemeProvider theme={theme}>
          <Provider store={store}>
            <PersistGate persistor={persistor}>
              <BrowserRouter>
                <App />
              </BrowserRouter>
            </PersistGate>
          </Provider>
        </ThemeProvider>
      </React.StrictMode>
    );
  }
  componentDidMount() {
    const pc = particlesCursor({
      el: document.getElementById('root'), 
      gpgpuSize: 512,
      colors: [0x00fffc, 0x0000ff], 
      color: 0xff0000,
            coordScale: 0.5,
            noiseIntensity: 0.005,
            noiseTimeCoef: 0.0001,
            pointSize: 2, 
            pointDecay: 0.0025,
            sleepRadiusX: 250,
            sleepRadiusY: 250,
            sleepTimeCoefX: 0.001,
            sleepTimeCoefY: 0.002
    });

    document.addEventListener('mousemove', (event) => {
      const mouseX = event.clientX / window.innerWidth;
      const mouseY = 1 - event.clientY / window.innerHeight;
      pc.uniforms.uMousePos.value.set(mouseX, mouseY);
    });

    document.body.addEventListener('click', () => {
      pc.uniforms.uColor.value.set(Math.random() * 0xffffff);
            pc.uniforms.uCoordScale.value = 0.001 + Math.random() * 2;
            pc.uniforms.uNoiseIntensity.value = 0.0001 + Math.random() * 0.001;
            pc.uniforms.uPointSize.value = 1 + Math.random() * 10;
        });
        
        document.body.addEventListener('click', () => {
            pc.uniforms.uColor.value.set(Math.random() * 0xffffff);
            pc.uniforms.uCoordScale.value = 0.001 + Math.random() * 2;
            pc.uniforms.uNoiseIntensity.value = 0.0001 + Math.random() * 0.001;
            pc.uniforms.uPointSize.value = 1 + Math.random() * 10;
    });

  //   setTimeout(() => {
  //     pc.uniforms.uColor.value.set(0x000000); 
  //     pc.uniforms.uCoordScale.value = 0.001;
  //     pc.uniforms.uNoiseIntensity.value = 0.0001;
  //     pc.uniforms.uPointSize.value = 0;
  // }, 5000);
  }

 
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <ParticleCursorApp />
);






// SAVE MODE

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { App } from 'components/App';
// import './index.css';

// import { store, persistor } from 'redux/store';
// import { Provider } from 'react-redux';

// import { PersistGate } from 'redux-persist/integration/react';

// import { ThemeProvider } from 'styled-components';
// import { theme } from './components/theme';
// import { BrowserRouter } from 'react-router-dom';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <ThemeProvider theme={theme}>
//       <Provider store={store}>
//         <PersistGate persistor={persistor}>
//           <BrowserRouter>
//             <App />
//           </BrowserRouter>
//         </PersistGate>
//       </Provider>
//     </ThemeProvider>
//   </React.StrictMode>
// );