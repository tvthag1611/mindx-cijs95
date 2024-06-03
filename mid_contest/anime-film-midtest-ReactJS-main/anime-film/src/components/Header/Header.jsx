import './Header.css';
export default function Header() {
    return (
        <header>
            <h1 className='logo'>Anonime</h1>
            <div className="home">Home</div>
            <div className="list-anime">List anime</div>
            <input type="text" placeholder='Search anime or movie' />
        </header>
    )
}