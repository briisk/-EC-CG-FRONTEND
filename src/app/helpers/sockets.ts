import { Injectable } from '@angular/core';
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

// import { Socket } from 'phoenix';
const Socket = require('phoenix').Socket;

@Injectable()
export class PhoenixChannel {
  public socket;
  public topic;
  public channel;

  constructor(socket, topic, options = {}) {
    this.socket = socket;
    this.topic = topic;
    this.channel = this.socket.channel(topic, options);
  }

  join(options = {}) {
    let joined = this.channel.join();
    return new Observable( (observer) => {
      joined
        .receive("ok", resp => {
          console.log("connected", resp);
          observer.next(resp);
        })
        .receive("error", resp => { observer.error(resp); });
    });
  }

  send(event, payload) {
    this.channel.push(event, payload);
  }

  observeMessage(message) {
    return new Observable( (observer) => {
      this.channel.on(message, (resp) => {
        console.log(message, resp);
        observer.next(resp);
      });
    });
  }
}

@Injectable()
export class PhoenixChannels {
  public socket;

  constructor(socketUrl) {
    this.socket =  new Socket(socketUrl);
    this.socket.connect();
  }

  channel(topic) {
    return new PhoenixChannel(this.socket, topic);
  }
}
