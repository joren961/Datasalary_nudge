
class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'Please write an essay about your favorite DOM element.'
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('An essay was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    What is your (desired) profession?
                    <select>
                        <option value="0">Data Scientist</option>
                        <option value="1">Data Engineer</option>
                        <option selected value="2">Data Analyst</option>
                        <option selected value="3">Data Architect</option>
                        <option selected value="4">Data Science Manager</option>
                        <option selected value="5">ML/AI Scientist</option>
                    </select>
                </label>
                <label>
                    What is your experience?
                    <select>
                        <option value="0">Entry</option>
                        <option value="1">Medior</option>
                        <option selected value="2">Senior</option>
                        <option selected value="3">Executive</option>
                    </select>
                </label>
                <label>
                    Where are you currently resided?
                    <select>
                        <option value="US">United States</option>
                        <option value="GB">Great Britain</option>
                        <option selected value="IN">India</option>
                        <option selected value="CA">Canada</option>
                        <option selected value="DE">Germany</option>
                        <option selected value="FR">France</option>
                        <option selected value="ES">Spain</option>
                        <option selected value="GR">Greece</option>
                        <option selected value="JP">Japan</option>
                        <option selected value="PT">Portugal</option>
                        <option selected value="BR">Brazil</option>
                        <option selected value="PK">Pakistan</option>
                        <option selected value="NL">Netherlands</option>
                        <option selected value="PL">Poland</option>
                        <option selected value="IT">Italy</option>
                        <option selected value="RU">Russia</option>
                    </select>
                </label>
                <label>
                    Where do you want to work from?
                    <select>
                        <option selected value="0">Office</option>
                        <option value="1">Remote</option>
                        <option selected value="2">Hybrid</option>
                    </select>
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}