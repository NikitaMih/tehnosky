import { memo, useEffect, useState } from 'react';
import style from './EditModal.module.scss';
import { Modal, Select } from '../../ui';
import { bannerParameters } from '../../../shared/mocks/parameters';
import { useActions } from '../../../hooks/useActions';
import { useSelector } from 'react-redux';
import { parametersState } from '../../../store/selectors/parametersSelect';
import { checkFormValidity } from '../../../shared/utils/valid';

const EditModal = ({ onClose } : { onClose: () => void }) => {
    const { detailCard } = useSelector(parametersState);
    const { changeParameter } = useActions();
    const [fields, setFields] = useState({
        title: '',
        type: '',
        value: '',
    });
    const [err, setErr] = useState(false);

    const selectBanner = (value: string) => {
        setFields({...fields, type: value});
    };

    useEffect(() => {
        setFields({
            title: detailCard?.parameter?.title,
            type: detailCard?.parameter?.type,
            value: detailCard?.parameter?.value, 
        })
    }, [detailCard]);

    const changeParameters = () => {
        if(checkFormValidity(fields)) {
            changeParameter({ id: detailCard.id, parameter: fields});
            onClose();
        } else {
            setErr(true);
        }
    }
    return (
        <Modal onClose={onClose} title="Edit parameter">
            {err && <div className={style.err}>Fill in all the fields</div>}
            <div className={style.block}>
                <Select title='Type' options={bannerParameters} selectValue={selectBanner}/>  
            </div>
            <div className={style.block}>
                <div className={style.title}>Title</div>
                <input className={style.input} value={fields.title} onChange={(event) => setFields({...fields, title: event.target.value})}/>
            </div>
            <div className={style.block}>
                <div className={style.title}>Text</div>
                <textarea className={style.textarea} value={fields.value} onChange={(event) => setFields({...fields, value: event.target.value})}/>
            </div>
            <div className={style.controls}>
                <button onClick={changeParameters}>Save</button>
            </div>
        </Modal>
    );
};

export default memo(EditModal);