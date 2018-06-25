class Icons extends React.Component {
  constructor () {
    super();
    this.IconInformation = require("./icons-information.js")
  }

  renderIcons () {
    let foo = new Array();
    for (let i in this.IconInformation){
      let tags = new String();
      for (let j in this.IconInformation[i].tags){
        if (j == 0){
          tags += this.IconInformation[i].tags[j]
        }else{
          tags += "  "+this.IconInformation[i].tags[j]
        }
      }
      foo.push(
        <div className={"icon"} key={i}>
          <div className={"icon-flex"}>
            <div className={"icon-wrapper"}>
              <div className={"icon-"+i} tags={tags}></div>
            </div>
          </div>
          <hr className={"bg-white"} />
          <div className={"icon-name"}>
            {this.IconInformation[i].name}
          </div>
        </div>
      )
    }
    return foo
  }

  render () {
    return (
      <div className={"content"}>
        {this.renderIcons()}
      </div>
    )
  }
}

module.exports = Icons
