function reactEventHandler() {
    let react = Object.values(document.querySelector("#body"))[0].stateNode;
    return react[Object.keys(react).filter(a => a.includes("reactInternalInstance"))].return.stateNode;
}

(() => {
    let n = document.createElement('iframe');
    document.body.append(n);
    window.prompt = n.contentWindow.prompt.bind(window);
    window.alert = n.contentWindow.alert.bind(window);
    n.remove();
})();

Object.keys(reactEventHandler().state.abilities).map(a => reactEventHandler().state.abilities[a] = 9);
reactEventHandler().state.game.scene.children.list.filter(a => a.texture?.key?.startsWith('darkEnergy')).map(a => a.scale = 5);

alert("Maxed out all abilities.");
