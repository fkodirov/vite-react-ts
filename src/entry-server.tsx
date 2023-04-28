import React from 'react';
import { renderToPipeableStream, RenderToPipeableStreamOptions } from 'react-dom/server';
import App from './App';
import { StaticRouter } from 'react-router-dom/server';
import { Provider } from 'react-redux';
import { store } from './store/store';

export function render(url: string, options: RenderToPipeableStreamOptions) {
  return renderToPipeableStream(
    <React.StrictMode>
      <StaticRouter location={url}>
        <Provider store={store}>
          <App />
        </Provider>
      </StaticRouter>
    </React.StrictMode>,
    options
  );
}
