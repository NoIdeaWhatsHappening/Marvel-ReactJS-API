import React from 'react';
import PropTypes from 'prop-types';

// import './Card.css';

import { Button } from '../../../UI/Button/Button';

export const DetailedCard = ({creator}) => (
    <div className="card">
        <div className="card-main">
            <span className="card-title">{creator.fullName}</span>
            <div className="card-image">
                <img src={`${creator.thumbnail.path}.${creator.thumbnail.extension}`} alt={creator.fullName}></img>
            </div>
        </div>
        <div className="card-content">
            {!!creator.comics.available && <div className="comics">
                <ul className="collection with-header">
                    <li className="collection-header"><h4>Comics</h4></li>
                    {creator.comics.items.map(comic => {
                        return (<a className="collection-item" key={comic.name} href={comic.resourceURI}>{comic.name}</a>);
                    })}
                </ul>
            </div>}
            {!!creator.events.available && <div className="events">
                <ul className="collection with-header">
                    <li className="collection-header"><h4>Events</h4></li>
                    {creator.events.items.map(event => {
                        return (<a className="collection-item" key={event.name} href={event.resourceURI}>{event.name}</a>);
                    })}
                </ul>
            </div>}
            {!!creator.series.available && <div className="series">
                <ul className="collection with-header">
                    <li className="collection-header"><h4>Series</h4></li>
                    {creator.series.items.map(series => {
                        return (<a className="collection-item" key={series.name} href={series.resourceURI}>{series.name}</a>);
                    })}
                </ul>
            </div>}
            {!!creator.stories.available && <div className="stories">
                <ul className="collection with-header">
                    <li className="collection-header"><h4>Stories</h4></li>
                    {creator.stories.items.map(story => {
                        return (
                            <div  key={story.name} >
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
        {!!creator.urls && !!creator.urls.length && <div className="card-action">
            <div className="creator__actions">
                {creator.urls.map(url => {
                    return <Button text={url.type} link={url.url} key={url.url}></Button>;
                })}
            </div>
        </div>}
    </div>
);

DetailedCard.propTypes = {
    creator: PropTypes.object.isRequired
};