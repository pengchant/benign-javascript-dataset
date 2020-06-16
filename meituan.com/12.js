
        ;(function(){
          try {
            var app = document.getElementById('react');
            if('default' in App) App = App[ 'default' ];
            // https://facebook.github.io/react/docs/react-dom.html#hydrate
            (ReactDOM.hydrate || ReactDOM.render)(
              React.createElement(App, window.AppData), app
            );
          } catch (e) {
            console.error('[Turbo#React] ', e);
          }
        })(this);