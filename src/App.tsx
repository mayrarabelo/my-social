import db from './services/db.json';
import { useState } from 'react';
import Card from './components/card/Card';
import Perfil from './components/perfil/Perfil';
import Header from './components/header/Header';
import styled from 'styled-components'

const Container = styled.div`
  padding: 20px;
`;

function App() {

  const [searchName, setSearchName] = useState('');
  const [perfil, setPerfil] = useState<any>();

  const findPerfil = (id: string) => {
    let person = db.filter(item => item._id == id)
    if(!person.length){
      person = perfil.friends.filter((item: { _id: string; }) => item._id == id)
    }
    setPerfil(person[0]);
  }

  return (
    <Container>
      <Header handleOnChange={setSearchName}/>
      <main className='flex flex-wrap-wrap'>
        { !perfil && 
          db.filter((val) => {
            if( searchName == '') {
              return val
            } else if (val.name.toLowerCase().includes(searchName.toLowerCase())) {
              return val
            }
          }).map((val, key) => {
            return (             
              <Card key={key}
                  id={val._id}
                  name={val.name}
                  picture={val.picture}
                  age={val.age}
                  eyeColor={val.eyeColor}
                  company={val.company}
                  email={val.email}
                  findPerfil={findPerfil}>
              </Card>            
            )
          })
        }
        {!!perfil && 
          <Perfil perfil={perfil} setPerfil={setPerfil} findPerfil={findPerfil} />
        }
      </main>
    </Container>
  );
}

export default App;
