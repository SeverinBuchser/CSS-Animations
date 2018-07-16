class ColorPicker extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      rgb : {
        "red-slider" : 255,
        "green-slider" : 255,
        "blue-slider" : 255
      }
    }
    this.IconInformation = props.IconInformation[props.Number]
  }

  componentWillUnmount () {
    if ($("#icon-style").length != 0){
      $("#icon-style")[0].innerHTML = null
    }
  }

  componentDidMount () {
    $(".color-slider").on("input", (event) => {
      this.handleChange(event)
    })
  }

  handleChange (event) {

    this.setState((prevState) => {
      let newState = prevState
      newState.rgb[event.delegateTarget.id] = event.delegateTarget.value
      return newState
    })

    let rgbFoo = new Object()


    rgbFoo[event.delegateTarget.id] = event.delegateTarget.value

    $(".color-slider").each((i)=>{
      let element = $(".color-slider")[i]
      if(element.id != event.delegateTarget.id){
        rgbFoo[element.id] = element.value
      }
    })
    this.setState((prevState) => {
      let newState = prevState
      newState.rgb = rgbFoo
      return newState
    })
    let iconStyleElement;
    if ($("#icon-style").length == 0){
      iconStyleElement = document.createElement("style")
      iconStyleElement.setAttribute("id", "icon-style")
      document.head.appendChild(iconStyleElement)
    }else{
      iconStyleElement = $("#icon-style")[0]
    }
    let rgb = "rgb("+this.state.rgb["red-slider"]+","+this.state.rgb["green-slider"]+","+this.state.rgb["blue-slider"]+")",
        styleCreation = this.styleCreation(rgb)
    iconStyleElement.innerHTML = styleCreation
  }

  styleCreation (rgb) {
    let styleCreation = new String()

    if (this.IconInformation.background){
      for (let i in this.IconInformation.objects){
        if (this.IconInformation.objects[i]=="element"){
          styleCreation += ".icon-"+this.props.Number+" {background: "+rgb+"}"
        }else{
          styleCreation += ".icon-"+this.props.Number+":"+this.IconInformation.objects[i]+" {background: "+rgb+"}"
        }
      }
    }else{
      for (let i in this.IconInformation.objects){
        if (this.IconInformation.objects[i]=="element"){
          styleCreation += ".icon-"+this.props.Number+" {border-color: "+rgb+"}"
        }else{
          styleCreation += ".icon-"+this.props.Number+":"+this.IconInformation.objects[i]+" {border-color: "+rgb+"}"
        }
      }
    }

    return styleCreation
  }

  render () {
    return (
      <div className={"color-picker"}>
        <div className={"color-input"}>
          <input type={"range"} min={"0"} max={"255"} defaultValue={"255"} id={"red-slider"} className={"color-slider red-slider"}/>
          <input type={"range"} min={"0"} max={"255"} defaultValue={"255"} id={"green-slider"} className={"color-slider green-slider"}/>
          <input type={"range"} min={"0"} max={"255"} defaultValue={"255"} id={"blue-slider"} className={"color-slider blue-slider"}/>
        </div>
        <div className={"color-output"}>
          <p className={"color-output-red"}>R: {this.state.rgb["red-slider"]}</p>
          <p className={"color-output-green"}>G: {this.state.rgb["green-slider"]}</p>
          <p className={"color-output-blue"}>B: {this.state.rgb["blue-slider"]}</p>
        </div>
      </div>
    )
  }
}

module.exports = ColorPicker
