interface DocumentIdPageProps {
  params: Promise<{ documentId: string }>
}

const DocumentId = async ({ params }: DocumentIdPageProps) => {
  const { documentId } = await params
  return ( 
    <div>
      Document ID {documentId}
    </div>
   )
}
 
export default DocumentId