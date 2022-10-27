import './Perfil.css'
import Card from '../../components/card/Card';
import styled from 'styled-components'

const Image = styled.img`
  width: 150px;
`;

const Button = styled.button`
  width: 94px;
  border-radius: 30px;
  height: 37px;
  background-color: #ffffff;
  border: 1px solid #444444;
  cursor: pointer;
  margin-bottom: 20px;
`;

type functionFindById = (id: string) => void;

interface Props {
  perfil: any,
  findPerfil: functionFindById,
  setPerfil: any
}
function Perfil({ perfil, findPerfil, setPerfil }: Props) {
  return (
    <div className='interna p-10'>
      <Button onClick={() => setPerfil(null)}>Voltar</Button>
      <div className='flex perfil'>
        <Image src={perfil.picture}></Image>
        <div className='p-l-20 dados'>
          <p>name: {perfil.name}</p>
          <p>age: {perfil.age}</p>
          <p>email: {perfil.email}</p>
        </div>
      </div>
      {perfil.friends &&
        <>
          <h2>Friends</h2>
          <div className='flex flex-wrap-wrap friends'>
            {perfil.friends.map((val: any) => {
              return (
                <Card key={val._id}
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
          </div>

        </>
      }
    </div>
  )
}

export default Perfil;

