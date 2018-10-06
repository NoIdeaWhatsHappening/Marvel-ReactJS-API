import React from 'react';
import PropTypes from 'prop-types';

import './Card.css';

import { Button } from '../../../UI/Button/Button';


export const DetailedCard = ({character}) => (
    <div className="card">
        <div className="card-main">
            <span className="card-title">{character.name}</span>
            <div className="card-image">
                <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={character.name}></img>
            </div>
        </div>
        <div className="card-content">
            {!!character.comics.available && <div className="comics">
                <ul className="collection with-header">
                    <li className="collection-header"><h4>Comics</h4></li>
                    {character.comics.items.map(comic => {
                        return (<a className="collection-item" key={comic.name} href={comic.resourceURI}>{comic.name}</a>);
                    })}
                </ul>
            </div>}
            {!!character.events.available && <div className="events">
                <ul className="collection with-header">
                    <li className="collection-header"><h4>Events</h4></li>
                    {character.events.items.map(event => {
                        return (<a className="collection-item" key={event.name} href={event.resourceURI}>{event.name}</a>);
                    })}
                </ul>
            </div>}
            {!!character.series.available && <div className="series">
                <ul className="collection with-header">
                    <li className="collection-header"><h4>Series</h4></li>
                    {character.series.items.map(series => {
                        return (<a className="collection-item" key={series.name} href={series.resourceURI}>{series.name}</a>);
                    })}
                </ul>
            </div>}
            {!!character.stories.available && <div className="stories">
                <ul className="collection with-header">
                    <li className="collection-header"><h4>Stories</h4></li>
                    {character.stories.items.map(story => {
                        return (
                            <div  key={story.name + story.type} >
                                <a  className="collection-item"href={story.resourceURI}>
                                    {story.name}
                                    <span  className="secondary-content">{story.type}</span>
                                </a>
                            </div>
                        );
                    })}
                </ul>
            </div>}
        </div>
        {!!character.urls && !!character.urls.length && <div className="card-action">
            <div className="character__actions">
                {character.urls.map(url => {
                    return <Button text={url.type} link={url.url} key={url.url}></Button>;
                })}
            </div>
        </div>}
    </div>
);

DetailedCard.propTypes = {
    character: PropTypes.object.isRequired
};