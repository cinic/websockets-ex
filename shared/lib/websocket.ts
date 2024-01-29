import { attach, createEffect, createEvent, createStore } from "effector";

type Config = {
  url: string;
}

export function createWebsocketConnection<T extends string>(config: Config) {
  const webSocket = new WebSocket(config.url);

  const onOpen = createEvent<Event>();
  const onClose = createEvent<CloseEvent>();
  const onMessage = createEvent<string>();
  const onError = createEvent<Event>();

  const $webSocket = createStore(webSocket);

  const sendMessage = attach({
    source: $webSocket,
    async effect(socket, args: Parameters<WebSocket['send']>[0]) {
      if (socket.readyState === socket.OPEN) {
        socket.send(args);
      }
    },
  })

  webSocket.onopen = onOpen;
  webSocket.onclose = onClose;
  webSocket.onerror = onError;
  webSocket.onmessage = (event: MessageEvent<T>) => onMessage(event.data);

  return { onClose, onError, onMessage, onOpen, sendMessage, $webSocket, webSocket }
}