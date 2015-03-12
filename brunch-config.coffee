ghPrefix = "/pushState-n-iframes"

exports.config =
    # See http://brunch.io/#documentation for docs.
    files:
        javascripts:
            joinTo: 'app.js'
        stylesheets:
            joinTo: 'app.css'
        templates:
            joinTo: 'templates.js'

    plugins:
        jade:
            locals:
                base: '/'

    overrides:
        production:
            server:
                # Served from GH-pages
                base: ghPrefix
            plugins:
                jade:
                    locals:
                        base: "#{ghPrefix}/"
