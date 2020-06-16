
    !function () {
      var downloadedBundles = ["//storage.jd.com/lccomponents/lc5cd436279a6ea5003becd5a6.js","//storage.jd.com/lccomponents/lc5cd436279a6ea5003becd5aa-trial.js","//storage.jd.com/lccomponents/lc5dce12a4324b479a31ebb64a.js"]
      var body = document.body || document.documentElement
      var Wrap = function (props) {
        return props.children
      }
      // 懒加载组件
      var LazyLoadComponent = NervCreateClass({
        // loading loaded
        status: '',
        getInitialState: function () {
          return {
            status: 'initial'
          }
        },
        updateOffsetTop: function () {
          if (this.state.status !== 'initial') return
          var node = Nerv.findDOMNode(this)
          var rect = node.getBoundingClientRect()
          var winHeight = this.props.__context.windowHeight
          var canLoad = rect.top < winHeight * 1.5 && rect.top + rect.height > -winHeight * 0.5
          if (canLoad) {
            this.downloadScript()
          }
        },
        delayLoaded: function () {
          var that = this
          setTimeout(function () {
            that.setState({ status: 'loaded' })
          }, 300)
        },
        downloadScript: function () {
          var that = this
          var item = this.props.item
          if (!item.reactBundle || downloadedBundles.indexOf(item.reactBundle) !== -1) {
            this.setState({ status: 'loading' })
            // this.delayLoaded()
            return
          }
          var element = document.createElement('script')
          element.src = item.reactBundle
          element.charset = 'UTF-8'
          body.appendChild(element)
          element.onload = function () {
            that.setState({ status: 'loading' })
            // that.delayLoaded()
            downloadedBundles.push(item.reactBundle)
          }
        },
        componentDidMount: function () {
          this.updateOffsetTop()
        },
        componentWillReceiveProps: function (nextProps) {
          this.updateOffsetTop()
        },
        shouldComponentUpdate: function (nextProps, nextState) {
          return this.state.status !== nextState.status
        },
        componentDidCatch: function (error, info) {
          console.log(error)
          // 上报组件渲染错误
          // @see http://talos30011-prelb.o2athena.svc.n.jd.local/api-docs#null%2Fpaths%2F~1report%2Fpost
          var xhr = new XMLHttpRequest()
          xhr.open('POST', 'https://atom-log.3.cn/report', true)
          xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
          xhr.send('platform=h5&url=' + location.href + '&cname=' + this.props.item.type + '&project=' + globalData.projectId)
        },
        getWrappedElement: function () {
          if (this.WrappedElement) {
            return this.WrappedElement
          }
          var item = this.props.item
          var children = item.props.content || this.props.children || null
          var WrappedElement = genComponentElement(item.type, item.props, children)
          this.WrappedElement = WrappedElement
          return WrappedElement
        },
        render: function () {
          var that = this
          var status = this.state.status
          // if (status === 'initial' || status === 'loading') {
          if (status === 'initial') {
            return Nerv.createElement(
              'div',
              {
                style: {
                  padding: '10px',
                  backgroundClip: 'content-box',
                  minHeight: '256px',
                  height: '100%',
                  backgroundColor: '#e3e4e5'
                }
              }
              // status === 'loading' ?
              //   Nerv.createElement(
              //     'div',
              //     {
              //       style: {
              //         width: 0,
              //         height: 0,
              //         overflow: 'hidden'
              //       }
              //     },
              //     that.getWrappedElement()
              //   ) : null
            )
          } else {
            return that.getWrappedElement()
          }
        }
      })

      function createTree (tree) {
        tree = tree.filter(function (item) {
          return item.isShow === undefined || item.isShow === true
        })

        return tree.map(function (item) {
          var hasChildren = item.childrens && item.childrens.length
          hasChildren && (item.props.children = createTree(item.childrens))
          if (hasChildren) {
            return genComponentElement(item.type, item.props, item.props.content)
          } else {
            return Nerv.createElement(
              LingAtomScrollContext.Consumer,
              {},
              function (context) {
                return Nerv.createElement(
                  LazyLoadComponent,
                  Object.assign({}, { item: item }, { __context: context })
                )
              }
            )
          }
        })
      }

      var App = NervCreateClass({
        getInitialState: function () {
          return {
            scrollTop: 0,
            windowHeight: window.innerHeight
          }
        },
        componentDidMount: function () {
          var that = this
          window.onscroll = throttle(function () {
            var bodyScrollHeight = document.documentElement.scrollTop || document.body.scrollTop
            that.setState({
              scrollTop: bodyScrollHeight
            })
          }, 200)
          window.onresize = function () {
            var windowInnerHeight = window.innerHeight
            if (windowInnerHeight === that.state.windowHeight) return
            that.setState({
              windowHeight: windowInnerHeight
            })
          }
        },
        render: function () {
          return Nerv.createElement(
            LingAtomScrollContext.Provider,
            {
              value: this.state
            },
            createTree(window.o2PageConfig.data)
          )
        }
      })

      Nerv.render(
        Nerv.createElement(App),
        document.querySelector('#app')
      )
    }()
  