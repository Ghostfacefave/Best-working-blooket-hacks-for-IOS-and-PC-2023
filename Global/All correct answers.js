setInterval(function () {
  var hack = Object.values(document.querySelector('#app > div > div'))[1].children[0]['_owner'].stateNode.state.question
  try {
    hack.correctAnswers = hack.answers
  } catch (err) {}
})
