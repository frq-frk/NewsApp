import { Container, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { incrementCounter, decrementCounter } from '../redux/counter/action.js' 

function Counter() {

    const count = useSelector((state) => state.countReducer.count)
    const dispatch = useDispatch();

    return (
        <Container className="text-center">
            <h1 className="display-1">{count}</h1>
            <Button variant="dark" onClick={() => dispatch(incrementCounter())}>increment</Button><br/>
            <Button variant="dark" onClick={() => dispatch(decrementCounter())}>decrement</Button>
        </Container>
    )
}

export default Counter



















// import { Container, Button } from 'react-bootstrap'
// import { connect } from 'react-redux'
// import { incrementCounter } from '../redux/counter/action.js' 

// function Counter({ count, incrementCounter }) {
//     return (
//         <Container className="text-center">
//             <h1 className="display-1">{count}</h1>
//             <Button variant="dark" onClick={incrementCounter}>increment</Button>
//         </Container>
//     )
// }

// const mapStateToProps = (state) => {
//     return{
//         count : state.count
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return{
//         incrementCounter : () => dispatch(incrementCounter())
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Counter)

