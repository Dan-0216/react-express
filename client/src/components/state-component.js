import React from "react";
import ApiHelper from "../labs/api-helper";

class StateComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "",
            colors: []
        };
    }
    componentDidMount() {
        // ApiHelper.get(`/api/test`, data => {
        //     this.setState({
        //         text: data.text,
        //         colors: data.colors
        //     });
        // });
    }

    handleSearchChange = e => {
        const value = e.target.value;
        if (value !== "") {
            this.state.colors.forEach(c => {
                if (value === c) {
                    this.props.onChangeColor({ color: c, text: this.state.text });
                }
            });
        }
    };

    render() {
        const showColors = this.state.colors.map((color, idx) => (
            <span key={idx} style={{ color: color }}>
                {color}&nbsp;
            </span>
        ));

        return (
            <div>
                <div>
                    <label>支持的颜色：</label>{showColors}
                </div>
                <input
                    className="prompt"
                    type="text"
                    placeholder="Search color..."
                    onChange={this.handleSearchChange}
                />
            </div>
        );
    }
}

export default StateComponent;