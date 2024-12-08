interface DocumentIdPageProps {
  params: Promise<{ documentId: string }>
}

const DocumentId = async ({ params }: DocumentIdPageProps) => {
  const awaitedParams = await params
  const documentId = awaitedParams.documentId

  return ( 
    <div>
      Document ID {documentId}
    </div>
   )
}
 
export default DocumentId