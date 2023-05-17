import React from 'react';

const PostTypeSelector = props => {
    return (
        <>
            <div className='typeSelectorBar'>
                <div className={`typeSelector ${props.valueSelector}`}>
                    <select className='selectingList' onChange={e => props.setvalueSelector(e.target.value)}>
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