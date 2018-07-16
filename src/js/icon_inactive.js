class IconInactive extends React.Component {
  constructor () {
    super();
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
      <div className={"icon icon-inactive icon-background-circle-purple-purple"} onClick={()=>this.eventHandlerClick()}>
        <div className={"icon-flex"}>
          <div className={"icon-wrapper"}>
            <div className={"icon-"+this.props.Number} tags={tags}></div>
          </div>
        </div>
        <hr className={"icon-line"} />
        <div className={"icon-name"}>
          {this.props.IconInformation[this.props.Number].name}
        </div>
      </div>
    )
  }
}

module.exports = IconInactive
