import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHome, 
  faMoneyBillWave, 
  faReceipt, 
  faCalculator, 
  faChartPie, 
  faCog, 
  faUsers, 
  faFileInvoice, 
  faFileAlt, 
  faCreditCard, 
  faBell,
  faSignOutAlt 
} from '@fortawesome/free-solid-svg-icons';
import './Sidebar.css';

const Sidebar = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsAuthenticated(false);
    navigate('/login');
  };

  return (
    <div className="sidebar">
      <h2>Freelance Tax Manager</h2>
      <ul>
        <li>
          <Link to="/">
            <FontAwesomeIcon icon={faHome} />
            <span>Dashboard</span>
          </Link>
        </li>
        <li>
          <Link to="/income">
            <FontAwesomeIcon icon={faMoneyBillWave} />
            <span>Income</span>
          </Link>
        </li>
        <li>
          <Link to="/expenses">
            <FontAwesomeIcon icon={faReceipt} />
            <span>Expenses</span>
          </Link>
        </li>
        {/* <li>
          <Link to="/tax-planning">
            <FontAwesomeIcon icon={faCalculator} />
            <span>Tax Planning</span>
          </Link>
        </li> */}
        {/* <li>
          <Link to="/reports">
            <FontAwesomeIcon icon={faChartPie} />
            <span>Reports</span>
          </Link>
        </li> */}
        <li>
          <Link to="/clients">
            <FontAwesomeIcon icon={faUsers} />
            <span>Clients</span>
          </Link>
        </li>
        <li>
          <Link to="/invoices">
            <FontAwesomeIcon icon={faFileInvoice} />
            <span>Invoices</span>
          </Link>
        </li>
        <li>
          <Link to="/tax-reports">
            <FontAwesomeIcon icon={faFileAlt} />
            <span>Tax Reports</span>
          </Link>
        </li>
        <li>
          <Link to="/payment-methods">
            <FontAwesomeIcon icon={faCreditCard} />
            <span>Payment Methods</span>
          </Link>
        </li>
        <li>
          <Link to="/notifications">
            <FontAwesomeIcon icon={faBell} />
            <span>Notifications</span>
          </Link>
        </li>
        <li>
          <Link to="/settings">
            <FontAwesomeIcon icon={faCog} />
            <span>Settings</span>
          </Link>
        </li>
        <li onClick={handleLogout} className="logout">
          <FontAwesomeIcon icon={faSignOutAlt} />
          <span>Logout</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
