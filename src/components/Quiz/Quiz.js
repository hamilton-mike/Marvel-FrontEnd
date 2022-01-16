import React, { useCallback, useState, useEffect } from 'react'
import EventQuestion from '../Quiz/Event'
import ComicQuestion from '../Quiz/Comic'
import StoryQuestion from '../Quiz/Story'
import { HomeDiv } from '../HomeHero/HomeHeroStyle'
import { Button } from '../HomeHero/HomeHeroStyle'
import { Select } from '../Form/FormStyles'
import { H2 } from "../Events/EventsStyle";
import { Container, Label } from '../../globalStyles'
import { Header, QuizContainer } from '../Quiz/QuizStyles'
import doom from '../../img/mf.jpg'
import axios from 'axios'

const Quiz = () => {
    const [teams, setTeams] = useState([]);
    const [select, setSelect] = useState('');
    const [hero, setHero] = useState("");
    const [quiz, setQuiz] = useState(true);
    const url = 'https://marvel-mern-app.herokuapp.com';

    const fromBackend = useCallback( async () => {
      try {
        const get = await axios(`${url}/team`)
        setTeams(get.data)
      } catch (error) {
        console.error(error);
      }
    }, [])

    const getMembers = useCallback( async (id) => {
      try {
        const get = await axios(`${url}/hero`);
        const members = get.data.filter(obj => obj.team === id)
        setHero(members)
      } catch (error) {
        console.error(error);
      }
    }, [])

    const selectedTeam = (e) => {
      const selectedTeam = e.target.value;
      setSelect(selectedTeam);
    };

    const startQuiz = () => {
      for (let i = 0; i < teams.length; i++) {
        let team = teams[i];

        if (team.title === select) {
          getMembers(team._id)
        }
      }
      setQuiz(q => !q)
    }

    const endQuiz = () => {
      setQuiz(q => !q);
    }

    useEffect(() => {
      fromBackend();
      getMembers();
    }, [fromBackend, getMembers]);

    let components = [];
    let num = 0;
    let i = 0;

    while (i < hero.length) {
      if (num > 2) {
        num = 0;
      }

      num++;

      if (num === 1) {
        components.push(<ComicQuestion hero={hero[i]} />)
      } else if (num % 2 === 0) {
        components.push(<StoryQuestion hero={hero[i]} />)
      } else {
        components.push(<EventQuestion hero={hero[i]} />)
      }

      i++;
    }

    return (
      <>
        <HomeDiv>
          <div>
            <img style={{ borderRadius: "1rem" }} src={doom} alt="comic" />
          </div>
          <div>
            <p>Do you know your Team?</p>
            <p>Take the trivia</p>
            <Button><a href="/create">Create</a></Button>
            <Button><a href="/search">Search</a></Button>
          </div>
        </HomeDiv>
        <Container>
          {quiz ? (
            <>
              <Label htmlFor="team-names" style={{ color: 'white' }}>Choose Team</Label>
              <Select name="team-names" id="team-names" onChange={selectedTeam}>
                <option>Select Team</option>
                {teams.map((team) => (
                  <option key={team._id} value={team.title}>
                    {team.title}
                  </option>
                ))}
              </Select>
              <Button onClick={startQuiz}>Start</Button>
            </>
          ) : (
            <>
              <Header>
                <H2>Questions for {select}</H2>
              </Header>
              <QuizContainer>
                {components}
              </QuizContainer>
              <Header>
                <Button onClick={endQuiz}>Finish</Button>
              </Header>
            </>
          )}
        </Container>
      </>
    );
}

export default Quiz
