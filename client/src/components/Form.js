import React from 'react';
import Select from 'react-select';
import tf, {log} from '@tensorflow/tfjs'

const jobOptions = [
    { value: '0', label: 'Data Scientist' },
    { value: '1', label: 'Data Engineer' },
    { value: '2', label: 'Data Analyst' },
    { value: '3', label: 'Data Science Manager' },
    {value: '4', label: 'Machine Learning Engineer'},
    { value: '5', label: 'ML/AI Scientist' },
]

const countryOptions = [
    { value: 'US', label: 'United States' },
    { value: 'GB', label: 'Great Britain' },
    { value: 'IN', label: 'India' },
    { value: 'CA', label: 'Canada' },
    {value: 'DE', label: 'Germany'},
    { value: 'FR', label: 'France' },
        {value: 'ES', label: 'Spain'},
        {value: 'GR', label: 'Greece'},
        {value: 'JP', label: 'Japan'},
        {value: 'PT', label: 'Portugal'},
        {value: 'BR', label: 'Brazil'},
        {value: 'PK', label: 'Pakistan'},
        {value: 'NL', label: 'Netherlands'},
        {value: 'PL', label: 'Poland'},
        {value: 'IT', label: 'Italy'},
        {value: 'RU', label: 'Russia'},
]

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.loadModel();

        this.state = {
            profession: '',
            experience: 0,
            residence: '',
            remote: 0,
        };

        this.model = null;

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    loadModel() {
        tf.loadLayersModel('https://raw.githubusercontent.com/joren961/Datasalary_nudge/main/model/model.json')
            .then((model) => {
                console.log("Succes")
                this.model = model;
            })
            .catch(()=>{
                console.log("Couldn't load model")
            })
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        this.model.predict().data();
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>What is your (desired) profession?</label>
                    <Select options={jobOptions}/>
                </div>

                <div>
                    <label>What is your experience? </label>

                    <select>
                        <option value="0">Entry</option>
                        <option value="1">Medior</option>
                        <option selected value="2">Senior</option>
                        <option selected value="3">Executive</option>
                    </select>
                </div>

                <div>
                    <label>Where are you currently resided</label>
                    <Select options={countryOptions}/>
                </div>

                <div>
                    <label> Where do you want to work from? </label>
                    <select>
                        <option selected value="0">Office</option>
                        <option value="1">Remote</option>
                        <option selected value="2">Hybrid</option>
                    </select>
                </div>

                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default Form