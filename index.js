import * as detect from '@advanced/browser-detect'

const tests = [
'class',
'const',
'let',
'arrowFunction',
'spread',
'symbols',
'customElement',
'promise',
'fetch',
'typeModule'
]

function createEntry (k, v) {
    const dt = document.createElement('dt')
    dt.textContent = k
    if (!v) {
        dt.classList.add('false')
    }
    const dd = document.createElement('dd')
    dd.textContent = v
    return [dt, dd]
}

document.addEventListener('DOMContentLoaded', () => {
    const dl = document.createElement('dl')
    tests.forEach(t => {
        const v = detect.all(t)
        const [dt, dd] = createEntry(t, v)
        dl.appendChild(dt)
        dl.appendChild(dd)
    })

    let v = navigator.userAgent.toString()
    let [dt, dd] = createEntry('userAgent', v)
    dl.appendChild(dt)
    dl.appendChild(dd)

    let v2 = navigator.appName.toString()
    let [dt2, dd2] = createEntry('appName', v2)
    dl.appendChild(dt2)
    dl.appendChild(dd2)

    let v3 = navigator.appVersion.toString()
    let [dt3, dd3] = createEntry('appVersion', v3)
    dl.appendChild(dt3)
    dl.appendChild(dd3)

    document.body.appendChild(dl)
})