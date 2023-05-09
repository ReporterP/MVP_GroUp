import React, {useState, useEffect} from 'react';
import Cookies from 'universal-cookie';
import EditableAccordionsArea from './EditableAccordionsArea';

const Resume = () => {
  var cookie = new Cookies();
  const cookiesUser = cookie.get("user")

  const [hardSkills, sethardSkills] = useState([]);
  const [softSkills, setsoftSkills] = useState([]);

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

  useEffect(() => {
    getHardSkills()
    getSoftSkills()
  }, []);

  return (
    <div id='resumeArea'>
      <EditableAccordionsArea title={'Hard-skills'} color={'#68e68b'} accordions={hardSkills} area={"hard"} userid={cookiesUser.id}/>
      <EditableAccordionsArea title={'Soft-skills'} color={'#ffbd70'} accordions={softSkills} area={"soft"} userid={cookiesUser.id}/>
    </div>
  );
}

export default Resume;
