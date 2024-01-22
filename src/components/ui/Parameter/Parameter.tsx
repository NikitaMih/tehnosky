import { FC, memo } from 'react';
import style from './Parameter.module.scss';
import editIcon from '../../../assets/icons/edit.svg';
import trashIcon from '../../../assets/icons/trash.svg';
import { parameter } from '../../../models/parameters.type';

type ParameterType = FC<{
    parameter: parameter
    deleteParam: (id: string) => void
    openParam: (id: string) => void
    editParam: (id: string) => void
  }>;

const Parameter: ParameterType = ({ parameter, deleteParam, openParam, editParam }) => {
    return (
        <div className={style.item}>
            <div className={style.info} onClick={() => openParam(parameter.id)}>
                <div>{parameter.id}</div>
                <div>{parameter.parameter.type}</div>
                <div>{parameter.parameter.title}</div>
            </div>
            <div className={style.controls}>
                <button className={style.control} onClick={() => deleteParam(parameter.id)}>
                    <img className={style.icon} src={trashIcon} alt='trash'/>
                    <span className={style.delete}>Delete</span>
                </button>
                <button className={style.control} onClick={() => editParam(parameter.id)}>
                    <img className={style.icon} src={editIcon} alt='edit'/>
                    <span className={style.edit}>Edit</span>
                </button>
            </div>
        </div>
    );
};

export default memo(Parameter);
