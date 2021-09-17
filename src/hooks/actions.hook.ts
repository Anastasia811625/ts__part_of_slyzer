import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import Actions from '../store/action-creators'

export const useActions = () => {
  const dispath = useDispatch()
  return bindActionCreators(Actions, dispath)
}