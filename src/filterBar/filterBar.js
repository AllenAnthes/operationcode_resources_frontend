import React, {Component} from 'react';
import Select from 'react-select';
import {Row} from "reactstrap";
import 'react-select/dist/react-select.css';
import "./filterBar.css"

const LANGUAGES = [
    {label: 'Java', value: 'java'},
    {label: 'Javascript', value: 'javascript'},
    {label: 'Python', value: 'python'},
    {label: 'Ruby', value: 'ruby'},
];

const CATEGORIES = [
    {label: "Books", value: "books"},
    {label: "Code Challenges", value: "code challenges"},
    {label: "Online Courses", value: "online courses"},
];

class FilterBar extends Component {
    constructor(props) {
        super(props);
        this.state = FilterBar.getInitialState();
        this.handleLanguageSelectChange = this.handleLanguageSelectChange.bind(this);
        this.handleCategorySelectChange = this.handleCategorySelectChange.bind(this);
    }

    static getInitialState() {
        return {
            languageValue: [],
            categoryValue: []
        };
    }

    handleLanguageSelectChange(value) {
        this.props.onLanguageFilter(value);
        console.log("You've selected:", value);
        this.setState({languageValue: value});
    }

    handleCategorySelectChange(value) {
        this.props.onCategoryFilter(value);
        console.log("You've selected:", value);
        this.setState({categoryValue: value});
    }

    render() {
        return (
            <div className="section">
                <Row className={"filterRow"}>
                    <Select className={"select"}
                            closeOnSelect={true}
                            multi
                            options={LANGUAGES}
                            onChange={this.handleLanguageSelectChange}
                            placeholder="Filter By Language"
                            value={this.state.languageValue}
                    />
                    <Select className={"select"}
                            closeOnSelect={true}
                            multi
                            options={CATEGORIES}
                            onChange={this.handleCategorySelectChange}
                            placeholder="Filter by Category"
                            value={this.state.categoryValue}
                    />
                </Row>
            </div>
        );
    }
}

export default FilterBar;