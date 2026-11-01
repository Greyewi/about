import { createPortal } from 'react-dom'
import React, { FC, useSyncExternalStore } from 'react'

type Props = { children: React.ReactElement }

const subscribe = () => () => {}

export const Modal: FC<Props> = ({ children }) => {
    // null on the server and during hydration, the #modal element afterwards
    const modalRoot = useSyncExternalStore(
        subscribe,
        () => document.querySelector('#modal'),
        () => null
    )

    if (!modalRoot) return null

    return <section>{createPortal(children, modalRoot)}</section>
}
