import { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import style from './Header.module.scss';
import { Search, Select } from '../../ui';
import { sortParameters } from '../../../shared/mocks/parameters';
import { useActions } from '../../../hooks/useActions';
import { filterData, sortData } from '../../../shared/utils/filter';
import { parametersState } from '../../../store/selectors/parametersSelect';

const Header: FC = () => {
    const { getParameters, setParameters } = useActions();
    const { parameters } = useSelector(parametersState);

    useEffect(() => {
        getParameters();
    }, [getParameters]);

    const selectWord = (findWord: string) => {
        setParameters(filterData(findWord, parameters));
    };

    const sortParam = (value: string) => {
        const decrease = value === 'descending' || false;
        setParameters(sortData(decrease, parameters));
    };

    return (
        <div className={style.filters}>
            <Search search={selectWord}/>
            <Select title='Sorting by' options={sortParameters} selectValue={sortParam}/>
        </div>
    );
};

export default Header;