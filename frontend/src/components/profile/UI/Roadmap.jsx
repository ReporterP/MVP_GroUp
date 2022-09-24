import React from 'react'
import RoadmapPoint from '../../../img/RoadmapPoint.svg'
import EditButton from '../../../img/EditButtonIcon.svg'
import PlusIcon from '../../../img/PlusIcon.svg'

const Roadmap = () => {
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

            <div className='flatButton' onClick={()=>{console.log('add point')}}>
                <img src={PlusIcon} alt="add point" />
            </div>
        </div>
    );
}

export default Roadmap;
