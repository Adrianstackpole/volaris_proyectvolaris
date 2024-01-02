import { useParams } from 'react-router-dom'

const SignUp = () => {
  const params = useParams()
  console.log(params)
  return <h1>Loading</h1>
}

export default SignUp
