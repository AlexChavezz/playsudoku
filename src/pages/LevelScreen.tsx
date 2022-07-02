import { useParams } from "react-router-dom"

export const LevelScreen = (props:any) => {
    const {level} = useParams();
    
  return (
    <div>LevelScreen  :{level}</div>
  )
}
