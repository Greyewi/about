import React, { useEffect, useState } from 'react'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import TelegramIcon from '@mui/icons-material/Telegram'
import CloseIcon from '@mui/icons-material/Close'
import { OpenButton, Overlay, Dialog, Title, CloseButton, Messenger, Note } from './styles'
import { useTranslation } from '../../i18n/useTranslation'
import { cvStructure } from '../../i18n/structure'

interface Props {
    // Pinned to the bottom-right corner instead of sitting in the page flow.
    floating?: boolean
}

function Contact({ floating }: Props) {
    const { ui } = useTranslation()
    const [open, setOpen] = useState(false)
    const { person } = cvStructure

    useEffect(() => {
        if (!open) return
        const onKeyDown = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
        document.addEventListener('keydown', onKeyDown)
        return () => document.removeEventListener('keydown', onKeyDown)
    }, [open])

    return (
        <>
            <OpenButton type="button" $floating={floating} onClick={() => setOpen(true)}>
                {ui.contact.cta}
            </OpenButton>
            {open && (
                <Overlay onClick={() => setOpen(false)}>
                    <Dialog role="dialog" aria-modal="true" aria-labelledby="contact-title" onClick={e => e.stopPropagation()}>
                        <CloseButton type="button" aria-label={ui.contact.close} onClick={() => setOpen(false)}>
                            <CloseIcon />
                        </CloseButton>
                        <Title id="contact-title">{ui.contact.title}</Title>
                        <Messenger href={'https://wa.me/' + person.phone.replace(/\D/g, '')} target="_blank" rel="noopener noreferrer">
                            <WhatsAppIcon /> WhatsApp
                        </Messenger>
                        <Messenger href={`https://t.me/${person.tg}`} target="_blank" rel="noopener noreferrer">
                            <TelegramIcon /> Telegram
                        </Messenger>
                        <Note>{ui.contact.note}</Note>
                    </Dialog>
                </Overlay>
            )}
        </>
    )
}

export default Contact
