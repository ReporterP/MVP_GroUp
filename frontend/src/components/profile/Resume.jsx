import React, {useState, useEffect} from 'react';
import Cookies from 'universal-cookie';
import EditableAccordionsArea from './EditableAccordionsArea';

const Resume = () => {
  var cookie = new Cookies();
  const cookiesUser = cookie.get("user")

  const [hardSkills, sethardSkills] = useState([]);
  const [softSkills, setsoftSkills] = useState([]);
  const [workExp, setworkExp] = useState([]);

  const getHardSkills = () => {
    fetch('/api/resume-hard/user/' + cookiesUser.id)
    .then(response => response.json())
    .then(data => sethardSkills(data))
    .catch(err => console.log(err))
  }

  const getSoftSkills = () => {
    fetch('/api/resume-soft/user/' + cookiesUser.id)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
  }

  const getWorkExp = () => {
    fetch('/api/resume-work-exp/user/' + cookiesUser.id)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
  }

  useEffect(() => {
    getHardSkills()
    getSoftSkills()
    getWorkExp()
  }, []);

  // TODO: create hardSkills, softSkills, workExperience consts and get data from DB here
  const hardSkill = [
    {
      id: 1,
      hard: 'Python',
      level_edu: 3,
      description: 'Django, Flask, PyGame, FastAPI, Pandas, NumPy, Nimpa'
    },
    {
      id: 2,
      hard: 'C#',
      level_edu: 4,
      description: 'ADO.NET, EntityFramework, .NET 6, WPF, UWP, MAUI, Xamarin'
    },
    {
      id: 3,
      hard: 'Dart',
      level_edu: 2,
      description: 'Flutter'
    }
  ]

  // TODO: set data here
  return (
    <div id='resumeArea'>
      <EditableAccordionsArea title={'Hard-skills'} color={'#68e68b'} accordions={hardSkills} />

      <EditableAccordionsArea title={'Soft-skills'} color={'#ffbd70'} accordions={hardSkill} />

      <EditableAccordionsArea title={'Опыт работы'} color={'#7c91ff'} accordions={hardSkill} />
    </div>
  );
}

export default Resume;
