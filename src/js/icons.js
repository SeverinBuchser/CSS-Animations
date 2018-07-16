class Icons extends React.Component {
  constructor () {
    super();

    this.IconInformation = require("./icons_information.js")
    this.IconActive = require("./icon_active.js")
    this.IconInactive = require("./icon_inactive.js")
    this.eventHandlerClick = this.eventHandlerClick.bind(this)

    this.state = {
      IconActive : null
    }
  }

  eventHandlerClick (IconNumber) {
    this.setState((prevState) => {
      let newState = prevState
      newState.IconActive = prevState.IconActive == IconNumber ? null : IconNumber
      return newState
    })
    $("body").toggleClass("body-bg-icon-active")
    this.forceUpdate()
  }

  renderIcons () {
    let foo = new Array();
    for (let i in this.IconInformation){
      foo.push(
        <this.IconInactive key={i} IconInformation={this.IconInformation} Number={i} eventHandlerClick={this.eventHandlerClick}/>
      )
    }
    return foo
  }

  renderIcon () {
    return (
      <this.IconActive IconInformation={this.IconInformation} Number={this.state.IconActive} eventHandlerClick={this.eventHandlerClick}/>
    )
  }

  render () {
    return (
      <div className={"content content-icon-"+ (this.state.IconActive == null? "inactive" : "active")}>
        {this.state.IconActive == null? this.renderIcons() : this.renderIcon()}
      </div>
    )
  }
}

module.exports = Icons
