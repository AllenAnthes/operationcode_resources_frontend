import React, {Component} from 'react';
import axios from 'axios'
import './App.css';
import {CardColumns} from 'reactstrap';
import MultiSelectField from "./filterBar/filterBar";
import ResourceCard from "./resourceCard/resourceCard";

const URL = "https://53fd0165.ngrok.io/";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            resources: [],
            languages: [],
            categories: []
        };
        this.onLanguageFilter = this.onLanguageFilter.bind(this);
        this.onCategoryFilter = this.onCategoryFilter.bind(this);
    }

    componentWillMount() {
        axios.post(URL + "api/resources/")
            .then(res => {
                const resources = res.data;
                this.setState({
                    resources: resources,
                })
            }).catch(error => {
            console.log("error" + error)
        });
    }

    onLanguageFilter(languages) {
        axios.post(URL + "api/resources/filtered",
            {
                languages: languages,
                categories: this.state.categories
            }).then(res => {
            this.setState({
                resources: res.data,
                languages: languages
            })
        })
    }

    onCategoryFilter(categories) {
        this.setState({categories});
        axios.post(URL + "api/resources/filtered",
            {
                languages: this.state.languages,
                categories: categories
            }).then(res => {
            this.setState({
                resources: res.data,
                categories: categories
            })
        })
    }

    render() {
        return (
            <div className={"resources"}>
                <MultiSelectField
                    onLanguageFilter={this.onLanguageFilter}
                    onCategoryFilter={this.onCategoryFilter}
                />

                <CardColumns className={"cardColumns"}>
                    {this.state.resources.map(resource => {
                        return (<ResourceCard
                            key={resource.key}
                            name={resource.name}
                            url={resource.url}
                            category={resource.category}
                            paid={resource.paid}
                            notes={resource.notes}
                            language={resource.language}
                        />)
                    })}
                </CardColumns>
            </div>)
    }
}

export default App;
