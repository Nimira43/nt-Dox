interface DocumentLayoutProps {
  children: React.ReactNode
}

const DocumentsLayout = ({ children }: DocumentLayoutProps) => {
  return ( 
    <div className='flex flex-col gap-y-4'>
      <nav className='w-full bg-[#012222] text-[#fffaf0]'>Document Navbar</nav>
      {children}
    </div>
   )
}
 
export default DocumentsLayout