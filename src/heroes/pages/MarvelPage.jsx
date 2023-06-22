import HeroList from "../components/HeroList"
import { heroes } from "../data/heroes"


const MarvelPage = () => {

  console.log(heroes.length)

  return (
    <div>
        <h1>
            Marvel Comics
        </h1>
        <hr />

        <HeroList publisher='Marvel Comics' />
        
    </div>
  )
}

export default MarvelPage