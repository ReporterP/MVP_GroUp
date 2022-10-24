import React from 'react';
import EditableAccordionsArea from './EditableAccordionsArea';

const Resume = () => {
  // TODO: create hardSkills, softSkills, workExperience consts and get data from DB here
  const hardSkills = [
    {
      id: 1,
      text: 'Python',
      starsCount: 3,
      description: 'Django, Flask, PyGame, FastAPI, Pandas, NumPy, Nimpa'
    },
    {
      id: 2,
      text: 'C#',
      starsCount: 4,
      description: 'ADO.NET, EntityFramework, .NET 6, WPF, UWP, MAUI, Xamarin'
    },
    {
      id: 3,
      text: 'Dart',
      starsCount: 2,
      description: 'Flutter'
    }
  ]

  // TODO: set data here
  return (
    <div id='resumeArea'>
      <EditableAccordionsArea title={'Hard-skills'} color={'#68e68b'} accordions={hardSkills} />

      <EditableAccordionsArea title={'Soft-skills'} color={'#ffbd70'} accordions={hardSkills} />

      <EditableAccordionsArea title={'Опыт работы'} color={'#7c91ff'} accordions={hardSkills} />
    </div>
  );
}

export default Resume;
