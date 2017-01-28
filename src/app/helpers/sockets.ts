import { Subject, Observer, Observable } from 'rxjs/Rx';

export function createSocket<T>(url: string): Subject<T> {
  const ws = new WebSocket(url);
  const observable = Observable.create(
    (obs: Observer<T>) => {
      ws.onopen = function() {
        console.log(`WEBSOCKET: Connected to ${url}`);
      };
      ws.onmessage = obs.next.bind(obs);
      ws.onerror = obs.error.bind(obs);
      ws.onclose = obs.complete.bind(obs);
      return ws.close.bind(ws);
    }
  );
  const observer = {
    next: (data: Object) => {
      if (ws.readyState === WebSocket.OPEN) {
        ws.send(JSON.stringify(data));
      }
    },
  };
  return Subject.create(observer, observable);
}
