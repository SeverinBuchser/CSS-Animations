class IconActive extends React.Component {
  constructor () {
    super();
    this.ColorPicker = require("./color_picker.js")
  }

  eventHandlerClick () {
    this.props.eventHandlerClick(this.props.Number)
  }

  render () {
    let tags = new String();
    for (let j in this.props.IconInformation[this.props.Number].tags){
      if (j == 0){
        tags += this.props.IconInformation[this.props.Number].tags[j]
      }else{
        tags += "  "+this.props.IconInformation[this.props.Number].tags[j]
      }
    }
    return (
      <div className={"icon icon-active"}>
        <section className={"icon-grid-item-icon"}>
          <div className={"icon-name"}>
            {this.props.IconInformation[this.props.Number].name}
          </div>
          <div className={"icon-background-circle-purple-purple"}>
            <div className={"icon-flex"}>
              <div className={"icon-wrapper icon-background-circle"}>
                <div className={"icon-"+this.props.Number} tags={tags}></div>
              </div>
            </div>
          </div>
        </section>
        <section className={"icon-grid-item-editing"}>
          <form>
            <this.ColorPicker IconInformation={this.props.IconInformation} Number={this.props.Number}/>
          </form>
        </section>
        <section className={"icon-grid-item-code"}>

        </section>
        <section>
          <div className={"icon-background-circle-dark-red"}>
            <div className={"icon-flex"} onClick={() => this.eventHandlerClick()}>
              <div className={"icon-wrapper"}>
                <div className={"icon-1-red"}></div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

module.exports = IconActive
