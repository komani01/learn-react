import React from 'react';
import PropTypes from 'prop-types';
import "./index.scss"
Album.propTypes = {
        album: PropTypes.array.isRequired,
};

function Album({album}) {
    return (
        <div className="album">
            <div className="album-url">
                    <img src={album.url} alt={album.name}/>
            </div>
            <p className="album-name">{album.name}</p>
        </div>
    );
}

export default Album;