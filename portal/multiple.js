import { loadMicroApp } from '../../es';

const app1 = loadMicroApp(
  { name: 'app1', entry: '//localhost:8081', container: '#root' },
  {
    sandbox: {
      // strictStyleIsolation: true,
    },
  },
);

const app2 = loadMicroApp(
  { name: 'app2', entry: '//localhost:8082', container: '#app' },
  {
    sandbox: {
      // strictStyleIsolation: true,
    },
  },
);
