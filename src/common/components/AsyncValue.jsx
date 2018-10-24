/**
 * Renders data that loads asynchronous
 */
import { Component } from 'react';

class AsyncValue extends Component {
    state = {
        fetchDataResult: null,
        timeout: false,
    };

    componentDidMount() {
        // Setup timeout handler
        if (this.props.timeout) {
            this._timeout = setTimeout(() => {
                this.setState({ timeout: true });
            }, this.props.timeout);
        }

        // Call fetch request
        this.execute();

        // Update value with some interval
        if (this.props.interval) {
            this._interval = setInterval(this.execute, this.props.interval);
        }
    }

    execute = () => {
        this.props.fetch().then(result => {
            this.setState({ fetchDataResult: result }, () => {
                if (this._timeout) {
                    clearTimeout(this._timeout);
                }
            });
        });
    };

    render() {
        if (this.state.timeout) {
            return this.props.fallback;
        } else {
            return this.state.fetchDataResult || this.props.placeholder;
        }
    }
}

export default AsyncValue;
