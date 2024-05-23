import Lislitem from "./Listltem"
const links=[
  {
    name:'Google',
    url:'https://google.com',
  },
  {
    name:'Facebook',
    url:'https://facebook.com',
  },
  {
    name:'Twitter',
    url:'https://twitter.com',
  },
  {
    name:'GitHub',
    url:'https://github.com',
  }
]

function App() {


  return (
    <>
      <div>
      <h1>Links</h1>
      <hr/>
      <ul>
        {
          links.map((link)=>(
            <Lislitem 
            key={link.name}
            name={link.name}
            url={link.url}
            
            />
          ))
        }
       {/* {links.map((link)=>(
          <li key={link.name}>
            <a href={link.url}>{link.name}</a>
          </li>
        ))}
       */}
      </ul>
      </div>
    </>
  )
}

export default App
