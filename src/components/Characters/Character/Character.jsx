import React, {Component} from 'react';

import { connect } from 'react-redux';
import { fetchSingleItem } from '../../../redux/actions/dataActions';

import { Card } from './Card/Card';

class Character extends Component {
    componentDidMount() {
        this.props.fetchSingleItem('characters', +this.props.url);
    }
    render() {
        const character = this.props.character;
        console.log(character);
        return (
            <div className="row">
                <div className="col s12 ">{character ? <Card character={character} key={character.id}/> : <span>Loading data</span>}</div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    character: state.data.item
});

export default connect(mapStateToProps, { fetchSingleItem })(Character);