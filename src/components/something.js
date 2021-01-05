// class RainbowCanvas extends React.Component {
//   constructor(props) {
//     super(props),
//     this.state = {
//       isDrawing: false,
//       lastX: 0,
//       lastY: 0,
//       hue: 1,
//       direction: true,
//       controlDisplay: "none",
//       controlLeft: "100%",
//       customColor: false,
//       color: "#000000",
//       customStroke: false,
//       maxWidth: 100,
//       minWidth: 5
//     },
//     this.draw = this.draw.bind(this),
//     this.handleWidth = this.handleWidth.bind(this),
//   }
//   canvas () {
//     return document.querySelector("#draw");
//   }
//   ctx () {
//     return this.canvas().getContext("2d");
//   }
//   componentDidMount() {
//     const canvas = this.canvas()
//     const ctx = this.ctx()
//     if(this.props.fullscreen === true){
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//     }
//     ctx.strokeStyle = "#BADA55";
//     ctx.lineJoin = "round";
//     ctx.lineCap = "round";
//     ctx.lineWidth = Number(this.state.minWidth) + 1;
//   }
//   draw(e) {
//     const ctx = this.ctx();
//     let hue = this.state.hue;
//
//     if(this.state.isDrawing){
//       if(this.state.color && this.state.customColor) {
//         ctx.strokeStyle = this.state.color;
//       } else {
//         ctx.strokeStyle = `hsl(${this.state.hue}, 100%, 50%)`;
//       }
//       ctx.beginPath();
//       ctx.moveTo(this.state.lastX, this.state.lastY);
//       ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
//       ctx.stroke();
//       hue++
//       if(hue >= 360) {
//         hue = 1
//       }
//       this.setState({
//         hue: hue,
//         lastX: e.nativeEvent.offsetX,
//         lastY: e.nativeEvent.offsetY
//       })
//       if(!this.state.customStroke) {
//         this.handleWidth(e);
//       }
//
//     }
//   }
//   handleWidth(e) {
//     const ctx = this.canvas().getContext("2d");
//     let nextState = this.state.direction;
//     if(ctx.lineWidth >= this.state.maxWidth && this.state.direction === true || ctx.lineWidth <= this.state.minWidth && this.state.direction === false) {
//       nextState = !this.state.direction;
//       this.setState({
//         direction: nextState
//       })
//     }
//     if(nextState){
//       ctx.lineWidth++
//     } else {
//       ctx.lineWidth--
//     }
//   }
//   render () {
//
//     const canvasStyle = {
//       border: "1px solid black"
//     }
//
//     return (
//       <div>
//         <canvas id="draw" width={this.props.width} height={this.props.height} onMouseMove={this.draw}
//         onMouseDown={(e) => {
//           this.setState({
//             isDrawing: true,
//             lastX: e.nativeEvent.offsetX,
//             lastY: e.nativeEvent.offsetY
//           })}
//         } onMouseUp={
//           () => this.setState({isDrawing: false})
//         } onMouseOut={
//           () => this.setState({isDrawing: false})
//         } style={canvasStyle}/>
//       </div>
//     )
//   }
// }
//
// ReactDOM.render(
//   <div>
//     <RainbowCanvas fullscreen={true}  width="500" height="500"/>
//   </div>,
//   document.getElementById("root")
// )
