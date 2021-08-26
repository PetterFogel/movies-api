import "../../styles/navigation.css";

function Navigation() {
    return (
        <header>
            <h2>Vmdb</h2>
            <form>
                <input type="text" />
                <i className="fas fa-search"></i>
            </form>
            <nav>
                <ul>
                    <li>Watch List</li>
                    <li>Seen</li>
                </ul>
            </nav>
        </header>
    );
}

export default Navigation
