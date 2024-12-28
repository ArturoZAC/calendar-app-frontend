import { useDispatch, useSelector } from "react-redux"
import { onCloseDateModal, onOpenDateModel } from "../store";


export const useUiStore = () => {

  const dispatch = useDispatch();
  const { isDateModalOpen } = useSelector( state => state.ui);

  const openDateModal = () => {
    dispatch( onOpenDateModel() );
  }

  const closeDateModal = () => {
    dispatch( onCloseDateModal() );
  }

  return {
    isDateModalOpen,
    openDateModal,
    closeDateModal
  }
}