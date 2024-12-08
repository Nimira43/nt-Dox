import { Editor } from './editor'

interface DocumentIdPageProps {
  params: Promise<{ documentId: string }>
}

const DocumentId = async ({ params }: DocumentIdPageProps) => {
  const { documentId } = await params
  
  return ( 
    <div>
      Document ID {documentId}
      <Editor />
    </div>
   )
}
 
export default DocumentId