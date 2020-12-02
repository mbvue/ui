export type EventType = string | symbol;
export type Handler<T = any> = (event?: T) => void;
export type WildcardHandler = (type: EventType, event?: any) => void;
export type EventHandlerList = Array<Handler>;
export type WildCardEventHandlerList = Array<WildcardHandler>;
export type EventHandlerMap = Map<EventType, EventHandlerList | WildCardEventHandlerList>;

export interface Emitter {
    all: EventHandlerMap;

    on<T = any>(type: EventType, handler: Handler<T>): void;
    on(type: '*', handler: WildcardHandler): void;

    off<T = any>(type: EventType, handler: Handler<T>): void;
    off(type: '*', handler: WildcardHandler): void;

    emit<T = any>(type: EventType, event?: T): void;
    emit(type: '*', event?: any): void;
}

export default function mitt(all?: EventHandlerMap): Emitter {
    const _all = all || new Map();

    return {
        all: _all,

        on<T = any>(type: EventType, handler: Handler<T>) {
            const handlers = _all.get(type);
            const added = handlers && handlers.push(handler);
            if (!added) {
                _all.set(type, [handler]);
            }
        },

        off<T = any>(type: EventType, handler: Handler<T>) {
            const handlers = _all.get(type);
            if (handlers) {
                handlers.splice(handlers.indexOf(handler) >>> 0, 1);
            }
        },

        emit<T = any>(type: EventType, evt: T) {
            ((_all.get(type) || []) as EventHandlerList).slice().map(handler => {
                handler(evt);
            });
            ((_all.get('*') || []) as WildCardEventHandlerList).slice().map(handler => {
                handler(type, evt);
            });
        }
    };
}
