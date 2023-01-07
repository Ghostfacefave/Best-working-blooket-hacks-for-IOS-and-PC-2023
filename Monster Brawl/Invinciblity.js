function reactEventHandler() {
    let react = Object.values(document.querySelector("#body"))[0].stateNode;
    return react[Object.keys(react).filter(a => a.includes("reactInternalInstance"))].return.stateNode;
}

(() => {
    let n = document.createElement('iframe');
    document.body.append(n);
    window.alert = n.contentWindow.alert.bind(window);
    n.remove();
})();

reactEventHandler().state.game.instance.events._events['game-over'].map(a => a.fn = () => {});
alert("Enabled invincibility.");
