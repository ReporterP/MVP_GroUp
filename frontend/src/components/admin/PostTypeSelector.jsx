import React from 'react';

const PostTypeSelector = () => {
    const [typeSelected, setTypeSelected] = React.useState(false)
    const checkValue = (v) => {
        if (v !== '') setTypeSelected(true)
        else setTypeSelected(false)
    }

    return (
        <>
            <div className={`typeSelectorBar`}>
                <div className={`typeSelector ${typeSelected ? 'selected' : ''}`}>
                    <select className={'selectingList'} onChange={(e) => checkValue(e.target.value)}>
                        <option value=''>Не выбрано</option>
                        <option value='vacancy'>Вакансия</option>
                        <option value='event'>Мероприятие</option>
                        <option value='news'>Новость</option>
                    </select>
                </div>
            </div>
        </>
    )
}

export default PostTypeSelector;