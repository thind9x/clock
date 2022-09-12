import React, { FunctionComponent } from 'react';
import styles from "./Navbar.module.scss"
interface NavbarProps {
    title?:string;
    onClick?:()=>void;
    color?:string;
}


const Navbar: FunctionComponent<NavbarProps> = ({title,onClick,color}) => {

  return (<nav className={styles?.navbar}>
      <div onClick={onClick} className={""} style={{display:'flex'}}>
          <span className={styles.title} style={{color:color,fontWeight:'bold'}}>
              {title?title:"Voucher"}
          </span>
      </div>
  </nav>);
};

export default Navbar;
