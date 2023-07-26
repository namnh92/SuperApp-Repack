import {AppRegistry, Platform} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';

ScriptManager.shared.addResolver(async (scriptId, caller) => {
    const resolveURL = Federated.createURLResolver({
      containers: {
      },
    });
  
    const url = resolveURL(scriptId, caller);
    if (url) {
      return {
        url,
        query: {
          platform: Platform.OS,
        },
      };
    }
  });

AppRegistry.registerComponent(appName, () => App);
