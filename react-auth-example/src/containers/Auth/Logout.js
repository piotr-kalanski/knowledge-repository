import { useContext } from 'react';
import { AuthContext } from '../../context/auth-context';

const Logout = props => {
    const authContext = useContext(AuthContext);
    authContext.logout();
    props.history.push('/');
    return null;
}
 
export default Logout;