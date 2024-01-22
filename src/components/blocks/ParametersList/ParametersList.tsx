import { useSelector } from 'react-redux';
import style from './ParametersList.module.scss';
import { parametersState } from '../../../store/selectors/parametersSelect';
import { Parameter } from '../../ui';
import { useState } from 'react';
import CreateModal from '../CreateModal/CreateModal';
import { useActions } from '../../../hooks/useActions';
import DetailCard from '../DetailCard/DetailCard';
import EditModal from '../EditModal/EditModal';

const ParametersList = () => {
    const { deleteParameter, getParameterById } = useActions();
    const { parametersFilter } = useSelector(parametersState);
    const [createModal, setCreateModal] = useState(false);
    const [editModal, setEditModal] = useState(false);
    const [detailCard, setDetailCard] = useState(false);

    const onClose = () => {
        setCreateModal(false);
        setDetailCard(false);
        setEditModal(false);
    };

    const deleteParam = (id: string) => {
        deleteParameter(id);
    };

    const openParam = (id: string) => {
        setDetailCard(true);
        getParameterById(id);
    }

    const editParam = (id: string) => {
        setEditModal(true);
        getParameterById(id);
    }

    return (
        <div className={style.table}>
            <div className={style.header}>
                <div>ID</div>
                <div>Type</div>
                <div>Title</div>
            </div>
            <div className={style.list}>
                {parametersFilter?.map((parameter) => (
                    <Parameter
                        key={parameter.id} 
                        parameter={parameter} 
                        deleteParam={deleteParam}
                        openParam={openParam}
                        editParam={editParam}
                    />
                ))}
            </div>
            <div className={style.controls}>
                <button className={style.addBtn} onClick={() => setCreateModal(true)}>Add parameter</button>
            </div>
            {createModal && <CreateModal onClose={onClose}/>}
            {detailCard && <DetailCard onClose={onClose}/>}
            {editModal && <EditModal onClose={onClose}/>}
        </div>
    );
};

export default ParametersList;