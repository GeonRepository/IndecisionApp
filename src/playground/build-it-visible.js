// const app = {
//     title: 'Visibility Toggle',
// };

// const appRoot = document.getElementById('app');

// const showDetails = () => {
//     const template = (
//         <div>
//             <h1>{app.title}</h1>
//             <button onClick={hideDetails}>Hide Details</button>
//             <p>You see me now.</p>
//         </div>
//     );
//   ReactDOM.render(template, appRoot);
// }

// const hideDetails = () => {
//     const template = (
//         <div>
//             <h1>{app.title}</h1>
//             <button onClick={showDetails}>Show Details</button>
//         </div>
//     );
//   ReactDOM.render(template, appRoot);
// }
// const template = (
//   <div>
//     <h1>{app.title}</h1>
//     <button onClick={showDetails}>Show Details</button>
//   </div>
// );


// ReactDOM.render(template, appRoot);

class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.showDetails = this.showDetails.bind(this);
        this.hideDetails = this.hideDetails.bind(this);
        this.state = {
            content: ""
        };
    }

    showDetails() {
        this.setState(() => {
            return {
                content: "You can see me now"
            };
        })
    }

    hideDetails() {
        this.setState(() => {
            return {
                content: ""
            };
        });
    }

    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.showDetails}>Show</button>
                <button onClick={this.hideDetails}>Hide</button>
                <h1>{this.state.content}</h1>
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle/>, document.getElementById("app"));