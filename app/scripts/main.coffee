config = require 'config'

apps = []
root = config.root


findAppBySlug = (slug) ->
    if apps.length
        (apps.filter (app) -> app.id is slug)[0] || undefined
    else
        undefined


createApp = (slug, href) ->
    appIframe = document.createElement 'iframe'
    appIframe.addEventListener 'load', fakeIframeHistory
    appIframe.setAttribute 'id', slug
    appIframe.setAttribute 'src', href
    document.querySelector('.container').appendChild appIframe

    apps.push appIframe
    displayApp appIframe


displayApp = (appIframe) ->
    iframes = document.querySelectorAll '.container iframe'
    iframe.classList.remove 'active' for iframe in iframes
    appIframe.classList.add 'active' if appIframe


fakeIframeHistory = ->
    contentWindow = this.contentWindow
    pushStateLegacy = window.history.pushState
    contentWindow.history.pushState = () ->
        pushStateLegacy.apply contentWindow.history, arguments
        setTimeout ->
            path = contentWindow.location.pathname
            state = contentWindow.history.state
            window.history.replaceState state, null, path
        , 35

    contentWindow.addEventListener 'popstate', onPopState


onSwitchApp = (slug) ->
    setTimeout ->
        appIframe = findAppBySlug slug
        path = appIframe?.contentWindow.location.pathname or root
        window.history.pushState null, null, path
    , 35


onLaunch = (event) ->
    event.preventDefault()
    btn = event.target
    slug = btn.dataset.appSlug
    if slug
        appIframe = findAppBySlug slug
        if appIframe then displayApp(appIframe) else createApp(slug, btn.href)
    else
        displayApp()
    onSwitchApp slug


onPopState = (event) ->
    if this isnt window
        window.history.replaceState event.state, null, this.location.pathname
    slug = window.location.pathname.substring(root.length).split('/')[0]
    displayApp findAppBySlug(slug) or undefined


bindEvents = ->
    launchers = document.querySelectorAll 'nav a'
    for launcher in launchers
        launcher.addEventListener 'click', onLaunch
    window.addEventListener 'popstate', onPopState


module.exports = ->
    console.debug 'main | starts...'
    bindEvents()
