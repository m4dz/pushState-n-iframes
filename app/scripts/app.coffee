class App
    constructor: (@name)->
        @log = document.getElementById 'console'
        console.debug "#{@name} | starts..."
        @bindEvents()

    addStep: ->
        step = @log.children.length
        li = @log.appendChild document.createElement 'li'
        li.innerHTML = "<b>#{@name}</b> &gt; going to step #{step}"
        return step


    removeStep: ->
        @log.removeChild @log.lastChild


    onPushState: =>
        step = @addStep()
        window.history.pushState {steps: step + 1}, null, "/#{@name}/step#{step}"
        console.debug "#{@name} | push to step #{step}"


    onPopState: (event) =>
        len = event.state?.steps || 1
        if @log.children.length > len
            @removeStep()
            step = if event.state?.steps
                "step #{event.state.steps - 1}"
            else
                'initial step'
            console.debug "#{@name} | pop to #{step}"
        else
            step = @addStep()
            console.debug "#{@name} | replay to step #{step}"


    bindEvents: ->
        push = document.getElementById 'push'
        push.addEventListener 'click', @onPushState
        push.removeAttribute 'disabled'
        window.addEventListener 'popstate', @onPopState


module.exports = (slug)->
    window.application = new App slug
