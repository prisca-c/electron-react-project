import { createRoot } from 'react-dom/client';
import App from './components/App';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const container = document.getElementById('root')!;
const root = createRoot(container);
root.render(<App />);

// calling IPC exposed from preload script
window.electron.ipcRenderer.once('ipc-example', (arg) => {
  console.log(arg);
});
window.electron.ipcRenderer.sendMessage('ipc-example', ['ping']);
