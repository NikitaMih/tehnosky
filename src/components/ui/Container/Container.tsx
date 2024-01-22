import { FC, PropsWithChildren } from 'react';
import style from './Container.module.scss';

const Container: FC<PropsWithChildren<{className?: string}>> = ({ children, className }) => {
    return (
        <div className={style.container}>
            {children}
        </div>
    );
};

export default Container;