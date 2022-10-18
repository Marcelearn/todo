import "./NavItem.css";
function NavItem({navLabel, navLink}) {
    return (
        <li className="NavItem">
            <a clasName="NavItem__Link" href= {navLink} title={navLabel}>{navLabel}</a>
        </li>

    );
}
export default NavItem;