import logo from '../images/logo 1logo-gris-db.png';
import avatar from '../images/avatar.png'

export const Logo = () => (
    <div className='logo-contenedor'>
        <img 
        src={logo}
        className='logo-app'
        alt='Logo de la aplicacion' />
      </div>
);

export const Avatar = () => (
  <div className='avatar-contenedor'>
      <img 
      src={avatar}
      className='avatar'
      alt='user avatar' />
    </div>
);

