import { createPortal } from 'react-dom'
import React, { FC, useState, useEffect } from 'react'

type Props = { children: React.ReactElement }

export const Modal: FC<Props> = ({ children }) => {
    const [modalRoot, setModalRoot] = useState<Element | null>(null)

    useEffect(() => {
        setModalRoot(document.querySelector('#modal'))
    }, [])

    if (!modalRoot) return null

    return <section>{createPortal(children, modalRoot)}</section>
}
