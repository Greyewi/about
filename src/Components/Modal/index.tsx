import { createPortal } from 'react-dom';
import React, {FC} from 'react'
const modalRoot = document.querySelector('#modal')

type Props = {children: React.ReactElement}
export const Modal: FC<Props> = ({children}) => {
    return <section>
        {modalRoot && createPortal(children, modalRoot)}
    </section>
}