import styled from 'styled-components'

const Box = styled.div`
  border-radius: 30px;
  border: 1px solid #858588;
  padding: 10px 10px 20px 10px;
  margin: 20px;
  width: 240px;
  background-color: #fff;
`;

const Image = styled.div`
  margin-top: 20px;
  margin-bottom: 15px;
  display: flex;
  justify-content: center
`

type functionFindById = (id : string) => void;

interface Props {
  key: number;
  id: string;
  name: string;
  picture: string;
  age: number;
  eyeColor: string;
  company: string;
  email: string;
  phone?: string; 
  children: React.ReactNode;
  findPerfil: functionFindById;
}


function Card({key, id, name, picture, age, eyeColor, company, email, phone, findPerfil}: Props) {
  return (
    <Box key={key}>
      <Image >
        <img src={picture} alt={name}/>
      </Image>
      <a href="javascript:;" onClick={() => findPerfil(id)}>name: {name}</a>
      <p>age: {age}</p>
      <p>eyeColor: {eyeColor}</p>
      <p>company: {company}</p>
      <p>email: {email}</p>
    </Box>
  )

}

export default Card;