import React, {Component} from 'react'
import {CardColumns} from 'reactstrap'
import ResourceCard from "../resourceCard/resourceCard";
import "./resourceTab.css";

class ResourceTab extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tabNumber: null,
            resources: []
        }
    }

    render() {
        const resources = this.props.resources;
        return (
            <div className="resources">
                <CardColumns className={"cardColumns"}>
                    {
                        resources.map(resource => {
                            return (
                                <ResourceCard
                                    key={resource.key}
                                    name={resource.name}
                                    url={resource.url}
                                    category={resource.category}
                                    paid={resource.paid}
                                    notes={resource.notes}
                                    language={resource.language}
                                />
                            )
                        })
                    }
                </CardColumns>
            </div>
        )
    }
}

export default ResourceTab;