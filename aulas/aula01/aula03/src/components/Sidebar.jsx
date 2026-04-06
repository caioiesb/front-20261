import logo from "../assets/learn.svg";
import Menu from "./Menu";

function Sidebar() {
    return (
    <aside className='hidden md:block bg-gray-300'>
        <hearder className='flex flex-row'>
            <img src={logo} alt="imagem do logo" />
            <h1>Aluno Online</h1>
        </hearder>
        <Menu/>
    </aside>
    )
}

export default Sidebar;