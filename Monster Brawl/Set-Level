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
level = parseInt(prompt("Enter level:"));

reactEventHandler().setState({ level });
alert(`Set level to ${level}.`);
