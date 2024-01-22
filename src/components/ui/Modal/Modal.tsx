import { FC, PropsWithChildren } from 'react';
import style from './Modal.module.scss';



const Modal: FC<PropsWithChildren<{onClose: () => void, title: string}>> = ({ onClose, children, title}) => {
    return (
        <div className={style.back}>
            <div className={style.modal}>
                <button className={style.close} onClick={onClose}>+</button>
                <h3 className={style.title}>{title}</h3>
                <div className={style.content}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Modal;