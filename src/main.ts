import { createApp } from 'vue'; // or import React from 'react' for React
import App from './App.vue'; // or './App.tsx' for React

createApp(App).mount('#app'); // For Vue
// React would use ReactDOM.render(<App />, document.getElementById('app'));
