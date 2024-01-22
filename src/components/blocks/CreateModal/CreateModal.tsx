import { memo, useState } from 'react';
import style from './CreateModal.module.scss';
import { Modal, Select } from '../../ui';
import { bannerParameters } from '../../../shared/mocks/parameters';
import { useActions } from '../../../hooks/useActions';
import { checkFormValidity } from '../../../shared/utils/valid';

const CreateModal = ({ onClose } : { onClose: () => void }) => {
    const { createParameter } = useActions();
    const [fields, setFields] = useState({
        title: '',
        type: 'big',
        value: '',
    });
    const [err, setErr] = useState(false);

    const selectBanner = (value: string) => {
        setFields({...fields, type: value});
    }

    const createParameters = () => {
        if(checkFormValidity(fields)) {
            createParameter(fields);
            onClose();
        } else {
            setErr(true);
        }
    }

    return (
        <Modal onClose={onClose} title="Add parameter">
            {err && <div className={style.err}>Fill in all the fields</div>}
            <div className={style.block}>
                <Select title='Type' options={bannerParameters} selectValue={selectBanner}/>  
            </div>
            <div className={style.block}>
                <div className={style.title}>Title</div>
                <input className={style.input} onChange={(event) => setFields({...fields, title: event.target.value})}/>
            </div>
            <div className={style.block}>
                <div className={style.title}>Text</div>
                <textarea className={style.textarea} onChange={(event) => setFields({...fields, value: event.target.value})}/>
            </div>
            <div className={style.controls}>
                <button onClick={createParameters}>Save</button>
            </div>
        </Modal>
    );
};

export default memo(CreateModal);
