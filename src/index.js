import _ from 'lodash'
import printMe from './print'

function component () {
    var el = document.createElement('div')
    var btn = document.createElement('button')

    el.innerHTML = 'hello webpack'
    btn.innerHTML = 'Click me and check the console!'
    btn.onclick = printMe

    el.appendChild(btn)
    return el
}

document.body.appendChild(component())

if (module.hot) {
    module.hot.accept('./print.js', function() {
        console.log('Accepting the updated printMe module!');
        printMe();
    })
}