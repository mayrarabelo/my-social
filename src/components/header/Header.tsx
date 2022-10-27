import './Header.css'

interface Props {
  handleOnChange: (param: string) => void;
}

function Header({handleOnChange}: Props ) {
    return (    
      <header className="flex">
        <h1>MySocial</h1>
        <input 
          type="search" 
          id="site-search" 
          placeholder="search"
          onChange={(event: React.ChangeEvent<HTMLInputElement>): void => handleOnChange(event.target.value)}
          >
        </input>
      </header>    
    )
}

export default Header;