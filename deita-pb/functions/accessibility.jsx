function onEnter(event, handler) {
    if (event.key === "Enter") handler()
}

export default function accessibleOnClick(handler) {
    return {
        onClick: handler,
        onKeyDown: event => onEnter(event, handler),
        role: 'button',
        tabIndex: 0,
    }
}