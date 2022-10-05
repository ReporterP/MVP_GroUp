import React from 'react'
import RoadmapPoint from '../../../img/RoadmapPoint.svg'
import EditButton from '../../../img/EditButtonIcon.svg'
import PlusIcon from '../../../img/PlusIcon.svg'


const Roadmap = () => {
    const [creationPopupShown, setCreationPopupShown] = React.useState(false);

    const point = {
        date: {dm: '10.05', y: '2022'},
        name: 'Релиз приложения CoolApp'
    }

    let points = [];

    for (let i = 0; i < 20; i++) {
        points.push(point)
    }

    return (
        <div className='roadmap'>
            <table>
                {points.map(p => 
                    <tr>
                        <td>
                            <img className='editButton' src={EditButton} alt='edit button' onClick={()=>{console.log('edit point')}} />
                        </td>
                        <td className='date'>
                            {p.date.dm}
                            <br />
                            {p.date.y}
                        </td>
                        <td>
                            <img className='roadmapPoint' src={RoadmapPoint} alt="roadmap point" />
                        </td>
                        <td className='name'>
                            {p.name}
                        </td>
                    </tr>
                )}
            </table>
            
            {creationPopupShown ? (
                <div className='creationPopup'>
                    <input type='text' className='styledInput' placeholder='Название' />
                    <input type='date' className='styledInput' placeholder='Дата' required pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}" />
                    <div className="flex flexSpaceBetween">
                        <button className='voidButton' onClick={()=>setCreationPopupShown(false)}>
                            Отменить
                        </button>
                        <button className='greenButton'>
                            Сохранить
                        </button>
                    </div>
                </div>
            ) : ''}

            <div className='flatButton' onClick={() => setCreationPopupShown(!creationPopupShown)}>
                <img src={PlusIcon} alt="add point" />
            </div>
        </div>
    );
}

export default Roadmap;
