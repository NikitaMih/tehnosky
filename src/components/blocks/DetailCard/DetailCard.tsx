import { useSelector } from 'react-redux';
import style from './DetailCard.module.scss';
import { Modal } from '../../ui';
import { parametersState } from '../../../store/selectors/parametersSelect';

const DetailCard = ({onClose} : { onClose: () => void }) => {
    const { detailCard } = useSelector(parametersState);

    return (
        <Modal onClose={onClose} title="Detail">
            <h2 className={style.title}>{detailCard?.parameter?.title}</h2>
            <p className={style.description}>{detailCard?.parameter?.value}</p>
        </Modal>
    );
};

export default DetailCard;