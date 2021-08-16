import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import ActionCreators from '../../Redux/actions/index'

//Связывает все экшен креэйторы с диспатчем
export const DispatchPizzaActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(ActionCreators, dispatch)

}