import React, { Component }  from 'react';

export default Compm extends Component {
	constructor() {
    super();
    this.init = this.init.bind(this);
  }

  init(node) {
		if ( node === null ) {
			return;
		}

		let app = this.props.src.embed(node, this.props.flags);

		if (typeof this.props.ports !== 'undefined') {
			this.props.ports(app.ports);
		}
	},

	shouldComponentUpdate(prevProps) {
		return false;
	}

	render() {
		return React.createElement('div', { ref: this.initialize });
	}
}
