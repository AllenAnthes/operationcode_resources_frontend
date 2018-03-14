import React from 'react'
import PropTypes from 'prop-types'
import "./resourceCard.css";
import {Card, CardBody, CardTitle, CardText, CardLink} from 'reactstrap'

const ResourceCard = (props) => {
    const {name, url, category, language, paid, notes} = props;
    return (
        <div>
            <Card className={"resourceCard"}>
                <CardBody className={"resourceText"}>
                    <div className={"cardDivider"}>
                        <CardTitle className={"resourceName"}>{name}</CardTitle>
                        <CardLink className={"resourceUrl"} href={url}>{url}</CardLink>
                    </div>
                    <div className={"cardDivider"}>
                        <CardText className={"resourceInfo"}>
                            Category: {category}
                            <br/>
                            Language: {language}
                            <br/>
                            Paid: {paid ? 'yes' : 'no'}
                            <br/>
                            Notes: {notes}
                        </CardText>
                    </div>
                </CardBody>
            </Card>
        </div>
    )
};

ResourceCard.propTypes = {
    name: PropTypes.string.isRequired,
    url: PropTypes.string,
    category: PropTypes.string,
    language: PropTypes.string,
    paid: PropTypes.bool,
    notes: PropTypes.string
};

export default ResourceCard