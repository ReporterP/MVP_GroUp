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
    fetch('https://group.ithub.software:5000/api/resume-hard/user/' + cookiesUser.id)
    .then(response => response.json())
    .then(data => sethardSkills(data))
    .catch(err => console.log(err))
  }

  const getSoftSkills = () => {
    fetch('https://group.ithub.software:5000/api/resume-soft/user/' + cookiesUser.id)
    .then(response => response.json())
    .then(data => setsoftSkills(data))
    .catch(err => console.log(err))
  }

  const getWorkExp = () => {
    fetch('https://group.ithub.software:5000/api/resume-work-exp/user/' + cookiesUser.id)
    .then(response => response.json())
    .then(data => setworkExp(data))
    .catch(err => console.log(err))
  }

  useEffect(() => {
    getHardSkills()
    getSoftSkills()
    getWorkExp()
  }, []);

  return (
    <div id='resumeArea'>
      <EditableAccordionsArea title={'Hard-skills'} color={'#68e68b'} accordions={hardSkills} area={"hard"}/>

      <EditableAccordionsArea title={'Soft-skills'} color={'#ffbd70'} accordions={softSkills} area={"soft"}/>

      <EditableAccordionsArea title={'Опыт работы'} color={'#7c91ff'} accordions={workExp} area={"workExp"} />
    </div>
  );
}

export default Resume;
