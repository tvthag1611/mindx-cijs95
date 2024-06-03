export default function Card({ movieName, episode, image, onSelected, description }) {
    return (
        <li onClick={() => onSelected({ movieName, episode, image, description })}>
            <div className="image-container">
                <img className="image" src={image} alt="" />
                <div className="overlay"></div>
                <p className="episode">Episode {episode}</p>
            </div>
            <h4 className="movieName">{movieName}</h4>
        </li>
    );
}