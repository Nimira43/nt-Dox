import { Editor } from './editor'

interface DocumentIdPageProps {
  params: Promise<{ documentId: string }>
}

const DocumentId = async ({ params }: DocumentIdPageProps) => {
  const { documentId } = await params
  
  return ( 
    <div className='min-h-screen bg-[#fffaf0]'>
      <Editor />
    </div>
   )
}
 
export default DocumentId