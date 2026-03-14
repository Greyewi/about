import dynamic from 'next/dynamic'

const MindMap = dynamic(() => import('../src/Components/MindMap'), { ssr: false })

export default function MindMapPage() {
    return <MindMap />
}
